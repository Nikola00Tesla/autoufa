import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  with: '100%',
};
let PhotoForCarousel = [
"https://wallscloud.net/img/resize/1920/1080/MM/2016-09-23-jaguar-f-pace-first-edition-vYL.jpg",
"https://img.wallscloud.net/uploads/thumb/1229675775/bentley-bentayga-by-startech-Zw2-1024x576-MM-80.webp",
"https://img.wallscloud.net/uploads/thumb/1229675775/aston-martin-v8-vantage-n430-XY8-1024x576-MM-80.webp",
"https://img.wallscloud.net/uploads/thumb/1229675775/mitsubishi-ex-concept-rMB-1024x576-MM-80.webp"
]
const SliderMain = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src={PhotoForCarousel[0]} style={contentStyle}/>
      </div>
      <div>
        <img src={PhotoForCarousel[1]} style={contentStyle}/>
      </div>
      <div>
        <img src={PhotoForCarousel[2]} style={contentStyle}/>
      </div>
      <div>
        <img src={PhotoForCarousel[3]} style={contentStyle}/>
      </div>
    </Carousel>
  );
};
export default SliderMain;