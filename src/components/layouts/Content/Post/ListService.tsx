import React from 'react';
import { ButtonContent, Content, ListContent } from '../../../../_mock/data';
import { useNavigate } from 'react-router-dom';
import { URL_MAPPING } from '../../../../routes/urlMapping';

type Props = {
  id: string;
  style?: string;
  title?: string;
  content: Content[];
};

export default function ListService({ content, style, title, id }: Props): JSX.Element {
  const navigate = useNavigate();
  let cols = '';
  if (content.length === 1) {
    cols = 'grid-cols-1';
  } else if (content.length === 2) {
    cols = 'grid-cols-2';
  } else {
    cols = 'grid-cols-3';
  }

  let css = '';
  switch (style) {
    case 'image-gallery-caption':
      css = `grid ${cols} gap-4 gallery max-[1024px]:grid-cols-2 max-[512px]:grid-cols-1 max-[512px]:px-5 px-[30px]`;
      break;
    case 'image-gallery':
      css = `grid ${cols} gap-4 px-[30px] ${
        content.length > 1 ? 'max-[1024px]:grid-cols-2' : ''
      } max-[512px]:grid-cols-1`;
      break;
    case 'list-service-special':
      css = 'grid grid-cols-2 gap-5 p-[30px] max-[512px]:grid-cols-1 max-[512px]:px-[20px]';
      break;
    default:
      css = 'px-[30px] mx-auto max-[512px]:px-[20px]';
  }

  return (
    <div id={id}>
      <div className="article p-0 margin-b0">
        <div className="article_outer">
          <div className="article_body">
            {title && <h3>{title}</h3>}
            <div className={css}>
              {content.map((item, index) => {
                const data = item.data as ListContent;
                const dataTypeButton = item.data as ButtonContent;
                const typeList = item.type === 'list';
                const typeButton = item.type === 'button';

                switch (style) {
                  case 'list-service':
                    return (
                      typeList && (
                        <div key={index} className="content-list flex gap-[40px] mb-3 justify-around">
                          <div className="image">
                            <img className="max-[512px]:inline" alt="最短30分以内に到着" src={data.imageURL} />
                          </div>
                          <div className="flex flex-col w-[70%] max-[512px]:w-full">
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                          </div>
                        </div>
                      )
                    );
                  case 'list-service-special':
                    return (
                      <React.Fragment key={index}>
                        {typeList && (
                          <div className="item-service">
                            <h3 className="text-center">{data.title}</h3>
                            <div className="content h-auto">
                              <div className="image">
                                <img src={data.imageURL}></img>
                              </div>
                              <div className="fee flex flex-row">
                                <p className="title w-[40%] text-center border-b-2 block border-[#55a7d9] font-bold">
                                  料金
                                </p>
                                <p className="value w-[60%] text-left">{data.fee}円～</p>
                              </div>
                              <div className="size flex flex-row">
                                <p className="title w-[40%] text-center border-b-2 block border-[#55a7d9] font-bold">
                                  お部屋の目安
                                </p>
                                <p className="value w-[60%] text-left">{data.fee}円～</p>
                              </div>
                              <p className="description p-3">{data.description}</p>
                            </div>
                          </div>
                        )}
                        {typeButton && (
                          <div className="article_outer col-span-2 max-[512px]:col-span-1">
                            <div className="article_body article_left">
                              <p className="align-c">
                                <button onClick={() => navigate(URL_MAPPING.HOME_PAGE_URL)}>
                                  <a className="text-link">{dataTypeButton.name}</a>
                                </button>
                              </p>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  case 'image-gallery-caption':
                    return (
                      <React.Fragment key={index}>
                        {typeList && (
                          <div className="flex flex-col item">
                            <div className="image">
                              <img alt="最短30分以内に到着" src={data.imageURL} />
                            </div>
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                          </div>
                        )}
                        {typeButton && (
                          <div className="article_outer col-span-3 max-[1024px]:col-span-2 max-[512px]:col-span-1">
                            <div className="article_body article_left">
                              <p className="align-c">
                                <a className="text-link" href="https://otasukeclean.com/service.html">
                                  {dataTypeButton.name}
                                </a>
                              </p>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  case 'image-gallery':
                    return (
                      <div key={index} className="image flex flex-col justify-around">
                        <img title="image gallery" alt="image" src={data.imageURL}></img>
                        {data.description && <p>{data.description}</p>}
                      </div>
                    );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
