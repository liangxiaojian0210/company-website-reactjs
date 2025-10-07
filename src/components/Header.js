// function Header() {
//   return (
//     <header>
//       <video src="./video.mp4" loop autoPlay muted></video>
//       <h1>Open Source Website</h1>
//       <div className="row">
//         <button className="btn" style={{ cursor: "pointer" }}>
//           Sign Up
//         </button>

//         <button className="btn" style={{ cursor: "pointer" }}>
//           Log in
//         </button>
//       </div>

//       <div className="headerbg"></div>
//     </header>
//   );
// }
// export default Header;

import { useState, useEffect } from 'react';
import './Carousel.css'; // 引入样式文件

function Carousel() {
  // 轮播图数据
  const [slides] = useState([
    {
      id: 1,
      type: 'image',
      src: `${process.env.PUBLIC_URL}/img/index.png`,
      // title: "Open Source Website"
    },
    {
      id: 2,
      type: 'image',
      src: `${process.env.PUBLIC_URL}/img/nongfuchanping.png`,
      // title: "Slide 2 Title"
    },
    {
      id: 3,
      type: 'image',
      src: `${process.env.PUBLIC_URL}/img/boliping.png`,
      // title: "Slide 3 Title"
    }
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动轮播效果
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 每5秒切换一次

    return () => clearInterval(timer);
  }, [slides.length]);

  // 切换到下一张
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // 切换到上一张
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 跳转到指定幻灯片
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentItem = slides[currentSlide];

  return (
    <header className="carousel-container">
      {/* 视频或图片内容 */}
      <div className="carousel-slide">
        {currentItem.type === 'video' ? (
          <video 
            key={currentItem.id}
            src={currentItem.src} 
            loop 
            autoPlay 
            muted
            className="carousel-media"
          ></video>
        ) : (
          <img 
            key={currentItem.id}
            src={currentItem.src} 
            alt={currentItem.title}
            className="carousel-media"
          />
        )}
        
        <div className="slide-content">
          <h1>{currentItem.title}</h1>
          
          {/* <div className="row">
            <button className="btn" style={{ cursor: "pointer" }}>
              Sign Up
            </button>
            <button className="btn" style={{ cursor: "pointer" }}>
              Log in
            </button>
          </div> */}
        </div>
      </div>

      {/* 导航箭头 */}
      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
        ›
      </button>

      {/* 指示器 */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="headerbg"></div>
    </header>
  );
}

export default Carousel;
