// 루트 페이지 크기 및 페이지 색상
import React from "react";
import MainBox from "@/components/box/MainBox";
import { mixtureStyle } from "@/components/style/mixture/mixture";
import Header from "@/components/header/Header";
import ListBox from "@/components/box/ListBox";
import Provider from "@/store/Provider.jsx";
import Dither from "../components/Dither";
const { getNotion } = require("../API/service.js");
require("dotenv").config();

//page 정보
export const dynamic = "force-dynamic";

async function run() {
  // notion api 연결 및 디버깅
  try {
    const res = await getNotion();
    await fetchDataBase();
    return res;
  } catch (error) {
    console.error("get error", error);
  }
}

function Home() {
  const homePageStyle = mixtureStyle;
  return (
    <div className={homePageStyle.base_note}>
      <div className="fixed w-full h-full">
        <Dither
          waveColor={[0, 1, 0]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <Provider data={run()} />
      <MainBox BoxAttribute={homePageStyle.page}>
        <Header />
        <ListBox />
      </MainBox>
    </div>
  );
}

export default Home;
