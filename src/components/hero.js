import React from "react"
import styled from "styled-components"

const CupLiquid = styled.rect`
  transform: translateY(100%);
  animation: titlePour 8s linear forwards;

  @keyframes titlePour {
    100% {
      transform: translateY(0);
    }
  }
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;

  @media (min-width: 450px) {
    padding: 8vh 0;
  }

  @media (min-width: 600px) {
    min-height: 80vh;
    padding: 0;
  }

  @media (min-width: 1000px) {
    min-height: 100vh;
  }
`

const HeroTitle = styled.h1`
  visibility: hidden;
  font-style: normal;
  font-size: 60px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.82px;
  margin: 0;
  padding: 0;
  line-height: 1;
  text-align: center;

  @media (min-width: 700px) {
    font-size: 85px;
  }

  @media (min-width: 1000px) {
    font-size: 114px;
  }

  .wf-active &,
  .wf-active & {
    font-weight: 400;
    font-family: "Knockout 69 A", "Knockout 69 B";
    visibility: visible;
  }
`

const HeroIllustration = styled.svg`
  height: auto;
  margin-top: 30px;
  width: 280px;

  @media (min-width: 700px) {
    width: 400px;
  }

  @media (min-width: 1000px) {
    margin-top: 40px;
  }
`

const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vh 0;

  @media (min-width: 500px) {
    padding: 6vh 0;
  }

  @media (min-width: 720px) {
    padding: 8vh 0;
  }
`

const IntroDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  max-width: 75%;

  @media (min-width: 720px) {
    font-size: 1.25rem;
    max-width: 560px;
    line-height: 1.5;
  }
`

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroTitle>
          Ultra Basic
          <span className="u-visuallyHidden">
            Coffee
          </span>
        </HeroTitle>

        <HeroIllustration viewBox="0 0 122 75">
          <defs>
            <path
              id="CupText"
              d="M5.167 27C2.025 27 0 24.873 0 22.164c0-3.225 2.968-5.557 2.968-9.433 0-1.544-.454-2.778-.454-4.494C2.514 4.567 4.574 1 9.112 1 12.5 1 14 2.955 14 5.185c0 2.744-2.863 4.15-3.107 6.723l-.245.034c-.558-2.127.943-3.807.943-5.797 0-2.058-1.152-2.984-2.688-2.984-2.304 0-3.596 1.818-3.736 4.116-.105 1.784.419 3.773.419 5.488 0 3.945-2.828 5.9-2.828 8.987 0 1.646 1.117 2.813 2.758 2.813 1.746 0 2.933-1.098 3.596-2.436.698-1.406.733-3.293 2.654-4.013l.21.275c-1.572 1.166-.804 3.773-1.956 5.9C9.077 26.04 7.087 27 5.167 27zm12.422 0C14.991 27 13 25.325 13 23.034c0-2.461 2.362-3.897 2.43-7.248 0-1.094-.304-2.051-.27-3.248C15.193 9.667 16.712 7 20.086 7 22.616 7 24 8.538 24 10.692c0 2.325-1.586 4.342-1.586 7.317 0 1.025.203 2.05.203 3.179C22.549 24.641 20.66 27 17.589 27zm-.192-2c2.206 0 2.967-2.221 3.005-4.269.038-.972-.038-1.909-.038-2.742 0-3.575 1.636-5.137 1.636-6.976C22 9.763 21.24 9 19.908 9c-1.826 0-2.587 1.458-2.587 3.436 0 1.11.19 2.325.19 3.297 0 3.47-2.473 4.72-2.511 6.837 0 1.285.875 2.43 2.397 2.43zm6.776 1L24 25.8a7.097 7.097 0 0 0 2.422-3.51c1.8-5.046-1.419-8.688 2.422-12.598-1.107.033-2.422.334-3.287.802l-.173-.2c1.246-.836 1.626-2.875 4.014-2.674.83-1.47.138-2.774.484-4.512.312-1.57 1.35-2.907 3.322-2.907 1.177 0 2.18.568 2.838 1.437l-.208.233c-.969-.935-2.872-.267-3.356 1.504-.416 1.47.31 3.242-.97 4.378l.035.034c2.042-.702 4.153.902 5.433-.268 1.176-1.07.311-2.907.623-4.645C37.91 1.304 38.913 0 40.886 0 42.062 0 43.135.468 44 1.237l-.173.334c-1.211-.769-3.149-.2-3.633 1.57-.415 1.47.277 3.476-1.004 4.612l.035.034c1.66-.568 2.56.5 4.498-.2l.173.2c-.9.601-1.28 2.072-3.252 2.072-.658 0-1.454-.167-2.007-.167 0 2.406-1.038 2.673-1.696 4.946-1.28 4.277 1.626 7.987-1.384 10.192-1.419 1.07-2.56.468-3.702 1.17l-.173-.2a7.097 7.097 0 0 0 2.422-3.51c.865-2.406-.52-4.578.207-7.352.554-2.139 1.904-2.807 2.319-5.48-.554.4-.796.601-1.834.601-.761 0-1.384-.367-2.145-.367-1.488 0-2.526.835-2.976 2.673-.865 3.509 1.003 9.19-1.038 11.663-1.73 2.106-3.322 1.27-4.464 1.972zm19.524 1C41.445 27 40 25.485 40 23.282c0-2.616 1.95-4.13 1.95-7.297 0-1.343-.236-2.066-.236-3.58 0-3.512 1.916-5.302 4.404-5.302 1.546 0 2.285.723 3.73.723 1.01 0 1.446-.31 1.984-.826l.168.207c-1.748 2.271-2.151 4.302-2.151 6.402 0 1.48.235 3.236-.975 4.51-1.143 1.205-3.26 1.446-5.244.688-.336 1.48-1.277 2.341-1.277 3.89 0 1.136.605 2.065 2.05 2.065 2.252 0 2.286-2.375 4.404-3.304l.134.275C47.597 22.456 47.597 27 43.697 27zM44 16.974c1.684.104 2.737-.068 3.333-1.203.492-.963.351-1.96.351-2.957 0-2.613 1.053-3.851 2.316-4.608L49.895 8c-2.106.688-2.737.103-3.965.619-1.018.447-1.895 1.41-1.895 2.991 0 .998.316 1.754.316 3.06 0 .826-.14 1.685-.351 2.304zM54.697 27C52.445 27 51 25.485 51 23.282c0-2.616 1.95-4.13 1.95-7.297 0-1.343-.236-2.066-.236-3.58 0-3.512 1.916-5.302 4.404-5.302 1.546 0 2.285.723 3.73.723 1.01 0 1.446-.31 1.984-.826l.168.207c-1.748 2.271-2.151 4.302-2.151 6.402 0 1.48.235 3.236-.975 4.51-1.143 1.205-3.26 1.446-5.244.688-.336 1.48-1.277 2.341-1.277 3.89 0 1.136.605 2.065 2.05 2.065 2.252 0 2.286-2.375 4.404-3.304l.134.275C58.597 22.456 58.597 27 54.697 27zM55 16.974c1.684.104 2.737-.068 3.333-1.203.492-.963.351-1.96.351-2.957 0-2.613 1.053-3.851 2.316-4.608L60.895 8c-2.106.688-2.737.103-3.965.619-1.018.447-1.895 1.41-1.895 2.991 0 .998.316 1.754.316 3.06 0 .826-.14 1.685-.351 2.304z"
            />
            <clipPath id="CupBody">
              <rect
                width="105"
                height="75"
                x="0"
                y="0"
                fillRule="nonzero"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#CupBody)">
            <rect
              width="105"
              height="75"
              strokeWidth="8"
              stroke="#FFF"
              fill="#000"
              fillRule="nonzero"
            />
            <CupLiquid
              width="105"
              height="75"
              stroke="none"
              fill="#fff"
              x="0"
              y="0"
              fillRule="nonzero"
            />
            <use href="#CupText" x="21" y="23" />
          </g>
          <rect
            x="105"
            y="16"
            width="15"
            height="45"
            stroke="#FFF"
            strokeWidth="4"
            fill="transparent"
          />
        </HeroIllustration>
      </HeroContainer>
      <Intro>
        <IntroDescription>
          An illustrated guide to the fundamentals
          of coffee extraction.
        </IntroDescription>
      </Intro>
    </>
  )
}

export default Hero
