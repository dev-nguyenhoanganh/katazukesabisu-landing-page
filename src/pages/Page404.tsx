import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { ParagraphContent } from '../components/blog-post/type';
import svg404NotFound from '../images/404_not_found.svg';
import { ApplicationContext } from '../ApplicationContext';
import { GetNotFounaDataResponse, NotFoundData, getNotFound } from '../api/404/getNotFound';
import { StyledHeading, StyledPrimaryBtn } from '../styles/Common';
import { useAppDispatch } from '../store/hooks';
import { openSnackbar } from '../store/ui';
import message from '../lang/en.json';

export default function Page404(): JSX.Element {
  const dispatch = useAppDispatch();
  const { setHeaderIsOpen } = useContext(ApplicationContext);
  const [pageData, setPageDate] = useState<NotFoundData>();

  const get404NotFound = async () => {
    try {
      const response = (await getNotFound()) as GetNotFounaDataResponse;
      if (response === undefined) {
        return;
      }
      setPageDate(response.data);
    } catch (error) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    }
  };

  useEffect(() => {
    // get404NotFound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Box className="p-[16px] lg:px-[60px] lg:w-[1024px] lg:py-[20px] w-[100%] bg-white mx-auto transition-[width] duration-500">
        <StyledHeading className="text-[150%] lg:!text-[230%]">
          {pageData?.title || 'お探しのページは見つかりませんでした'}
        </StyledHeading>

        <div className="mt-[16px] lg:mt-[20px] flex flex-col gap-[16px] items-center content-center">
          <img src={svg404NotFound} title="404 Not Found" className="w-[50%] object-cover"></img>
          <div>
            {pageData?.content ? (
              pageData?.content.map((item, index) => (
                <React.Fragment key={index}>
                  {item.type === 'paragraph' && (
                    <p
                      className="text-center"
                      dangerouslySetInnerHTML={{ __html: (item.data as ParagraphContent).text }}
                    />
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <p className="text-center">お探しのページは見つかりませんでした。</p>
                <p className="text-center">お探しのページは削除されたか、URLが変更された可能性がございます。</p>
              </>
            )}
          </div>
          <StyledPrimaryBtn className="--red w-[100%] sm:w-[300px]" to="/" onClick={() => setHeaderIsOpen(false)}>
            トップページへ戻る
          </StyledPrimaryBtn>
        </div>
      </Box>
    </React.Fragment>
  );
}
