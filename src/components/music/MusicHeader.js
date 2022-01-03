import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import MusicPhotos from "../../data/MusicPhotos";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { motion } from 'framer-motion'


function MusicHeader() {
  const [current, setCurrent] = useState(0);
  const length = MusicPhotos.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5500);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);

    // console.log(current);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);

    // console.log(current);
  };

  if (!Array.isArray(MusicPhotos) || MusicPhotos.length <= 0) {
    return null;
  }

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0 },
  };

  return (
    <MusicHeaderStyled>
      <div className="heroSection">
        <div className="heroWrapper">
          {/* <AnimatePresence> */}
          {MusicPhotos.map((MusicPhotos, index) => {
            return (
              <div className="slide" key={index}>
                  {
                      index === current && (

                      
                        
                <div className="slider">
                  <HeroImage
                    src={MusicPhotos.photo}
                    alt="Image of Musicans"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeAnimation}
                  />
                </div>
                )}
              </div>
            );
          })}
          {/* </AnimatePresence> */}
          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </div>
      </div>
    </MusicHeaderStyled>
  );
}

const MusicHeaderStyled = styled.div`
  .heroSection {
    height: 100vh;
    max-height: 800px;
    position: relative;
    overflow: hidden;
    .heroWrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      .slide {
        z-index: 1;
        width: 100%;
        height: 100%;
        .slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          &::before {
            content: "";
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100vh;
            bottom: 0vh;
            left: 0;
            overflow: hidden;
            opacity: 0.4;
            background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.2) 50%,
              rgba(0, 0, 0, 0.6) 100%
            );
          }
        }
      }
    }
  }
`
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000000;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background: #ffcc00;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: fill;
`;




export default MusicHeader;
