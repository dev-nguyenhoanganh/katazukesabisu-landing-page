import React, { useCallback, useRef } from 'react';

import { Location } from '../../../interface/FlowType';

import './style.css';

interface Props {
  tocs?: Location[];
  activeId?: string;
}

function TableOfContent({ tocs = [], activeId = '' }: Props) {
  const activeItem = useRef<HTMLAnchorElement>(null);

  const getClassName = useCallback(
    (item: Location) => {
      let className = 'level' + item.level;

      if (activeId === item.location) {
        className += ' active';
      }

      return className;
    },
    [activeId]
  );

  if (tocs.length === 0) {
    return <div className="toc-container"></div>;
  }

  return (
    <div className="toc-container">
      <p>Table of contents</p>
      <nav>
        <ul>
          {tocs.map((item, key) => (
            <React.Fragment key={key}>
              <li>
                <a
                  ref={item.location === activeId ? activeItem : undefined}
                  className={getClassName(item)}
                  href={'#' + item.location}
                >
                  {item.innerText}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default TableOfContent;
