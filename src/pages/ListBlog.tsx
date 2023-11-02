import React, { useEffect, useState } from 'react';
import { Box, Stack, alpha, Pagination, styled, LinearProgress, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import CollapsedBreadcrumbs, { BreadcrumbItem } from '../components/breadcrumb';
import { BlogDetailData } from './BlogDetail';
import { fDateTime } from '../utils/formatTime';
import Components from '../components/blog-post/OverrideHTML';
import { GetListBlogRequest, GetListBlogResponse, getListBlog } from '../api/blog/getListBlog';
import { StyledHeading } from '../styles/Common';
import blogImg from '../images/illustrations_blog.svg';
import Loading from './Loading';
import { useAppDispatch } from '../store/hooks';
import message from '../lang/en.json';
import { openSnackbar } from '../store/ui';

const StyledRoot = styled(Box)(({ theme }) => ({
  padding: '16px',
  width: '100%',
  backgroundColor: '#FFF',
  transitionProperty: 'width',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '.5s',
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.up('lg')]: {
    padding: '20px 60px',
    width: '1024px',
  },
}));

const StyledBlogContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  gap: '16px',
  maxHeight: '240px',
  overflow: 'hidden',
  position: 'relative',
  '&>a.expand': {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '60%',
    padding: '8px',
    height: '75px',
    display: 'flex',
    alignItems: 'end',
    textDecoration: 'none',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom,rgba(241,243,251,0) 0%,#f1f3fb 60%)',
  },

  [theme.breakpoints.down('md')]: {
    '&>a.expand': {
      width: '100%',
    },
    '& .markdown-body.col-span-3': {
      gridColumn: 'span 5 / span 5',
    },
    maxHeight: '436px',
  },
}));

const StyledImage = styled('figure')(({ theme }) => ({
  gridColumn: 'span 2 / span 2',
  '& > img': {
    width: '400px',
    height: '240px',
    objectFit: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '8px',
  },
  [theme.breakpoints.down('md')]: {
    gridColumn: 'span 5 / span 5',
    '& > img': {
      width: '100%',
    },
  },
}));

const StyledLoading = styled(LinearProgress)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
});

const breadcrumbs: BreadcrumbItem[] = [
  { name: 'ホーム', href: '/' },
  { name: 'ブログ', href: '' },
];

const defaultValue: GetListBlogRequest = {
  currentPage: 1,
  limit: 5,
};

export interface ListBlog {
  title: string;
  createDate: string;
  content: BlogDetailData[];
}

export default function ListBlog(): JSX.Element {
  const dispatch = useAppDispatch();
  const [heading, setHeading] = useState('ブログ');
  const [current, setCurrent] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  const [listPost, setListPost] = useState<BlogDetailData[]>([]);
  const [paging, setPaging] = useState({
    totalPage: 0,
    totalRecord: 0,
    currentPage: 0,
  });

  const getListBlogInit = async () => {
    try {
      setLoading(true);
      const response = await getListBlog(current);
      const { data: listBlog, totalPage } = response as GetListBlogResponse;

      if (listBlog.content.length === 0) {
        setListPost([]);
        return;
      }

      const content = listBlog.content.map((item) => ({
        ...item,
        content: item.content.slice(0, 1000) + '...',
      }));

      setHeading(listBlog.title);
      setListPost(content);
      setPaging({
        ...paging,
        totalPage,
      });
    } catch (error) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListBlogInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const handleChangePaging = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrent({ ...current, currentPage: page });
  };

  if (listPost.length === 0 && loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <StyledRoot>
        <CollapsedBreadcrumbs navigationData={breadcrumbs} />
        <StyledHeading className="text-[150%] lg:!text-[230%]">{heading}</StyledHeading>

        {listPost.length !== 0 && (
          <>
            <Stack
              mb={3}
              position="relative"
              alignItems="center"
              padding="12px"
              bgcolor={(theme) => alpha(theme.palette.primary.main, 0.05)}
              borderRadius="8px"
            >
              <Pagination onChange={handleChangePaging} count={paging.totalPage} shape="rounded" color="primary" />
              {loading && <StyledLoading />}
            </Stack>
          </>
        )}

        {listPost.length ? (
          listPost.map((item, key) => (
            <React.Fragment key={key}>
              <StyledHeading className="--with-background">
                <span>{item.title}</span>
              </StyledHeading>
              <StyledBlogContainer className="preview-blog">
                <StyledImage>
                  <img src={item.image} alt={item.title} />
                </StyledImage>
                <Markdown
                  className="markdown-body col-span-3"
                  options={{
                    wrapper: 'div',
                    forceBlock: false,
                    overrides: Components,
                  }}
                >
                  {item.content}
                </Markdown>
                <Link className="expand" component={RouterLink} to={`/blog-detail/${item.id}`}>
                  続きを読む
                </Link>
              </StyledBlogContainer>
              {item.createDate && (
                <p className="text-right mt-[16px]">
                  {fDateTime(new Date(item.createDate), 'yyyy年MM月dd日 HH:mm')}
                  <Link component={RouterLink} to={`/blog-detail/${item.id}`}>
                    ｜続きを読む｜
                  </Link>
                </p>
              )}
            </React.Fragment>
          ))
        ) : (
          <Stack mb={3} justifyContent="center" alignItems="center" gap="5em">
            <img style={{ width: '40%' }} src={blogImg} alt="記事がありません。" />
            <h3 style={{ fontSize: '150%', fontWeight: 'bold', letterSpacing: '0.1em' }}>記事がありません。</h3>
          </Stack>
        )}
      </StyledRoot>
    </React.Fragment>
  );
}
