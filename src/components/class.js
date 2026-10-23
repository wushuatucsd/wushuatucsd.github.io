import React from "react"
import BackgroundImage from "gatsby-background-image"

const Class = ({ day, coach, location, desc, time, img }) => {
  return (
    <>
      <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
        <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>{day}</h1>
        <p className="pb-6 text-gray-400">
          This class is coached by <strong>{coach}</strong>{location ? <> and takes place at <strong>{location}</strong></> : null}
        </p>
        <p className="pb-6 text-gray-400">{desc}</p>
        <p className="text-lg">{time}</p>
      </div>
      <BackgroundImage
        className="border-solid py-6 pl-6 pr-8"
        style={{ borderWidth: "1px" }}
        fluid={img}>
      </BackgroundImage>
    </>
  )
}

export default Class