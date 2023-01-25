import React, { useCallback, useEffect, useRef, useState } from 'react'
import './quotesautoslider.css'

const quotesDummyData = [
  {
    id: 1,
    quote: "사람들이 꿈을 이루지 못하는 한 가지 이유는 그들이 생각을 바꾸지 않고 결과를 바꾸고 싶어하기 때문이다",
    author: "John Maxwell"
  },
  {
    id: 2,
    quote: "자신은 \"할 수 없다\"고 생각하는 동안 사실은 그것을 \"하기 싫다\"고 다짐하고 있는 것이다. 그러므로 실행되지 않는 것이다.",
    author: "Baruch Spinoza"
  },
  {
    id: 3,
    quote: "지식은 보물이요. 실천은 보물상자를 여는 열쇠다. 보석이 아무리 가까이 있어도, 내가 팔을 뻗지 않으면 원하는 것을 얻을 수 없다.",
    author: "노자"
  },
  {
    id: 4,
    quote: "손으로 10초면 충분히 할 수 있는 일을 컴퓨터로 하루 종일 프로그래밍해서 자동으로 수행할 때, 나는 더할 나위 없이 큰 행복을 느낀다.",
    author: "Douglas Noel Adams"
  },
  {
    id: 5,
    quote: "손으로 10초면 충분히 할 수 있는 일을 컴퓨터로 하루 종일 프로그래밍해서 자동으로 수행할 때, 나는 더할 나위 없이 큰 행복을 느낀다.",
    author: "Douglas Noel Adams"
  },
]

const QuotesAutoSlider = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [qutosList, setQutosList] = useState(quotesDummyData)
  const slideRef = useRef();

  const tick = useCallback(() => {
    if (currentCount < qutosList.length - 1) {
      setCurrentCount(currentCount + 1)
    } else {
      setCurrentCount(1);
    }
  }, [currentCount, qutosList]);

  useEffect(() => {
    let ticker = setInterval(() => {
      // 2초에 한번씩 tick을 반복 실행
      tick();
    }, 2000)

    return () => { clearInterval(ticker) };
  }, [currentCount, qutosList, tick])

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateY(-${currentCount * 80}px)`;
  }, [currentCount]);

  return (
    <div className="quotes__container">
      <ul ref={slideRef}>
        {
          qutosList.map(qutos => (
            <li key={qutos.id}>{qutos.quote}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default QuotesAutoSlider