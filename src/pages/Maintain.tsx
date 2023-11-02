import React, { useContext } from 'react';

import ImgMaintenance from '../images/maintenance.svg';
import { ApplicationContext } from '../ApplicationContext';

import { Box } from '@mui/material';
import { StyledPrimaryBtn } from '../styles/Common';

export default function MaintainPage() {
  const { setHeaderIsOpen } = useContext(ApplicationContext);
  return (
    <React.Fragment>
      <Box className="p-[16px] lg:px-[60px] lg:w-[1024px] lg:py-[20px] w-[100%] bg-white mx-auto transition-[width] duration-500">
        <div className="mt-[16px] lg:mt-[20px] flex flex-col gap-[16px] items-center content-center">
          <img src={ImgMaintenance} title="Maintenance" className="w-[70%]"></img>
          <div>
            <p className="text-center">メンテナンスの進行中</p>
            <p className="text-center">
              ご不便をおかけして申し訳ございません。 現在ウェブサイトはメンテナンス中です。
              後でもう一度確認してください。
            </p>
          </div>
          <StyledPrimaryBtn className="--red w-[100%] sm:w-[300px]" to="/" onClick={() => setHeaderIsOpen(false)}>
            トップページへ戻る
          </StyledPrimaryBtn>
        </div>
      </Box>
    </React.Fragment>
  );
}
