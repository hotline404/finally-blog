"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

function BackButton(props) {
  const router = useRouter();
  

  return (
    <button className="fixed top-0 right-0 mt-4 text-lg text-yellow-400 hover:cursor-pointer" onClick={() => {router.back()}} >
      {props.children}
    </button>
  )
}

export default BackButton;
