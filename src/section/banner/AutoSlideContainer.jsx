import React, { useEffect, useRef, useState } from 'react'

const slideDummyData = [
  {
    id: 1,
    text: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.",
    isActive: false,
  },
  {
    id: 2,
    text: "남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.",
    isActive: false,
  },
  {
    id: 3,
    text: "가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세.",
    isActive: true,
  },
]

const delay = 2500;

// TODO: Text 자동 슬라이드 컴포넌트 구현!!! 명언 등 출력 예정
const AutoSlideContainer = () => {
  const [visualText, setVisualText] = useState();

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideDummyData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(0, ${-index * 100}%, 0)` }}
      >
        {slideDummyData.map((item, index) => (
          <div
            className="slide"
            key={index}
          >{item.text}</div>
        ))}
      </div>
    </div>
  )
}

export default AutoSlideContainer