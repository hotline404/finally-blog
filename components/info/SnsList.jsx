"use client";
import React, { useState, useEffect } from "react";

function SnsList({ data }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e));
  }, [state]);

  const isValidSns = (url) => {
    if (url.includes("x.com")) {
      return (
        <img
          src="https://img.shields.io/badge/-x-000000?logo=x&logoColor=white"
          alt="x 로고"
          className="mb-3 ml-3 w-18 h-8"
        />
      );
    } else if (url.includes("instagram.com")) {
      return (
        <img
          src="https://img.shields.io/badge/-instagram-FF0069?logo=instagram&logoColor=white"
          alt="instagram 로고"
          className="mb-3 ml-3 w-26 h-8"
        />
      );
    }
  };
  return (
    <div className="flex flex-col mt-3 basis-1/2 min-w-0 text-yellow-400">
      <span className="flex-1">📬contacts</span>
      <div className="flex">
        {state?.sns.map((item) => {
          return (
            <a href={item} target="_blank">
              {isValidSns(item)}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SnsList;
