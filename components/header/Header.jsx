"use client";
import { mixtureStyle } from "../style/mixture/mixture";
import TitleBox from "../box/TitleBox";
import SearchBox from "../box/SearchBox";
import Input from "../common/Input";
import submitForm from "../serverAction/submitForm";
import useStore from "@/store/state";



export default function Header() {
  const {setSearchedData} = useStore();

  async function useFormState (query) {
    const res = await submitForm(query)
    setSearchedData(res);
  }

  return (
    <div className={mixtureStyle.header}>
      <TitleBox>* P a s k a l *</TitleBox>
      <SearchBox>
        <form className="w-[100%] flex justify-end" action={useFormState}>
          <Input
            className="outline-[#31302B]"
            input={{
              name: "검색",
              type: "search",
              id: "search",
              placeholder: "search...",
            }}
          />
          <button className="hidden" type="submit">
            검색
          </button>
        </form>
      </SearchBox>
    </div>
  );
}
