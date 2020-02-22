import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Introduction from "../components/introduction"
import Aeropress from "../components/aeropress"
import KalitaWave from "../components/kalitawave"
import FrenchPress from "../components/frenchpress"
import Interstitial from "../components/interstitial"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Introduction />
    <Interstitial
      title="Ultra Basic Tools"
      icon="Tools"
    />
    <Aeropress
      title="Aeropress"
      fontStack="Barbour"
      background="#19224f"
    />
    <KalitaWave />
    <FrenchPress />
    <Interstitial
      title="Ultra Basic Techniques"
      icon="Technique"
    />
  </Layout>
)

export default IndexPage
