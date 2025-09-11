import React from "react";
import { getPost, fetchDataBase } from "@/API/service";
import BackButton from "@/components/Button/BackButton";
import Article from "@/components/common/Article";
import Modal from "@/components/common/Modal";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function Post({ params }) {
  async function tryGet(id) {
    try {
      const res = await getPost(id);
      const testRes = await fetchDataBase();
      console.log("* r e s   i n   p o s t   m o d a l *", testRes);
      return res;
    } catch (error) {
      console.error("e r r o r   i n   P o s t   m o d a l", error);
    }
  }

  const result = tryGet(params.id).then((data) => {
    return data;
  });

  return (
    <Modal>
      <div className="resize absolute bg-[#EBEBEB] p-6 rounded-xl outline-[#31302B] outline-[5px] w-full h-full pointer-events-auto">
        <h2 className="italic">/* P O S T P A G E */</h2>
        <div className="h-[90%]">
          <Article data={result} />
        </div>
      </div>
    </Modal>
  );
}

export default Post;
