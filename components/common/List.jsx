"use client";
import React from "react";
import { mixtureStyle } from "../style/mixture/mixture";
import { useRouter } from "next/navigation";

//리스트 캡슐화하기
//x축 800px부터는 미디어 쿼리 적용하기
//클라이언트
function List(props) {
  const router = useRouter();

  const onClickHandler = (id) => {
    router.push(`/post/${id}`);
  };

  return (
    <ol className={mixtureStyle.postList}>
      {props.lists.map((list) => {
        return (
          <li key={list.id} onClick={() => onClickHandler(list.id)}>
            <span>{list.icon}</span>
            <span>{list.date.date.start}</span>
            <h1>{list.title}</h1>
          </li>
        );
      })}
    </ol>
  );
}

export default List;
