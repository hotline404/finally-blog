"use client";
import BackButton from "../Button/BackButton";
import {useRouter} from 'next/navigation'


function Modal(props) {
  const router = useRouter();

  return (
    <div className="h-screen w-full">
      <div
        className="fixed bg-black/70 h-screen w-full z-50"
        onClick={() => {router.back()}}
      ></div>
        {props.children}
      <div className="fixed top-0 right-10">
        <BackButton>❌</BackButton>
      </div>
    </div>
  );
}

export default Modal;
