"use client"
import React, { useState, useEffect } from 'react'

function ProjectList({ data }) {
  const [ state, setState ] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e))
  }, [state]) 
  return (
    <ol className='flex-col text-white text-shadow-pink-500'>
      {state?.projects.map((item, index) => {
        return <li className='text-white text-shadow-yellow-500' id={Math.random()}><a href={`https://github.com/${item}`} target='_blank'>{`project ${index + 1} : ${item}`}</a></li>
      })}
    </ol>
  )
}

export default ProjectList