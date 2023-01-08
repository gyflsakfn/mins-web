import React from 'react'
import Modal from '../component/Modal';
import About from "../section/about/About";
import Banner from "../section/banner/Banner";
import Comments from '../section/comments/Comments';
import Portfolio from "../section/portfolio/Portfolio";
import Skills from "../section/skills/Skills";


const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Comments />
      <Modal />
    </>
  )
}

export default Home