import React from 'react';
import { Content } from '../../../_mock/data';
import NormalPost from './Post/NormalPost';
import WithBackground from './Post/WithBackground';
import ListService from './Post/ListService';
import ListSubtitle from './Post/ListSubtitle';

type Props = {
  id: string;
  title?: string;
  style?: string;
  displayStatus?: string;
  content: Content[];
};

export default function PostContent({ content, id, title, displayStatus }: Props): JSX.Element {
  let html: JSX.Element = <></>;

  switch (id) {
    case 'normal':
      html = <NormalPost id={id} content={content} />;
      break;
    case 'with-background':
      html = <WithBackground id={id} content={content} display={displayStatus} />;
      break;
    case 'list-service':
      html = <ListService id={id} content={content} style={id} title={title} />;
      break;
    case 'image-gallery-caption':
      html = <ListService id={id} content={content} style={id} title={title} />;
      break;
    case 'image-gallery':
      html = <ListService id={id} content={content} style={id} title={title} />;
      break;
    case 'list-service-special':
      html = <ListService id={id} content={content} style={id} title={title} />;
      break;
    case 'list-sub':
      html = <ListSubtitle id={id} content={content[0]} style={id} title={title} />;
      break;
    default:
      <></>;
  }

  return html;
}
