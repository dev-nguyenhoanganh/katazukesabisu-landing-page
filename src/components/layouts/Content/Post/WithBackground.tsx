import React from 'react';
import { Content, ImageContent } from '../../../../_mock/data';

type Props = {
  id: string;
  content: Content[];
  display?: string;
};

export default function WithBackground({ content, id, display }: Props): JSX.Element {
  const item = content.filter((item) => item.type === 'image')[0].data;
  const imageURL = (item as ImageContent)?.file?.url;
  const displayReserve = display === 'reverse' ? '!flex flex-row-reverse' : '';

  return (
    <div id={id} className="article bg-[#FFF7DA]">
      <div className="article_outer">
        <div className="article_body">
          {!displayReserve && <h3>追加料金一切なし！</h3>}
          <div className="content">
            <div className="description">
              <h4>
                出張費・お見積り・基本料金
                <span className="bgc-red">無料！</span>
              </h4>

              <p className="text-justify">
                お客様は立ち合いのみ、事前の分別も不要です！全てお任せください！
                <br />
                他社では別途請求となる
                <strong>
                  搬出作業費（大型家電含む）・お掃除作業費・車両費・出張費・梱包作業費などが全て込みの料金
                </strong>
                です。
              </p>

              {!displayReserve && (
                <p>
                  <a className="text-link" href="https://otasukeclean.com/service.html#price">
                    料金プランはこちら
                  </a>
                </p>
              )}
            </div>
            {imageURL && (
              <div className="image flex justify-center">
                {/* <img alt="追加料金なし" src="./images/161037164366101.jpg" /> */}
                <img alt="追加料金なし" src={imageURL} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
