import React, { Suspense } from 'react'
import Loading from '../component/Loading';
import About from "../section/about/About";
import Banner from "../section/banner/Banner";
import Comments from '../section/comments/Comments';
import Portfolio from "../section/portfolio/Portfolio";
import Skills from "../section/skills/Skills";
import Theme from '../theme/Theme';


const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Suspense fallback={<Loading />}>
        <Comments />
      </Suspense>
      <Theme />
    </>
  )
}

export default Home