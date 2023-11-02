import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Markdown from 'markdown-to-jsx';
import CollapsedBreadcrumbs, { BreadcrumbItem } from '../components/breadcrumb';
import Components from '../components/blog-post/OverrideHTML';
import { TableOfContent } from '../components/utils';
import { Location } from '../interface/FlowType';
import { useHeadsObserver } from '../hook/useHeadsObserver';
import { GetBlogByIdResponse, getBlogById } from '../api/blog/getBlogById';
import { URL_MAPPING } from '../routes/urlMapping';
import { StyledHeading } from '../styles/Common';
import Loading from './Loading';
import { useAppDispatch } from '../store/hooks';
import { openSnackbar } from '../store/ui';
import message from '../lang/en.json';

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'ホーム', href: '/' },
  { name: 'ブログ', href: '/blog' },
  { name: 'ブログの詳細', href: '' },
];

export interface BlogDetailData {
  title: string;
  createDate: string;
  content: string;
  image: string;
  id: string;
}

export default function BlogDetail(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [data, setData] = useState<BlogDetailData>({} as BlogDetailData);
  const [tocs, setTocs] = useState<Location[]>([]);
  const [headingElement, setHeadingElement] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const { activeId } = useHeadsObserver(headingElement);
  const { blogId } = useParams();

  const getBLogDetail = async () => {
    try {
      setLoading(true);
      if (!blogId) {
        navigate(URL_MAPPING.PAGE_404_URL);
        return;
      }
      const response = await getBlogById(blogId);
      const { data } = response as GetBlogByIdResponse;
      if (!data) {
        return;
      }
      setData(data);
    } catch (error) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBLogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogId]);

  const pageData = useMemo(() => {
    if (Object.keys(data).length === 0) {
      return;
    }

    return (
      <Markdown
        className="markdown-body"
        options={{
          forceBlock: true,
          overrides: Components,
        }}
      >
        {data?.content || ''}
      </Markdown>
    );
  }, [data]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2'));
    headings.shift();
    const tocs: Location[] = headings?.map((item: Element) => ({
      location: item.id,
      innerText: item.textContent || '',
      level: Number(item.nodeName.charAt(1)),
    }));

    setTocs(tocs);
    setHeadingElement(headings);
  }, [pageData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <Box className="flex flex-row justify-center gap-[16px]">
        <Box className="main-container">
          <CollapsedBreadcrumbs navigationData={breadcrumbs} />
          <StyledHeading className="text-[150%] lg:!text-[230%]">{data.title}</StyledHeading>
          {pageData}
        </Box>
        <TableOfContent tocs={tocs} activeId={activeId} />
      </Box>
    </React.Fragment>
  );
}
