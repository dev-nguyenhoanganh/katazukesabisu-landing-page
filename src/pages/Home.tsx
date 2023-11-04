import React, { useState } from 'react';

// Component
import PostCommon from '../components/blog-post/PostCommon';
import ImageGallery from '../components/blog-post/ImageGallery';
import Coupons from '../components/coupons';
import ServicePrice from '../components/service-prices';
import { FlowCollection } from '../components/flow-section';

// Resource
import { StyledHeading, StyledRoot, StyledPostCommonContainer } from '../styles/Common';
import { introduction, serviceIntro, availableArea, serviceGuide, coupons } from '../_mock/HomePage';
import { contactUs as MOCK_CONTACT } from '../_mock/common-block';
import { ratePlan } from '../_mock/servicePage';
import { contactInfo, form } from '../_mock/contactPage';
import MOCK_DATA from '../_mock/AboutPage';
import { collection, guide } from '../_mock/FlowPage';
import { Content } from '../components/blog-post/type';

// Img
import ImgContactUs from '../images/banner3.png';
import ContactInfo from '../components/contact-section/ContactInfo';
import FormControl from '../components/contact-section/FormControl';
import ContactList from '../components/contact-section/ContactList';
import svg from '../images/line-svg-icon.svg';

const buttonContent: Content[] = [
  {
    type: 'button',
    data: (
      <a className="line-btn !pl-[10px]" href="https://line.me/ti/p/AQDDUa5nTq" target="_blank" rel="noreferrer">
        <img className="!h-[32px] !w-[32px]" src={svg} alt="友だち追加" /> 友だち追加
      </a>
    ),
  },
];

export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <StyledRoot>
        <StyledHeading className="lg:!text-[230%]">不用品・粗大ゴミの回収なら片付けサービス</StyledHeading>
        <PostCommon {...introduction} />
        <PostCommon {...serviceIntro} />
        <ImageGallery {...serviceGuide} />

        {/* Service */}
        <ServicePrice {...ratePlan} style={{ marginTop: '16px' }} />

        <ContactInfo {...contactInfo} id="contactInfo" />

        <ContactList {...MOCK_DATA.about} id="office-information" />

        <StyledPostCommonContainer>
          <StyledHeading className="heading --with-background" id="contact">
            <span>{MOCK_CONTACT.title}</span>
          </StyledHeading>
          <a href="tel:07022134567" className="hover:opacity-80">
            <img className="cover-image" src={ImgContactUs} alt="お問い合わせはこちら" />
          </a>
        </StyledPostCommonContainer>

        <ImageGallery {...availableArea} />

        <FlowCollection content={collection} />

        {guide && (
          <PostCommon
            {...guide}
            content={[...guide.content, ...buttonContent]}
            imgClassName="[&>img]:!w-[300px] [&>img]:!object-contain"
          />
        )}

        {coupons.isDisplay && <Coupons {...coupons} />}
        {/* id="contactForm" */}
        <FormControl {...form} />
      </StyledRoot>
    </React.Fragment>
  );
}
