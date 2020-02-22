import React, { useRef } from "react"
import { motion } from "framer-motion"
import { useOnScreen } from "../hooks/useOnScreen"
import styled from "styled-components"

const ScrollContainer = styled(motion.div)`
  background: black;
  position: relative;
  overflow: hidden;

  @media (min-width: 500px) {
    margin: 0 auto;
    justify-content: center;
    display: flex;
    align-items: center;
    height: 85vh;
  }

  @media (min-width: 720px) {
    height: 100vh;
  }
`

const IllustrationItem = styled.svg`
  @media (max-width: 500px) {
    width: 65px;
    height: auto;
  }

  @media (min-width: 500px) {
    position: absolute;
    top: 0;
  }
`

const Story = styled(motion.article)`
  position: relative; /* Necessary for drip positioning */
  width: 70%;
  max-width: 550px;
  padding: 5vh 0; /* Space for illustrated hash marks */
  margin-left: 2rem;

  @media (min-width: 500px) {
    padding-top: 50px;
    margin: 0;
  }

  @media (min-width: 720px) {
    width: 80%;
    padding-top: 85px;
  }
`

const StoryItem = styled(motion.p)`
  :nth-of-type(1) {
    @media (max-width: 720px) {
      padding-top: 1rem;
    }
  }
  color: #ffffff;
  font-size: 14px;

  & + & {
    margin-top: 20px;
  }

  @media (min-width: 720px) {
    font-size: 17px;
  }
`

const Drips = styled(motion.svg)`
  position: absolute;
  top: 10px;
  right: 2%;
  width: 40px;
  height: auto;

  @media (min-width: 500px) {
    right: 5%;
  }

  @media (min-width: 720px) {
    right: 8%;
    width: 52px;
  }

  @media (min-width: 900px) {
    right: 20%;
  }
`

const Introduction = () => {
  const ref = useRef()
  const thresholdOptions = 0
  const onScreen = useOnScreen(
    ref,
    thresholdOptions
  )

  const { isIntersecting } = onScreen

  return (
    <>
      <ScrollContainer ref={ref}>
        <Story>
          <IllustrationItem
            width="104"
            height="44"
            viewBox="0 0 104 44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#FFF" fillRule="evenodd">
              <path d="M19.402 14.495L32.357 1.131C33.232.23 34.954.01 36.202.642c1.096.556 1.483 1.6.918 2.478l-9.528 14.795c-2.472 3.838-5.406 7.511-8.766 10.978L5.87 42.257c-.875.903-2.597 1.122-3.845.49-1.096-.556-1.483-1.6-.918-2.478l9.528-14.795c2.472-3.838 5.406-7.512 8.767-10.979z" />
              <path d="M18.826 14.495L5.87 1.131C4.995.23 3.273.01 2.025.642c-1.096.556-1.483 1.6-.918 2.478l9.528 14.795c2.472 3.838 5.406 7.511 8.767 10.978l12.955 13.364c.875.903 2.597 1.122 3.845.49 1.096-.556 1.483-1.6.918-2.478l-9.528-14.795c-2.472-3.838-5.406-7.512-8.766-10.979z" />
              <path d="M52.402 14.495L65.357 1.131C66.232.23 67.954.01 69.202.642c1.096.556 1.483 1.6.918 2.478l-9.528 14.795c-2.472 3.838-5.406 7.511-8.766 10.978L38.87 42.257c-.875.903-2.597 1.122-3.845.49-1.096-.556-1.483-1.6-.918-2.478l9.528-14.795c2.472-3.838 5.406-7.512 8.767-10.979z" />
              <path d="M51.826 14.495L38.87 1.131C37.995.23 36.273.01 35.025.642c-1.096.556-1.483 1.6-.918 2.478l9.528 14.795c2.472 3.838 5.406 7.511 8.767 10.978l12.955 13.364c.875.903 2.597 1.122 3.845.49 1.096-.556 1.483-1.6.918-2.478l-9.528-14.795c-2.472-3.838-5.406-7.512-8.766-10.979z" />
              <g>
                <path d="M85.402 14.495L98.357 1.131c.875-.902 2.597-1.121 3.845-.489 1.096.556 1.483 1.6.918 2.478l-9.528 14.795c-2.472 3.838-5.406 7.511-8.766 10.978L71.87 42.257c-.875.903-2.597 1.122-3.845.49-1.096-.556-1.483-1.6-.918-2.478l9.528-14.795c2.472-3.838 5.406-7.512 8.767-10.979z" />
                <path d="M84.826 14.495c3.36 3.467 6.294 7.141 8.766 10.98l9.528 14.794c.565.877.178 1.922-.918 2.477-1.248.633-2.97.414-3.845-.489L85.402 28.893c-3.361-3.467-6.295-7.14-8.767-10.978L67.107 3.12c-.565-.878-.178-1.922.918-2.478 1.248-.632 2.97-.413 3.845.49l12.956 13.363z" />
              </g>
            </g>
          </IllustrationItem>
          <StoryItem>
            At a punk house in Chicago I lived in
            during college, coffee was a giant pot
            of water with an industrial dose of
            Cafe Bustelo that was boiled for an
            indeterminate amount of time.
          </StoryItem>
          <StoryItem>
            It was super gross.
          </StoryItem>
          <StoryItem>
            But other than tasting like a campfire
            took a dump in a dirty lake full of
            sand, it was still coffee. Just coffee
            minus nuance.
          </StoryItem>
          <StoryItem>
            This is a short guide to understanding
            more of the nuance.
          </StoryItem>
        </Story>
        <Drips
          initial={{ translateY: -273 }}
          animate={
            isIntersecting && { translateY: -10 }
          }
          transition={{
            ease: "easeOut",
            duration: 8,
          }}
          width="56"
          height="273"
          viewBox="0 0 56 273"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h19v263.5a9.5 9.5 0 0 1-19 0V0z" />
            <path d="M37 0h19v124.5a9.5 9.5 0 0 1-19 0V0z" />
          </g>
        </Drips>
      </ScrollContainer>
    </>
  )
}

export default Introduction
