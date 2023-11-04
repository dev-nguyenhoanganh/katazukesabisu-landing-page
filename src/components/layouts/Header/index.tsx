import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Typography, Slide, useScrollTrigger, Drawer, Box, ListItemIcon, AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

import logo from '../../../images/header5.png';
import lineBtn from '../../../images/line-svg-icon.svg';
import phoneIcon from '../../../images/phoneIcon.svg';
import ic_service from '../../../images/icon/ic_service.svg';
import ic_flow from '../../../images/icon/ic_flow.svg';
import ic_about from '../../../images/icon/ic_about.svg';
import ic_contact from '../../../images/icon/ic_contact.svg';

import './style.scss';
import SvgColor from '../../utils/svg-icon/SvgColor';

type Location = {
  location: string;
  innerText: string;
  icon: JSX.Element;
};

// prettier-ignore
const navbar: Location[] = [
  { location: '#service', innerText: 'サービス・料金案内', icon: <SvgColor src={ic_service} sx={{ width: 1, height: 1 }} /> },
  { location: '#office-information', innerText: '事業所情報', icon: <SvgColor src={ic_about} sx={{ width: 1, height: 1 }} /> },
  { location: '#flow', innerText: 'ご利用の流れ', icon:  <SvgColor src={ic_flow} sx={{ width: 1, height: 1 }} /> },
  { location: '#contactForm', innerText: 'お問い合わせ', icon: <SvgColor src={ic_contact} sx={{ width: 1, height: 1 }} /> },
];

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#18a4ea',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '24px',
  zIndex: '1300',
  overflow: 'hidden',

  '.menu-icon': {
    padding: '8px 24px',
    display: 'flex',
    alignItems: 'center',

    svg: {
      width: '40px',
      height: '40px',
    },
  },

  a: {
    textDecoration: 'none',
  },

  '.MuiTypography-root': {
    fontWeight: 'bold',
  },

  '.header_btns': {
    display: 'flex',
    justifyContent: 'end',
  },

  '.btn_tel': {
    backgroundColor: '#fff',
    color: '#18a4ea',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 16px 8px 22px',

    '&:hover': {
      opacity: '0.8',
    },

    '.btn_tel__num': {
      fontSize: '36px',
      lineHeight: '1.37273',
      letterSpacing: '.04em',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',

      img: {
        marginRight: '4px',
        transform: 'rotate(10deg)',
      },
    },
  },

  '.btn_line__ico': {
    maxWidth: '50px',
    marginBottom: '1px',
    display: 'inline-block',

    img: {
      maxWidth: '100%',
      margin: 0,
      padding: 0,
      verticalAlign: 'middle',
      border: 0,
      height: 'auto',
    },
  },

  '.btn_line': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#06c755',
    padding: '0 11px',
    transition: 'all 0.3s',
    color: '#fff',
    fontWeight: 'bold',

    img: {
      height: '40px',
    },

    '&:hover': {
      opacity: '0.8',
    },
  },

  '.btn_contact': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F58D00',
    backgroundImage: 'linear-gradient(135deg, #FFD800 -5%, #F58D00 45%)',
    padding: '0 33px 5px 25px',
    maxWidth: '280px',
    position: 'relative',
    boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
    transition: 'all 0.3s',
    color: '#fff',
    gap: '8px',

    '&:hover': {
      opacity: '0.8',
    },
  },

  '.logo': {
    color: '#FFF',
  },

  [theme.breakpoints.down('lg')]: {
    '.btn_tel': {
      display: 'none',
    },

    '.menu-icon': {
      padding: '8px 16px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    paddingLeft: '8px',

    '.logo': {
      fontSize: '16px',
    },

    '.btn_contact': {
      padding: '0 8px',
    },

    '.menu-icon': {
      padding: '8px 8px',

      svg: {
        width: '26px',
        height: '26px',
      },
    },
  },
}));

const StyledDrawer = styled(Drawer)(() => ({
  li: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: '1px solid #06c',

    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
    },
  },

  a: {
    background: 'none',
    boxSizing: 'border-box',
    padding: '4px 0',
    width: '100%',
    height: '100%',
    lineHeight: '40px',
    fontWeight: 'bold',
    overflow: 'hidden',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#06c',
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 64,
  });

  return (
    <React.Fragment>
      <Slide in={trigger} direction="left">
        <StyledAppbar position={trigger ? 'sticky' : undefined}>
          <Typography component="a" variant="h5" className="logo" href="#">
            かたづけサービス
          </Typography>
          <div className="header_btns">
            <a href="tel:07022134567" className="btn_tel pc">
              <span className="btn_tel__num">
                <img src={phoneIcon} alt="phone icon" />
                070-2213-4567
              </span>
              <span className="btn_tel__time">24時間365日対応</span>
            </a>
            <a href="https://line.me/ti/p/AQDDUa5nTq" className="btn_line" rel="noreferrer" target="_blank">
              <span className="btn_line__ico">
                <img src={lineBtn} alt="LINE" />
              </span>
              <span className="btn_line__txt">LINEで相談</span>
            </a>
            <a href="#contactForm" className="btn_contact">
              <span className="btn_contact__ico">
                <img src="https://otasukecleanpro.com/assets/img/common/icon/ico_email.svg" alt="メール" />
              </span>
              <span className="btn_contact__txt">
                無料相談
                <br />
                フォーム
              </span>
            </a>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </StyledAppbar>
      </Slide>

      <header>
        <div>
          <div className="flex items-center p-[16px] gap-[16px]">
            <div className="web-logo"></div>
            <div className="title-image-phone hidden"></div>
          </div>
          <p className="px-[16px] text-[12px] pb-[8px] sm:hidden">
            愛知・岐阜・三重の不用品回収・粗大ゴミの回収、遺品整理などでお困りの方はご相談ください。
          </p>
        </div>
        <div id="mainImage">
          <img
            alt="愛知・岐阜・三重の不用品回収・粗大ゴミの回収、遺品整理などでお困りの方はご相談ください。"
            src={logo}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </header>
      <StyledDrawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 350 }} role="presentation">
          <ul>
            {navbar.map(({ location, innerText, icon }, index) => (
              <li key={index}>
                <StyledNavItemIcon>{icon}</StyledNavItemIcon>
                <a href={location} rel="noreferrer" onClick={() => setIsOpen(false)}>
                  {innerText}
                </a>
              </li>
            ))}
          </ul>
        </Box>
      </StyledDrawer>
    </React.Fragment>
  );
}
