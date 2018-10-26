import React from "react"
import  "../pages/index.css"
import { Link, graphql } from "gatsby"
import "../utils/typography"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import headerImage from "../components/headerImage"
import city from "../images/city.jpg"
import Img from 'gatsby-image'







export default ({ data }) => {
  return (

    <Layout>
     <headerImage></headerImage>
    <Header></Header>
      <img src={city} style={{
     
        height:"auto",
        width:"100%",
      }}>

      </img>
      
      <container>
      <h4
        style={{
          margin:"auto",
          textAlign:"center",
          fontSize:"22px",
          paddingBottom:"20px",
          
        }}>{data.allMarkdownRemark.totalCount} Posts</h4>

      <div style={{
        margin:"auto",
        width:"800px",
        maxWidth:"90%",
       
        textAlign:"center",
      }}>
       
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{
            
            height:"700px",
            textAlign:"center",
            border:"5px solid #052e3f",
            marginBottom:"25px",
            boxShadow:"2px 2px 2px 2px #03212d",
            
            
            
          }}>
         
           

              <h3 style={{
                fontSize:"30px",
                color :"#1F838E",
                fontWeight:"2px",
                paddingTop:"10px",
              }}>
                {node.frontmatter.title}{" "}
                
              </h3>
              <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              style={{
                width:"500px",
                maxWidth:"90%",
                margin:"auto",
                height:"300px",
              }} />
              <p
              style={{
                textDecoration:"none",
                padding:"50px",
                color:"#4e5259",
                margin:"auto",
              }}>{node.excerpt}</p>
           
             <Link
             to={node.fields.slug}
          
           >
           <div style = {{
             color:"#1e3760",
             fontSize:"18px",
           }}>
                  {node.frontmatter.date}
                </div>
            <button
            style={{
              backgroundColor:"#9eaabc",
              color:"#eff1f4",
              border:"5px solid #3e3b3b",
              boxShadow:"0 10px 3 px #ccc",
              fontSize:"15px",
              padding:"10px",
              
            }}> Read more</button>
             </Link>
          </div>
        ))}
        
      </div>
    
      </container>
     
     

    
     <Footer></Footer>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title,
            date,
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
          },
            
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`