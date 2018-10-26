import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';



const form = {
  width:"700px",
  maxWidth:"70%",
  margin:"auto",
}
const label = {
  color :"#1F838E",
  
}

export default ({ data }) => (

    <Layout>
      <Header>

</Header>

<h1 style={{ color :"#1F838E",
    fontSize:"40px",
    maxWidth:"70%",
    width:"700px",
    margin:"auto",
    textAlign:"center",
    paddingTop:"15px",
    paddingBottom:"15px",
    }}
    >Contact {data.site.siteMetadata.title}</h1>
   
    <p
    style={{ width:"700px",
    maxWidth:"70%",
    textAlign:"center",
    margin:"auto",
    fontSize:"20px",}}>
       If you want to contact us, please shoot us an email.
        Or go for a bike ride.
       Or hire Lisa, because she's looking for job offers to
       do what she loves and be a web developer.
    </p>

    
    <Form>
        <FormGroup
        style={form}
        >
        <Label for="Name"
        style={label}
             >Name</Label>
          <Input 
          style={{
            backgroundColor:"#8BD3DB  ",
            lineHeight:"15px",
          }}
          type="textarea" name="text" placeholder="name"/>
        </FormGroup>
        <FormGroup
        style={form}>
          <Label 
          style = {label}
          for="Email">Email</Label>
          <Input style={{
            backgroundColor:"#8BD3DB  ",
            lineHeight:"30px",
          }}
           type="email" name="email" id="Email" placeholder="email address" />
        </FormGroup>
       
        <FormGroup
         style={form}>
          <Label 
          style = {label}
          for="Message">Message</Label>
          <Input
           style={{
            backgroundColor:"#8BD3DB  ",
            lineHeight:"100px",
          }}
           type="textarea" name="text" id="exampleText"  placeholder="your message"/>
        </FormGroup>
          <Button
          style = {{
            marginTop:"15px",
            alignItems:"center",
            color:"white",
            backgroundColor:"#8BD3DB ",
            justifyContent:"center",
          }}
          >Submit</Button>
       
      </Form>
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