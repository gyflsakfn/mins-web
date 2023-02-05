import React, { useCallback, useEffect, useState } from 'react';

const ROTATE_TEXT_LIST = ['Web Developer', 'Front-End Developer'];
const PERIOD = 2000;

const BannerAniText = () => {
  const [loopCount, setLoopCount] = useState(0);
  // 삭제의 상태를 가지며, 처음에는 우리가 단어를 입력하는 것으로 시작하기 때문에 false로 설정
  const [isDeleting, setIsDeleting] = useState(false);
  // 애니메이션을 수행할 목록
  const [text, setText] = useState('');
  // 하나의 문자가 입력 혹은 삭제 되는 데 걸리는 시간
  const [delta, setDelta] = useState(500);
  // delta의 값을 초기화

  let textIndex = loopCount % ROTATE_TEXT_LIST.length;  // list의 길이가 3이면, loopNum이 1씩 증가할 때마다 i는 0,1,2 반복
  let fullText = ROTATE_TEXT_LIST[textIndex]; // 출력할 Text를 받아옴.
  // iseDeleting true인 경우, text에서 한자씩 줄임. false인 경우 한자씩 text의 길이에 +1 시킴.
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  const tick = useCallback(() => {
    setText(updatedText);

    // 삭제 상태일 때 지우는 속도를 점점 빨라지게 함
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    // 모든 입력이 완료되었을 때
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
    } else if (isDeleting && updatedText === '') {  // 삭제가 완료되었을 때
      setIsDeleting(false);
      setLoopCount(prev => prev + 1);
      setDelta(500);
    }
  }, [isDeleting, fullText, updatedText]);

  useEffect(() => {
    let ticker = setInterval(() => {
      // delta 시간에 한번씩 tick을 반복 실행
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text, tick, delta])

  return (
    <>
      <div className="txt-rotate">
        <span className="wrap">{text}</span>
      </div>
    </>
  )
}

export default BannerAniText