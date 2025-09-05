"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

function BackButton(props) {
  const router = useRouter();
  

  return (
    <button className="mt-4 text-lg text-yellow-400 hover:cursor-pointer" onClick={() => {router.back()}} >
      {props.children}
    </button>
  )
}

export default BackButton;
