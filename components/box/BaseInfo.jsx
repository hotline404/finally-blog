'use client'
import React, {useEffect, useState} from 'react'

function BaseInfo() {
  return (
    <div className="flex mt-16 text-yellow-400 ">
          <img
            className="h-50 w-50 object-contain rounded-full"
            src="/my-notion-face-portrait.png"
            alt="me-image"
          />
          <div className="">
            <CommonInfo data={res} className="flex-col justify-end " />
            <SkillInfo data={res} />
            <p className="ml-3">
              안녕하세요 혁신의 한 부분이 되려고 하는 개발자 Paskal입니다.
              잘부탁드려요 흐흐
            </p>
          </div>
        </div>
  )
}

export default BaseInfo
