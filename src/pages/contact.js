import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      gen: file(relativePath: { eq: "images/gen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="min-h-screen flex lg:pl-xs">
        <div className="border-solid lg:border-l flex items-stretch flex-col w-full max-w-full">
          <BackgroundImage
            className="p-8 lg:px-16 lg:py-12 flex-grow flex text-xl lg:text-4xl lg:pr-64 z-10 tiny-bg-tint"
            fluid={data.gen.childImageSharp.fluid}>
            <h1 className="mt-auto" style={{ fontVariationSettings: "'wdth' 105" }}>
              For all inquiries:
              <br />
              <a
                className="border-b border-transparent hover:border-gray-100"
                style={{ fontVariationSettings: `'wdth' 125, 'wght' 700` }}
                href="mailto:wushuatucsd@gmail.com">wushuatucsd@gmail.com</a>
            </h1>
          </BackgroundImage>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
