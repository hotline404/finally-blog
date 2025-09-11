import React from "react";
import BackButton from "@/components/Button/BackButton";
import CommonInfo from "../../../components/info/CommonInfo";
import ProjectList from "../../../components/info/ProjectList";
import SkillInfo from "../../../components/info/SkillInfo";
import SnsList from "../../../components/info/SnsList";
import Modal from "@/components/common/Modal";
import { getInfo, fetchDataBaseInfo } from "@/API/service";

export const dynamic = "force-dynamic";

function Info() {
  async function tryGet() {
    try {
      const res = await fetchDataBaseInfo();
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
    <Modal>
      <div className="flex flex-col pointer-events-auto">
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
            안녕하세요 프론트엔드 개발자 Paskal입니다. 재밌게 보고 가세요!
          </p>
        </div>
      </div>
      <div className="flex mt-6 gap-1">
        <ProjectList data={res} />
        <SnsList data={res} />
      </div>
      </div>
    </Modal>
  );
}

export default Info;
