import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import me from "../images/philidelphia.jpg"
import greg from "../images/jamaica.jpg"
import {Button, ButtonToolbar} from "react-bootstrap"



const image = {
  height: "auto",
  width: "900px",
  maxWidth:"90%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius:"8px",
}
const paragraph = {
  textAlign:"center",
  width:"900px",
  maxWidth:"90%",
  margin:"auto",
  textAlign:"center",
  padding:"25px",
  fontSize:"22px",
}

export default ({ data }) => (
 
  <Layout>
     <Header></Header>

    <h1 style= {{
        color :"#1F838E",
        fontSize:"45px",
        margin:"auto",
        textAlign:"center",
        padding:"25px",
    }}
    >
      About {data.site.siteMetadata.title}</h1>

 
    <p style={paragraph}>
      We're two twenty something year olds living in New York City.
      We share a 375 square foot apartment. By day, we work 
      for a paycheck. By night, we work in pursuit of ikigai.
      Follow us along as we attempt to become adults, travel,
      and try to make good life choices.
    </p>
    <h2 style={{
      color :"#1F838E",
     textAlign:"center",
     paddingTop:"25px",
     paddingBottom:"25px",
    }}>
      About Lisa
    </h2>
    <img src={me} style={image}></img>
    <p style={paragraph}>
      If you're reading this, that means I finished making this blog. 
      I'm elated you're reading this.
      Self taught web developer (no square space needed or required), writer, and
      dessert enthusiast. 
    </p>
    <p style={paragraph}>
       My favorite authors
      are Gillian Flynn and Toni Morrison, my least favorite season is spring, and
      my preference for steak is as rare as possible (exact word
      for word order). I can look into the
      blue endless abyss of the Big Sur or watch as the leaves catch on fire in
      plumes of gold and crimson with equal fervor and appeal.  
       Bravery comes intuitively, along with discipline and a borderline
       unhealthy work obsession.

    </p>


    <h2 style={{ color :"#1F838E",
    margin:"auto",
    textAlign:"center",
    padding:"25px",
  }}>
      About Greg
    </h2>
    <img src={greg}style={image}></img>
    <p style={paragraph}>
      The brains, the reasoning, the intuition. 
      I'm a software engineer at Goldman Sachs. Big fan of 
      Anime.
    </p>
  <Footer></Footer>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`