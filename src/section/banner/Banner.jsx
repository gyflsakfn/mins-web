import { useCallback, useEffect, useState } from 'react';
import bannerAvatar from '../../assets/images/banner_img.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import Snowflake, { findId, makeSnowflake } from '../../component/snow';
import './banner.css'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  // 삭제의 상태를 가지며, 처음에는 우리가 단어를 입력하는 것으로 시작하기 때문에 false로 설정
  const [isDeleting, setIsDeleting] = useState(false);
  // 애니메이션을 수행할 목록
  const toRotate = ['Web Developer', 'FrontEnd Developer', 'Student'];
  const [text, setText] = useState('');
  // 하나의 문자가 입력 혹은 삭제 되는 데 걸리는 시간
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // delta의 값을 초기화
  const period = 3000;

  // TODO: 테마에 따른 배너 이미지 변경

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;  // list의 길이가 3이면, loopNum이 1씩 증가할 때마다 i는 0,1,2 반복
    let fullText = toRotate[i]; // 출력할 Text를 받아옴.
    // iseDeleting true인 경우, text에서 한자씩 줄임. false인 경우 한자씩 text의 길이에 +1 시킴.
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // 삭제 상태일 때 지우는 속도를 점점 빨라지게 함
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    // 모든 입력이 완료되었을 때
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // 기존 속도로 되돌아감
    } else if (isDeleting && updatedText === '') {  // 삭제가 완료되었을 때
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, toRotate, text.length]);

  useEffect(() => {
    let ticker = setInterval(() => {
      // delta 시간에 한번씩 tick을 반복 실행
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text, tick, delta])


  return (
    <section id='banner'>
      <div className="container banner__container">
        <div className="banner__info">
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>{`Hi! I'm JeongMin`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button onClick={() => console.log('connect')}>Let’s Connect <BsFillArrowRightCircleFill size={25} /></button>
        </div>
        <div className="banner__img">
          <img src={bannerAvatar} alt="" />
        </div>
      </div>
    </section >

  )
}

export default Banner