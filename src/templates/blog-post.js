import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"


export default ({data}) => {
    const post = data.markdownRemark
  return (
 
    <Layout>
         <Header></Header>
       <div 
      >
        <h1 style={{
          fontSize:"35px",
          color :"black",
          textAlign:"center",
          
        }}
        >{post.frontmatter.title}</h1>
        <div style={{
          
          color :"#black",
          textAlign:"center",
          fontSize:"20px",
          maxWidth:"90%",
          width:"1000px",
          margin:"auto",
        
        }}
       dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        
        
      }
    }
  }
`
