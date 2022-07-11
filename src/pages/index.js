import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>VENI VEDI VICI!</p>
      <StaticImage
        alt="Mark Anthony"
        src="../images/mark.jpeg"
      />
    </Layout>
  )
}

export default IndexPage