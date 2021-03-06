import React from 'react';

import { MyVideoCardGroupContainer, MyTitle, MyExtraLink } from './styles';
import MyVideoCard from './components/MyVideoCard';
import { Slider, SliderItem } from './components/MySlider';

function MyCarousel({ ignoreFirstVideo, category }) {
  
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  
  return (
    <MyVideoCardGroupContainer>
      {categoryTitle && (
        <>
          <MyTitle style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </MyTitle>
          {categoryExtraLink && 
            <MyExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </MyExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <MyVideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </MyVideoCardGroupContainer>
  );
}

export default MyCarousel;
