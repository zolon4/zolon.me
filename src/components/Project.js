import React from "react"

function Project(props) {
  console.log(props)
  return (
    <div className="my-8 text-center md:text-left flex flex-col items-center md:items-start ">
      <a href={props.link} target="_blank">
        <div
          className="w-40 h-40 rounded-full"
          style={{ backgroundColor: props.color }}
        />
      </a>
      <div className="w-72">
        <p className="text-3xl">{props.name}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Project
