import React, { useCallback, useEffect, useRef, useState } from 'react'
import './quotesautoslider.css'
import quotesList from './data';


const QuotesAutoSlider = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const slideUlRef = useRef();
  const slideLiRef = useRef();

  const countUpAndDown = useCallback(() => {
    if (currentCount < quotesList.length - 1) {
      setCurrentCount(currentCount + 1)
    } else {
      setCurrentCount(0);
    }
  }, [currentCount]);


  useEffect(() => {
    let interval = setInterval(() => {
      countUpAndDown();
    }, 8000)

    return () => { clearInterval(interval) };
  }, [currentCount, countUpAndDown])

  useEffect(() => {
    slideUlRef.current.style.transform = `translateY(-${slideLiRef.current.offsetHeight * currentCount}px)`;
  }, [currentCount]);

  return (
    <div className="quotes__container">
      <ul ref={slideUlRef}>
        {
          quotesList.map(qutes => (
            <li className="quotes__item-wrapper" ref={slideLiRef} key={qutes.id}>
              <p>{`" ${qutes.quote} "`}</p>
              <span>{`- ${qutes.author} `}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default QuotesAutoSlider