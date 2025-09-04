"use client";
import React, { useState, useEffect } from "react";

function SnsList({ data }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e));
  }, [state]);

  const isValidSns = (url) => {
    if (url.includes("x.com")) {
      return "트위터";
    } else if (url.includes("instagram.com")) {
      return "인스타그램";
    }
  };
  return (
    <div className="ml-3">
      <ol className="text-yellow-400">
        /* 📬contacts */
        {state?.sns.map((item) => {
          return (
            <li id={Math.random()}>
              <a href={item} target="_blank">
                {isValidSns(item)}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default SnsList;
