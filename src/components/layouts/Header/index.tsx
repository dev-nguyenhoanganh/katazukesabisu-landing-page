import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

import { ApplicationContext } from '../../../ApplicationContext';

import logo from '../../../images/header5.png';
import './style.scss';

type Location = {
  location: string;
  innerText: string;
};

const navbar: Location[] = [
  { location: '/', innerText: 'ホーム' },
  { location: '/service', innerText: 'サービス・料金案内' },
  { location: '/flow', innerText: 'ご利用の流れ' },
  { location: '/about', innerText: '事業所情報' },
  { location: '/contact', innerText: 'お問い合わせ' },
  { location: '/blog', innerText: '記事' },
];

export default function Header() {
  const { headerIsOpen, setHeaderIsOpen } = useContext(ApplicationContext);
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <div className="flex items-center p-[16px] gap-[16px]">
          <div
            className="web-logo"
            onClick={() => {
              navigate('/');
              setHeaderIsOpen(false);
            }}
          ></div>
          <div className="title-image-phone hidden"></div>
          <div className="collapse-title" onClick={() => setHeaderIsOpen(!headerIsOpen)}>
            {headerIsOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <p className="px-[16px] text-[12px] pb-[8px] sm:hidden">
          愛知・岐阜・三重の不用品回収・粗大ゴミの回収、遺品整理などでお困りの方はご相談ください。
        </p>
        <Collapse in={headerIsOpen} className={`collapse-content`}>
          <ul className="navbar --primary \">
            {navbar.map(({ location, innerText }, index) => (
              <li key={index}>
                <Link to={location} rel="noreferrer" onClick={() => setHeaderIsOpen(false, false)}>
                  {innerText}
                </Link>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
      <div id="mainImage">
        <img
          alt="おたすけクリーンは不用品・粗大ゴミ回収が即日対応！"
          src={logo}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="narbar-box">
        <ul className="navbar --secondary max-w-5xl my-0 mx-auto">
          {navbar.map(({ location, innerText }, index) => (
            <li key={index}>
              <Link to={location} rel="noreferrer" onClick={() => setHeaderIsOpen(false, false)}>
                {innerText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
