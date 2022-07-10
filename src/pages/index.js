import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>VENI VEDI VICI!</p>
      <StaticImage
        alt="HAIL CAESAR!"
        src="https://englishpluspodcast.com/wp-content/uploads/2021/06/Episode-360-Who-Is-Julius-Caesar.jpg"
      />
    </Layout>
  )
}

export default IndexPage