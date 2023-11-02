import { styled, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledRoot = styled(Box)(({ theme }) => ({
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

export const StyledHeading = styled('h2')(({ theme }) => ({
  fontSize: '150%',
  padding: '6px 0',
  lineHeight: '1.6em',
  color: '#222',
  marginBottom: '20px',
  fontWeight: 'bold',
  fontFeatureSettings: 'palt',
  letterSpacing: '0.1em',
  textAlign: 'center',

  '&.--with-background': {
    position: 'relative',
    fontSize: '180%',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginTop: '16px',

    '&::before': {
      content: '""',
      width: 'calc(100% + 32px)',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: '-16px',
      padding: '0 16px',
      backgroundColor: '#18a4ea',
      backgroundImage: 'repeating-linear-gradient(-45deg, #43b1e8, #43b1e8 7px, transparent 0, transparent 14px)',
      lineHeight: '60px',
    },

    '& span': {
      zIndex: 1,
      position: 'relative',
      display: 'block',
    },
  },

  [theme.breakpoints.up('lg')]: {
    '&.--with-background': {
      marginTop: '24px',

      '&::before': {
        width: 'calc(100% + 120px)',
        left: '-60px',
        padding: '0 60px',
      },
    },
  },

  [theme.breakpoints.down('lg')]: {
    '&.--with-background': {
      fontSize: '150%',
      lineHeight: '50px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '&.--with-background': {
      lineHeight: '40px',
      padding: 0,

      '& span': {
        fontSize: '1.2rem',
      },
    },
  },
}));

export const StyledPrimaryBtn = styled(Link)(() => ({
  scrollBehavior: 'smooth',
  position: 'relative',
  backgroundColor: '#06c755',
  borderRadius: '4px',
  padding: '10px 20px',
  color: '#fff',
  textDecoration: 'none',
  marginTop: '16px',
  display: 'block',
  fontSize: '120%',
  fontWeight: 700,
  textAlign: 'center',
  transition: `
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  boxShadow: `
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12)`,

  '&:hover': {
    textDecoration: 'none',
    backgroundColor: '#069e45',
    color: '#fff',
    boxShadow: `
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    right: '20px',
    top: '40%',
    width: '8px',
    height: '8px',
    borderTop: '1px solid #fff',
    borderRight: '1px solid #fff',
    transform: 'rotate(45deg)',
  },

  '&.--red': {
    backgroundColor: '#d32f2f',

    '&:hover': {
      backgroundColor: '#c62828',
    },
  },

  img: {
    width: '40px',
    height: '40px',
  },
}));

export const StyledPrimaryLink = styled('a')(() => ({
  scrollBehavior: 'smooth',
  position: 'relative',
  backgroundColor: '#06c755',
  borderRadius: '4px',
  padding: '10px 20px',
  color: '#fff',
  textDecoration: 'none',
  marginTop: '16px',
  display: 'block',
  fontSize: '120%',
  fontWeight: 700,
  textAlign: 'center',
  transition: `
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  boxShadow: `
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12)`,

  '&:hover': {
    textDecoration: 'none',
    backgroundColor: '#069e45',
    color: '#fff',
    boxShadow: `
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    right: '20px',
    top: '40%',
    width: '8px',
    height: '8px',
    borderTop: '1px solid #fff',
    borderRight: '1px solid #fff',
    transform: 'rotate(45deg)',
  },

  '&.--red': {
    backgroundColor: '#d32f2f',

    '&:hover': {
      backgroundColor: '#c62828',
    },
  },
}));
