"use client";
import React, { useState, useEffect } from "react";

function ProjectList({ data }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    data.then((e) => setState(e));
  }, [state]);
  return (
    <div className="w-[calc(50%/2)]">
      <ol className="text-yellow-400">
        /* projects */
        {state?.projects.map((item, index) => {
          return (
            <li className="text-yellow-400" id={Math.random()}>
              <a
                href={`https://github.com/${item}`}
                target="_blank"
              >{`project link ${index + 1} : ${item}`}</a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ProjectList;
