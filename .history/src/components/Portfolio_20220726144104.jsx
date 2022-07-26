import React from 'react';
import styled from "styled-components";
import loadmore from "../assets/loadmore.png";
import portfolio3 from "../assets/portfolio3.jpg";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio5 from "../assets/portfolio5.jpg";
import portfolio6 from "../assets/portfolio6.jpg";
import portfolio7 from "../assets/portfolio7.jpg";
import portfolio8 from "../assets/portfolio8.jpg";
import portfolio9 from "../assets/portfolio9.jpg";
import portfolio10 from "../assets/portfolio10.jpg";
import { motion } from "framer-motion";
function Portfolio() {
  const [element, controls] = useScroll();
  return (
  <Section id="portfolio" ref={element}>
    <div className="grid">
        <motion.div  className="child-one grid-box"></motion.div>
        <motion.div  className="child-two grid-box"></motion.div>
        <motion.div  className="child-three grid-box"></motion.div>
        <motion.div  className="child-four grid-box"></motion.div>
        <motion.div  className="child-five grid-box"></motion.div>
        <motion.div  className="child-six grid-box"></motion.div>
        <motion.div  className="child-seven grid-box"></motion.div>
        <motion.div  className="child-eight grid-box"></motion.div>
    </div>
    <div className="portfolio-more">
        <span>Load More</span>
        <img src={loadmore} alt="Load More" />
    </div>
  </Section>
  );
}

const Section=styled.section `
min-height:100vh;

`;
export default Portfolio