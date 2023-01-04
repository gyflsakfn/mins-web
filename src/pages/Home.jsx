import React from 'react'
import About from "../section/about/About";
import Banner from "../section/banner/Banner";
import Comment from '../section/comment/Comment';
import Portfolio from "../section/portfolio/Portfolio";
import Skills from "../section/skills/Skills";


const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Comment />
    </>
  )
}

export default Home