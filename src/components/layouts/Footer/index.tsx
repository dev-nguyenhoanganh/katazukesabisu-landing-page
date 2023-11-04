import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { styled, ListItemIcon, Button, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ApplicationContext } from '../../../ApplicationContext';
import { ContactListType } from '../../blog-post/type';

import './style.css';
import { footerContact } from '../../../_mock/ContactList';
import phoneIcon from '../../../images/phoneIcon.svg';
import SvgColor from '../../utils/svg-icon/SvgColor';

const StyledBottomBar = styled('div')(({ theme }) => ({
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: '#fff',
  alignItems: 'center',
  padding: '8px 0 8px',
  zIndex: '1000',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '24px',
  boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2),
              0px 4px 5px 0px rgba(0,0,0,0.14),
              0px 1px 10px 0px rgba(0,0,0,0.12)`,

  '.txt': {
    color: '#18a4ea',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',

    '.btn_tel': {
      display: 'flex',
      fontSize: '24px',
      lineHeight: '1.37273',
      letterSpacing: '.04em',
      fontWeight: 700,
      alignItems: 'center',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.txt': {
      gap: 0,
    },

    '.txt .btn_tel': {
      fontSize: '18px',
    },
  },

  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 28,
  height: 28,
  color: '#008fdd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default function Footer() {
  const { setHeaderIsOpen } = useContext(ApplicationContext);

  return (
    <footer>
      <div className="contact-list">
        <div className="img"></div>
        <div className="table">
          {footerContact.content.map(
            (item, index) =>
              item.type === 'contact-list' && (
                <React.Fragment key={index}>
                  <div className="flex">
                    <p className="label">{(item.data as ContactListType).label}</p>
                    <p className="value" dangerouslySetInnerHTML={{ __html: (item.data as ContactListType).value }} />
                  </div>
                </React.Fragment>
              )
          )}
        </div>
      </div>

      <Box
        sx={(theme) => ({
          padding: '16px',
          [theme.breakpoints.down('lg')]: {
            paddingBottom: '96px',
          },
          [theme.breakpoints.down('sm')]: {
            paddingBottom: '80px',
          },
        })}
      >
        <div className="block w-fit mx-auto">
          Copyright ©&nbsp;
          <Link to="/" onClick={() => setHeaderIsOpen(false)}>
            かたづけサービス
          </Link>
          &nbsp;All rights reserved.
        </div>
      </Box>

      <StyledBottomBar>
        <div className="txt">
          <div className="tel">
            <div className="btn_tel">
              <StyledNavItemIcon>
                <SvgColor src={phoneIcon} sx={{ width: 1, height: 1 }} />
              </StyledNavItemIcon>
              070-2213-4567
            </div>
          </div>
          <div className="time">24時間365日対応</div>
        </div>
        <Button
          component="a"
          href="tel:07022134567"
          variant="contained"
          color="info"
          endIcon={<ArrowForwardIosIcon />}
          sx={(theme) => ({
            height: 'fit-content',
            fontSize: '20px',
            fontFamily: 'inherit',
            // fontWeight: 'bold',

            [theme.breakpoints.down('sm')]: {
              fontSize: '14px',
            },
          })}
        >
          電話をかける
        </Button>
      </StyledBottomBar>
    </footer>
  );
}
