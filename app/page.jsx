// 루트 페이지 크기 및 페이지 색상
import React from "react";
import MainBox from "@/components/box/MainBox";
import { mixtureStyle } from "@/components/style/mixture/mixture";
import Header from "@/components/header/Header";
import ListBox from "@/components/box/ListBox";
import Provider from "@/store/Provider.jsx";
const { getNotion } = require("../API/service.js");
require("dotenv").config();

//page 정보
export const dynamic = "force-dynamic";
export const metadata = { title: "* p a s k a l ' s   b l o g *", description: "루트 페이지" };

async function run() {
  // notion api 연결 및 디버깅
  try {
    const res = await getNotion();
    return res;
  } catch (error) {
    console.error("get error", error);
  }
}

function Home() {
  const homePageStyle = mixtureStyle;
  return (
    <div className={homePageStyle.base_note}>
      <Provider data={run()}/>
      <MainBox BoxAttribute={homePageStyle.page}>
        <Header />
        <ListBox />
      </MainBox>
    </div>
  );
}

export default Home;
