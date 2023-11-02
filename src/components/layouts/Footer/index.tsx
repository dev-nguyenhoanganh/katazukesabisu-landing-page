import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ApplicationContext } from '../../../ApplicationContext';
import { ContactListType, PostCommonProps } from '../../blog-post/type';

import './style.css';
import message from '../../../lang/en.json';
import { GetFooterContactResponse, getFooterContact } from '../../../api/footer/getFooterContact';
import { useAppDispatch } from '../../../store/hooks';
import { openSnackbar } from '../../../store/ui';
import { footerContact } from '../../../_mock/ContactList';

export default function Footer() {
  const { setHeaderIsOpen } = useContext(ApplicationContext);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<PostCommonProps>(footerContact);

  const getFooterContactInfor = async () => {
    try {
      const response = await getFooterContact();
      const { data } = response as GetFooterContactResponse;
      if (data === undefined) {
        return;
      }
      setData(data);
    } catch (error) {
      dispatch(openSnackbar({ message: message['error.reloadPage'], severity: 'error' }));
    }
  };

  // useEffect(() => {
  //   getFooterContactInfor();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <footer>
      <div className="contact-list">
        <div className="img"></div>
        <div className="table">
          {data?.content?.map(
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

      <ul className="">
        <li>
          <Link to="/" rel="noreferrer" onClick={() => setHeaderIsOpen(false)}>
            ホーム
          </Link>
        </li>
        <li>
          <Link to="/service" rel="noreferrer" onClick={() => setHeaderIsOpen(false)}>
            サービス・料金案内
          </Link>
        </li>
        <li>
          <Link to="/flow" rel="noreferrer" onClick={() => setHeaderIsOpen(false)}>
            ご利用の流れ
          </Link>
        </li>
        <li>
          <Link to="/about" rel="noreferrer" onClick={() => setHeaderIsOpen(false)}>
            事業所情報
          </Link>
        </li>
        <li>
          <Link to="/contact" rel="noreferrer" onClick={() => setHeaderIsOpen(false)}>
            お問い合わせ
          </Link>
        </li>
        <li>
          <Link to="/blog" rel="noreferrer" onClick={() => setHeaderIsOpen(false)}>
            記事
          </Link>
        </li>
      </ul>
      <div className="p-[16px]">
        <div className="block w-fit mx-auto">
          Copyright ©&nbsp;
          <Link to="/" onClick={() => setHeaderIsOpen(false)}>
            かたづけサービス
          </Link>
          &nbsp;All rights reserved.
        </div>
      </div>
    </footer>
  );
}
