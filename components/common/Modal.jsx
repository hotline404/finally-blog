"use client";
import BackButton from "../Button/BackButton";
import {useRouter} from 'next/navigation'


function Modal(props) {
  const router = useRouter();

  return (
    <div className="h-screen w-full">
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        onClick={() => {router.back()}}
      ></div>
      <div className="resize bg-[#EBEBEB] p-6 rounded-xl outline-[#31302B] outline-[5px] w-[80%] h-[80%]">
        {props.children}
      </div>
      <div className="fixed top-0 right-10">
        <BackButton>❌</BackButton>
      </div>
    </div>
  );
}

export default Modal;
