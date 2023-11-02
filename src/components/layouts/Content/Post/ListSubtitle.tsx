import React, { Fragment } from 'react';
import { Content, ListContent, SubContent } from '../../../../_mock/data';

type Props = {
  id: string;
  style?: string;
  title?: string;
  content: Content;
};

export default function ListSubtitle({ content, id }: Props): JSX.Element {
  const data = content.data as ListContent;

  return (
    <div id={id} className="article campaign">
      <div className="article_outer">
        <div className="article_body pb-10">
          <h3>{data.title}</h3>
          <div className="sub-title flex justify-center">
            <p className="sub-title">{data.subTitle}</p>
          </div>
          <div className="campaign_tbl px-[30px] grid grid-cols-2 gap-5 mt-5 max-[817px]:grid-cols-1">
            {data.listContent?.map((item: SubContent, index) => {
              return (
                <Fragment key={index}>
                  <div className="flex flex-col justify-between">
                    {item.title}
                    <br />
                    {item.description1}
                    <br />
                    <h4>{item.description2}</h4>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
