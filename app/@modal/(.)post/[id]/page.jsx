import React from "react";
import { getPost } from "@/API/service";
import BackButton from "@/components/Button/BackButton";
import Article from "@/components/common/Article";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function Post({ params }) {
  async function tryGet(id) {
    try {
      const res = await getPost(id);
      console.log("* r e s   i n   p o s t   m o d a l *", res);
      return res;
    } catch (error) {
      console.error("e r r o r   i n   P o s t   m o d a l", error);
    }
  }

  const result = tryGet(params.id).then((data) => {
    return data;
  });

  return (
    <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
      <div className="resize bg-[#FAF4E6] p-6 rounded-xl outline-[#31302B] outline-[5px] w-[80%] h-[80%]">
        <h2 className="italic">/* P O S T P A G E */</h2>
        <div className="h-[90%]">
          <Article data={result} />
          <BackButton className="italic mt-4 text-lg [&>button]:text-gray-500 hover:cursor-pointer">
            C L O S E
          </BackButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
