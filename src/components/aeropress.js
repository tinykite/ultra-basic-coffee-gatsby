import React, { useRef } from "react"
import styled from "styled-components"
import { useOnScreen } from "../hooks/useOnScreen"
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"

const ScrollContainer = styled.div`
  background: ${props => props.background};
  margin: 0 auto;
  position: relative;

  @media (max-width: 720px) {
    padding-bottom: 4vh;
  }
`

// const WaveTop = styled(motion.svg)`
//   width: 100%;
//   height: auto;
//   background: white;
//   position: relative;
// `

const Main = styled(motion.article)`
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  text-align: center;

  @media (min-width: 720px) {
    width: 85%;
    grid-template-columns: 1fr 0.5fr;
    grid-column-gap: 45px;
    align-content: center;
    align-items: center;
    height: 80vh;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 550px 1fr;
    max-width: 900px;
    height: 100vh;
  }
`

const Title = styled(motion.h2)`
  font-family: '${props => props.fontStack}';
  font-size: 45px;
  text-transform: uppercase;
  font-weight: normal;
  padding: 0;
  color: #fff;
  text-align: center;
  grid-column: 1 / 1;
  margin-top: 20px;

  @media (min-width: 320px) {
    font-size: calc(45px + 14 * ((100vw - 320px) / 320));
  }

  @media (min-width: 720px) {
    text-align: left;
  }

  @media (min-width: 900px) {
    font-size: 75px;
  }
  
  @media (min-width: 1000px) {
    font-size: 80px;
  } 
`

const Intro = styled.p`
  color: #ffffff;
  font-style: italic;
  margin-top: 20px;
  font-size: 14px;
  grid-column: 1 / 1;
  text-align: center;

  @media (max-width: 719px) {
    grid-row: 2;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    font-size: 19px;
  }
`

const Story = styled.p`
  color: #ffffff;
  font-weight: 200;
  line-height: 1.5;
  font-size: 14px;
  grid-column: 1 / 1;
  text-align: center;

  @media (min-width: 350px) {
    margin-top: 20px;
  }

  @media (max-width: 719px) {
    order: 1;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }
`

const AeroIllustration = styled(motion.div)`
  grid-column: 2 / -1;
  width: 75%;
  position: relative;
  margin: 0 auto;

  @media (max-width: 719px) {
    grid-row: 2;
  }

  @media (min-width: 720px) {
    background: green;
    grid-row: 1;
    align-self: start;
  }

  @media (min-width: 1000px) {
    width: 250px;
  }
`

const AeroIllustrationItem = styled(motion.svg)`
  --height: 575px;

  width: 251px;
  height: var(--height);
  margin-top: 20px;

  @media (min-width: 720px) {
    position: absolute;
    top: calc(var(--height) / 6 * -1);
    left: 0;
    margin-top: 0px;
  }
`

const InnerTitleWrapper = styled(motion.div)``

const Letter = styled(motion.span)`
  display: inline-block;
  line-height: 1em;
`

const Aeropress = ({ title, background }) => {
  const ref = useRef()
  let thresholdOptions = []

  for (
    let step = 0;
    step <= 1;
    step = step + 0.005
  ) {
    thresholdOptions.push(step)
  }

  const onScreen = useOnScreen(
    ref,
    thresholdOptions
  )
  const { getThreshold } = onScreen

  const position = useMotionValue(0)
  position.set(getThreshold)
  const xRange = [0, 1]
  const yRange = ["120px", "0px"]
  const opacity = position
  const translateY = useTransform(
    position,
    xRange,
    yRange
  )

  const drips = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const drip = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        yoyo: Infinity,
        duration: 3,
      },
    },
  }

  const wordGroup = title.split("")
  let letterMarkup = wordGroup.map(item => {
    return <Letter variants={drip}>{item}</Letter>
  })

  return (
    <>
      {/* <WaveTop
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#19224F"
          fillRule="evenodd"
          d="M0 0c187.992 0 165.992 58 353.984 58C541.98 58 541.98 0 729.978 0c188.006 0 188.006 58 376.011 58C1293.995 58 1251.995 0 1440 0v115H0V0z"
        ></path>
      </WaveTop> */}
      <ScrollContainer
        ref={ref}
        background={background}
      >
        <Main>
          <Title
            fontStack="Barbour"
            style={{ opacity }}
          >
            <InnerTitleWrapper
              initial={"start"}
              variants={drips}
              animate={"end"}
            >
              {letterMarkup}
            </InnerTitleWrapper>
          </Title>
          <Intro>
            The hard-bodied progeny of a
            manufacturer of frisbee lookalikes.
          </Intro>
          <AeroIllustration>
            <AeroIllustrationItem
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="575"
              fill="none"
              viewBox="0 0 250 575"
              style={{ opacity }}
            >
              <path
                fill="#fff"
                d="M214.66 141.3h-175v322.95h175V141.3z"
                opacity="0.49"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M7.21 424.87H242.8a7.098 7.098 0 017.2 7v5a7.098 7.098 0 01-7.2 7H7.21a7.11 7.11 0 01-7.21-7v-5a7.11 7.11 0 017.21-7z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                d="M223.16 425.87h-198a6 6 0 110-12h198a6 6 0 110 12zM126.66 201.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"
              ></path>
              <path
                fill="#fff"
                d="M127.38 300.16c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0-60.33c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11a11 11 0 00-11-11zm0 0c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11a11 11 0 00-11-11zm0 60.33c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zM39.66 139.87v275h175v-275h-175zm87 34.63c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zm0 213a16 16 0 1116-16c0 8.837-7.163 16-16 16zm.72-60.34c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16c0 4.243-1.686 8.313-4.686 11.314a16.004 16.004 0 01-11.314 4.686zm0-60.33c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16c0 4.243-1.686 8.313-4.686 11.314a16.004 16.004 0 01-11.314 4.686zm0-27c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 60.33c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm-.72 60.34a11.001 11.001 0 1011 11c0-6.075-4.925-11-11-11zm.72-120.67c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 0c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11z"
              ></path>
              <path
                fill="#fff"
                stroke="#fff"
                d="M204.89 436.06H49.11a9.63 9.63 0 00-9.61 9.61v14.16a9.63 9.63 0 009.61 9.61h155.78a9.62 9.62 0 009.61-9.61v-14.16a9.62 9.62 0 00-9.61-9.61zM66.31 464.38h-17.2a4.55 4.55 0 01-4.55-4.55v-14.16a4.56 4.56 0 014.55-4.56h17.2v23.27zm23.27 0H71.37v-23.27h18.21v23.27zm23.26 0H94.63v-23.27h18.21v23.27zm23.27 0H117.9v-23.27h18.21v23.27zm5.06 0v-23.27h18.2v23.27h-18.2zm23.26 0v-23.27h18.21v23.27h-18.21zm45-4.55a4.56 4.56 0 01-4.56 4.55H187.7v-23.27h17.19a4.56 4.56 0 014.56 4.56l-.02 14.16z"
              ></path>
              <motion.g
                initial={"start"}
                variants={drips}
                animate={"end"}
              >
                <motion.path
                  variants={drip}
                  data-count="drip1"
                  fill="#6B718E"
                  fillRule="evenodd"
                  d="M80.16 492.37a4 4 0 014 4v21a4 4 0 01-8 0v-21a4 4 0 014-4z"
                  clipRule="evenodd"
                ></motion.path>
                <motion.path
                  variants={drip}
                  data-count="drip2"
                  fill="#9DA1B3"
                  fillRule="evenodd"
                  d="M97.16 492.37a4 4 0 014 4v37a4 4 0 01-8 0v-37a4 4 0 014-4z"
                  clipRule="evenodd"
                ></motion.path>
                <motion.path
                  variants={drip}
                  data-count="drip3"
                  fill="#ADB2C0"
                  fillRule="evenodd"
                  d="M114.16 492.37a4 4 0 014 4v74a4 4 0 01-8 0v-74a4 4 0 014-4z"
                  clipRule="evenodd"
                ></motion.path>
                <motion.path
                  variants={drip}
                  data-count="drip4"
                  fill="#959AAD"
                  d="M135.16 496.37a4 4 0 00-8 0v52a4 4 0 008 0v-52z"
                ></motion.path>
                <motion.path
                  variants={drip}
                  data-count="drip5"
                  fill="#ADB2C0"
                  fillRule="evenodd"
                  d="M148.16 492.37a4 4 0 014 4v74a4 4 0 01-8 0v-74a4 4 0 014-4z"
                  clipRule="evenodd"
                ></motion.path>
                <motion.path
                  variants={drip}
                  data-count="drip6"
                  fill="#9DA1B3"
                  fillRule="evenodd"
                  d="M165.16 492.37a4 4 0 014 4v37a4 4 0 01-8 0v-37a4 4 0 014-4z"
                  clipRule="evenodd"
                ></motion.path>
                <motion.path
                  variants={drip}
                  data-count="drip7"
                  fill="#6B718E"
                  fillRule="evenodd"
                  d="M182.16 492.37a4 4 0 014 4v21a4 4 0 01-8 0v-21a4 4 0 014-4z"
                  clipRule="evenodd"
                ></motion.path>
              </motion.g>
              <motion.g style={{ translateY }}>
                <path
                  fill="#fff"
                  d="M214.66 11.65h-175v129.22h175V11.65z"
                  opacity="0.49"
                ></path>
                <path
                  fill="#fff"
                  d="M250.02 6.09a5.9 5.9 0 01-1.81 4.24 6.19 6.19 0 01-4.36 1.76h-29.19V141.3h-8V12.09h-159v128.78h-8V12.09H6.19a6.09 6.09 0 01-6.17-6 5.9 5.9 0 011.81-4.24A6.233 6.233 0 016.19.09h237.66a6.09 6.09 0 016.17 6z"
                ></path>
                <path
                  fill="#fff"
                  d="M214.66 0h-8v1h8V0z"
                ></path>
              </motion.g>
            </AeroIllustrationItem>
          </AeroIllustration>
          <Story>
            It might not have the glamour of a
            Chemex. There are also a lot of
            confusingly large accessories. But
            take a chance on this tiny plastic
            plunger just once — and you might
            discover it can produce the most
            naturally sweet coffee of your dreams.
          </Story>
        </Main>
      </ScrollContainer>
    </>
  )
}

export default Aeropress
