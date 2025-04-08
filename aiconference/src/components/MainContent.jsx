import React from 'react';
import ImageSlider from './ImageSlider.jsx';
import {
  AppContainer,
  InfoSection,
  InfoContent,
  CollegeTitle,
  Address,
  ConsortiumTitle,
  SliderContainer,
  Title,
  Line
} from './App.styles';

const MainContent = () => {
  return (
    <AppContainer>
      <InfoSection>
        <InfoContent>
          <CollegeTitle>PSG COLLEGE OF TECHNOLOGY</CollegeTitle>
          <Address>Coimbatore, Tamil Nadu , India - 641004</Address>
          <ConsortiumTitle>PSG - AI CONSORTIUM</ConsortiumTitle>
        </InfoContent>
      </InfoSection>
      <SliderContainer>
        <Title style={{ width: '100%', whiteSpace: 'nowrap', textAlign: 'center' }}>
          INTERNATIONAL CONFERENCE
          <Line />
          on
          <Line />
          THE AI SPECTRUM: BRIDGING RESEARCH, INDUSTRY & INNOVATION
          <Line />
          Date : 24 - 26 December 2025
        </Title>
        <ImageSlider  style={{width:'200%',height:'100%'}}/>
      </SliderContainer>
    </AppContainer>
  );
};

export default MainContent;