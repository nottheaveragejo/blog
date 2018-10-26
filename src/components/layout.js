import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"


export default ({ children }, props) => (
  <StaticQuery
  query={graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
}

  render={data => (
   
  <div >
 

      <h3
     style={{
       
       fontSize:"48px",
       fontWeight:"bold",
       textAlign:"left",
       paddingLeft:"20px",
       color :"#1F838E",
       paddingTop:"10px",
    
       
     }}
      >
         {data.site.siteMetadata.title}
      </h3>
    
   
    <div style={{
      color:"grey",
      margin:"auto",
      textAlign:"center",
    
    }}
    >
      {children }
    </div>
    
  
  </div>
    )}
    />

  )
  