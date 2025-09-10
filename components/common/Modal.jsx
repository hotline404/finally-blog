"use client";
import BackButton from "../Button/BackButton";
import { useRouter } from "next/navigation";

function Modal(props) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 h-screen w-full z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black/70 h-screen w-full pointer-events-auto"
        onClick={() => {
          router.back();
        }}
      ></div>
      
        {props.children}
      <div className="fixed top-0 right-10">
        <BackButton>❌</BackButton>
      </div>
    </div>
  );
}

export default Modal;
