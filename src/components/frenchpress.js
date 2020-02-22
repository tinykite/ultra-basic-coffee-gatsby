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
`

const Main = styled(motion.article)`
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 5vh 0;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 720px) {
    grid-template-columns: 1.25fr 0.6fr;
    align-content: center; /* Important side effect utilized here: this property also prevent rows from stretching to fill available space! */
    grid-auto-flow: dense;
    grid-column-gap: 30px;
    max-width: 900px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 550px 1fr;
    grid-column-gap: 45px;
    height: 90vh;
  }
`

const TitleContainer = styled(motion.div)`
  overflow: hidden;
  grid-column: 1 / -1;

  @media (min-width: 500px) {
    grid-column: 1 / 1;
  }
`

const Title = styled(motion.h2)`
  font-family: 'Nostra Sett';
  color: #ffffff;
  text-transform: uppercase;
  font-weight: normal;
  grid-column: 1 / -1;

  @media (min-width: 320px) {
    font-size: calc(
      35px + 16 * ((100vw - 320px) / 320)
    );
  }

  @media (min-width: 720px) {
    text-align: left;
  }

  @media (min-width: 900px) {
    font-size: 60px;
    transform: translateY(100%);
  }
`

const Intro = styled(motion.p)`
  color: #ffffff;
  font-style: italic;
  margin-top: 30px;
  font-size: 14px;
  grid-column: 1 / -1;

  @media (min-width: 500px) {
    grid-column: 1 / 1;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    font-size: 19px;
  }
`

const Story = styled(motion.div)`
  grid-column: 1 / -1;
  margin-top: 20px;

  @media (min-width: 500px) {
    grid-column: 1 / 1;
  }

  @media (max-width: 719px) {
    order: 1;
  }
`

const StoryItem = styled(motion.p)`
  line-height: 1.6;
  font-size: 14px;
  color: #ffffff;
  font-weight: 200;

  a:link,
  a:active,
  a:hover,
  a:visited {
    color: inherit;
    text-decoration: none;
    padding-bottom: 5px;
    border-bottom: 1px solid #ffffff;
  }

  & + & {
    margin-top: 20px;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }
`

const Illustration = styled(motion.div)`
  width: 80%;
  height: auto;
  position: relative;
  margin: 0 auto;
  /* align-self: start; */
  grid-column: 1 / -1;

  @media (min-width: 500px) {
    width: 100%;
    align-self: end;
    transform: translateY(
      -5vh
    ); /* Account for padding on container */
  }

  @media (min-width: 720px) {
    height: 0;
    grid-column: 2 / -1;
  }

  @media (min-width: 1000px) {
    align-self: center;
  }
`

const IllustrationItem = styled(motion.svg)`
  width: 100%;
  max-width: 241px;
  height: auto;
  overflow: visible;
`

// const BottomWave = styled(motion.svg)`
//   background: #ffffff;
//   width: 100%;
//   height: auto;
// `

const FrenchPress = () => {
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
  const fast = useTransform(
    position,
    latest => latest * 1.25
  )
  const slow = useTransform(
    position,
    latest => latest * 0.9
  )

  const xRange = [0, 1]
  const yRange = ["150px", "-80px"]
  const driftRange = ["100%", "-5%"]
  const opacity = useTransform(position, 1, 0)
  const plungerUp = useTransform(
    fast,
    xRange,
    yRange
  )
  const driftUp = useTransform(
    slow,
    xRange,
    driftRange,
    {}
  )

  return (
    <>
      <ScrollContainer
        ref={ref}
        background={"#000000"}
      >
        <Main>
          <TitleContainer>
            <Title
              style={{
                translateY: driftUp,
                opacity,
              }}
            >
              French Press
            </Title>
          </TitleContainer>
          <Intro>
            Invented in 1929. Not a lot has
            changed. But who says that's a bad
            thing?
          </Intro>
          <Illustration>
            <IllustrationItem
              xmlns="http://www.w3.org/2000/svg"
              width="241"
              height="415"
              viewBox="0 0 241 415"
            >
              <motion.g
                style={{
                  translateY: plungerUp,
                  opacity,
                }}
                transition={{
                  type: "inertia",
                  velocity: 50,
                  power: 50,
                  clamp: "false",
                  timeConstant: 200,
                }}
              >
                <path
                  fill="#7F7F7F"
                  d="M190.64 308.08v25h-150v-25h59.79v-11.83h10.37v-249c-11.625-2.874-19.304-13.938-17.93-25.834C94.241 9.52 104.24.497 116.214.347c11.974-.15 22.194 8.621 23.864 20.479 1.67 11.858-5.73 23.11-17.279 26.274v249.15h9.63v11.83h58.21z"
                ></path>
              </motion.g>
              <path
                fill="#FFF"
                d="M30.15 175.25c0-32.83 34.05-54.05 86.38-54.16 49.64 0 85.41 23 85.41 54.16H30.15z"
              ></path>
              <path
                fill="#FFF"
                d="M240.63 200.32h-38.69v-24.75l-1.19-10-200.28.5 29.42 37.31v199c0 6.627 5.373 12 12 12h148c6.627 0 12-5.373 12-12V335H241l-.37-134.68zm-50.69-24.75v24.75h-18.57v-24.76l18.57.01zM42 212.32h18.47v140.85H41.9V218.6l.14.17-.04-6.45zm34.49 0h78.9v140.85H76.47l.02-140.85zm94.9 140.85V212.32h18.57v140.85h-18.57zm-16-177.61v24.76H76.47v-24.78l78.92.02zm-94.9 0v24.78H40.23l-20.56-24.81 40.82.03zM201.94 323V212.32H229V323h-27.06z"
              ></path>
            </IllustrationItem>
          </Illustration>
          <Story>
            <StoryItem>
              The French Press produces one hell
              of a bold, bodacious cup of coffee.
              It's your ideal match if you want
              intense body and something that
              mingles well with others. So go
              ahead and avoid drinking it black.
            </StoryItem>
            <StoryItem>
              PS: It can also be used to produce{" "}
              <a href="https://www.bonappetit.com/test-kitchen/cooking-tips/article/french-press-broth">
                intensely flavorful broth.
              </a>
            </StoryItem>
          </Story>
        </Main>
      </ScrollContainer>
      {/* <BottomWave
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="115"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
          d="M1440 0v114.084C1289.964 106.687 1277.001 57 1102.99 57c-188.006 0-188.006 58-376.012 58-187.998 0-187.998-58-375.994-58C171.722 57 163.385 109.738 0 114.636V0h1440z"
        ></path>
      </BottomWave> */}
    </>
  )
}

export default FrenchPress
