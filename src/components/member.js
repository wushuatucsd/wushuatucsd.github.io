import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Member = ({ title, name, desc, img, useSmallFont }) => {

  let fontSize
  if(useSmallFont)
    fontSize = "text-sm"
  else
    fontSize = "text-base"

  return (
    <div className="inline-block text-3xl lg:text-4xl border-solid mb-3 w-full bg-black" style={{ borderWidth: "1px" }}>
      <div className="px-8 py-8 border-solid">
        <h1 className="text-xl" style={{ fontVariationSettings: "'wdth' 125, 'wght' 500" }}>{title}</h1>
        <h1 className="mb-4 text-3xl leading-tight" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
          {name}
        </h1>
        <p className={fontSize}>{desc}</p>
      </div>
      {img && <GatsbyImage className="" alt="Wushu Cabinet member's portrait" image={img} />}
    </div>
  )
}

export default Member
