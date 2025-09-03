//step 1 rfce ✅
//step 2 return box ✅
//step 3 button back ✅
//step 4 make components
// step 4-1 common info (name, email, github)
// step 4-2 skill img (list > img)
// step 4-3 primary project list with link
// step 4-4 sns link list with link
// step 4-5 ...
//step 5 import components ✅
//step 6 style components
import React from "react";
import BackButton from "@/components/Button/BackButton";
import CommonInfo from "../../../components/info/CommonInfo";
import ProjectList from "../../../components/info/ProjectList";
import SkillInfo from "../../../components/info/SkillInfo";
import SnsList from "../../../components/info/SnsList";
import { getInfo } from "@/API/service";

export const dynamic = "force-dynamic";

function Info() {
  async function tryGet() {
    try {
      const res = await getInfo();
      console.log(
        "res",
        res.filter((e) => e.key === "common")
      );

      const trimedRes = {
        common: res.filter((e) => e.key === "common")[0].value,
        projects: res.filter((e) => e.key === "projects")[0].value,
        skills: res.filter((e) => e.key === "skills")[0].value,
        sns: res.filter((e) => e.key === "sns")[0].value,
      };

      return trimedRes;
    } catch (err) {
      console.error("error", err);
    }
  }

  const res = tryGet();

  return (
    <div className="fixed flex flex-col justify-center items-center inset-0 bg-black/70 z-50">
      <div className="w-[80%] justify-center ">
        <div className="flexmt-16 text-yellow-400 ">
          <img
            className="h-50 w-50 object-contain rounded-full"
            src="/my-notion-face-portrait.png"
            alt="me-image"
          />
          <div className="flex-col">
            <CommonInfo data={res} className="flex-col justify-end " />
            <SkillInfo data={res} />
            <p className="ml-3">
              안녕하세요 혁신의 한 부분이 되려고 하는 개발자 Paskal입니다.
              잘부탁드려요 흐흐
            </p>
          </div>
        </div>
          <div className="flex flex-col">
            <ProjectList data={res} />
            <SnsList data={res} />
          </div>
      </div>

      <BackButton className="[&>button]:text-yellow-300">❌</BackButton>
    </div>
  );
}

export default Info;
