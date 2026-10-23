import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Member from "../components/member"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      thomas: file(relativePath: { eq: "images/cabinet/thomas.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      toby: file(relativePath: { eq: "images/cabinet/toby.JPG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      alyssa: file(relativePath: { eq: "images/cabinet/alyssa.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      benson: file(relativePath: { eq: "images/cabinet/benson.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      alex: file(relativePath: { eq: "images/cabinet/alex.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      lauren: file(relativePath: { eq: "images/cabinet/lauren.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      justin: file(relativePath: { eq: "images/cabinet/justin.JPG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
      all: file(relativePath: { eq: "images/cabinet/troll.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Cabinet" />
      <BackgroundImage
          fluid={data.all.childImageSharp.fluid}
          className="px-8 lg:px-16 pt-16 min-h-screen pb-20 lg:pl-xs"
          style={{ columns: "2 400px", columnGap: "0.75rem", paddingTop: "65vh", backgroundAttachment: "fixed", backgroundColor: "rgba(0,0,0,.50)", backgroundBlendMode: "multiply" }}>
          <div className="inline-block text-xl lg:text-3xl mb-8" style={{ fontVariationSettings: "'wdth' 125, 'wght' 400" }}>
            <h1>Everything falls under the responsibility of <strong>cabinet</strong>. If you have any questions or concerns, talk to us—we don't bite!</h1>
          </div>
          {/*Left Column*/}
          <Member
            title="Vice President"
            name="Thomas"
            desc="Thomas is a 3rd-year transfer Aerospace Engineering student. As Vice President, Thomas’s biggest contribution to the club is being the designated driver for club events and practices as well as doing equipment orders for the club (he also helps Benson with day to day tasks every now and then…). You can usually find Thomas zipping around Campus on his scooter. You are more then welcome to flag him down at your own peril."
            img={data.thomas.childImageSharp.gatsbyImageData} />
          <Member
            title="Treasurer"
            name="Toby"
            desc="Toby is a 3rd year Data Science major. As the Chief Financial Officer (CFO) of the club he will make the bi-monthly trip to Chase bank with Benson. Toby has made his long awaited return to wushu after a 2 year hiatus and is preparing to compete."
            img={data.toby.childImageSharp.gatsbyImageData} />
          <Member
            title="Secretary"
            name="Alyssa"
            desc="Alyssa is a 3rd-year Structural Engineering major who serves as the secretary for the club. Besides basically typing whatever Benson says at meetings and answering emails here and there, she usually hangs out in her dorm either at her desk procrastinating or wanting to lay down in her bed. In the off chance that you see her, ask her to do a flip and receive a confused look of a retired gymnast who hasn’t practiced in 2-3 years."
            img={data.alyssa.childImageSharp.gatsbyImageData} />
          <Member
            title="President"
            name="Benson Zhu"
            desc="Benson is a 4th-year Math CS major who just can’t stop. Can’t stop yapping, can’t stop getting distracted, can’t stop piling responsibilities onto cabinet, can’t stop trailing this sentence on for too long… As president of the club, he actually holds no substantial power and only goes to meetings to charade for 45 minutes. When he isn’t blabbering on, you can find him destroying his eardrums listening to metal or baking a sweet treat, maybe even both at the same time if you’re lucky !"
            img={data.benson.childImageSharp.gatsbyImageData} />
          <Member
            title="Social Chair"
            name="Alexander"
            desc="Alexander is a 4th-year Marine Biology major and the Social chair. This social chair loves to do everything except what they are actually supposed to be doing via making a one person job a multi person job or an unnecessary side quest. While lamenting not graduating on time, you can usually catch them reading papers and documentation for funsies in the library and if you come to them with a picture of an animal or a question about a ecological process, you can see the essence of their soul."
            img={data.alex.childImageSharp.gatsbyImageData} />
          <Member
            title="Historian"
            name="Lauren"
            desc="Lauren is a 4th-year Cognitive Science major. She has the beauty, the grace, and the power to change the club through meme-posting on the Instagram account (well, not really, each post is peak). You can usually find her at Labora Cafe or Wong Avery Library locking in on an assignment or hanging out with people in and outside of wushu. If you’re lucky, you might witness the process of her creating an artistic masterpiece that will be posted on Instagram… "
            img={data.lauren.childImageSharp.gatsbyImageData} />
          <Member
            title="General Advisor"
            name="Justin"
            desc="Justin is a 2nd-year Microbiology major and General Advisor for the club, which amounts to him doing whatever happens to be needed. A proverbial youngling (born in 2007) in the club, While more of a class-eat-class-sleep kind of person, if you know where to find him during passing period, you might just break records in sneakily taking pictures of him (much to his eternal dismay). Better yet, wait until he inevitably pops up in the Discord channel to game and ambush him."
            img={data.justin.childImageSharp.gatsbyImageData} />
          
        </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
