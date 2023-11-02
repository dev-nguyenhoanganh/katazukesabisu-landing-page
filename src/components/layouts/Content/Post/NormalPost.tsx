import React from 'react';
import { Content, ImageContent } from '../../../../_mock/data';

type Props = {
  id: string;
  content: Content[];
};

export default function NormalPost({ content, id }: Props): JSX.Element {
  const item = content.filter((item) => item.type === 'image')[0].data;
  const imageURL = (item as ImageContent)?.file?.url;

  return (
    <div id={id} className="article">
      <div className="article_outer">
        <div className="article_body">
          <h3>その不用品の回収、お任せください！</h3>
          <div className="content">
            <div className="description">
              <p className="text-justify">
                おたすけクリーンは<strong>不用品回収・買取・粗大ゴミ・遺品整理・ゴミ屋敷・お引越しでのゴミ回収</strong>
                など、お客様のお困りごとに全力で対応させていただいております。
                <br />
                <strong>お見積りは無料</strong>ですので安心してご連絡ください！
              </p>
            </div>
            {imageURL && (
              <div className="image flex justify-center">
                <img alt="不用品・粗大ゴミの回収ならおたすけクリーン" src={imageURL} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
