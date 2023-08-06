import { MdWorkOutline } from "react-icons/md"

const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-white w-[790px] h-[55px] rounded-md absolute z-20 top-[42px] left-[205px] outline-none pl-[42px] text-[12px]"
        placeholder="Title, companies, expertise or benefits"
      />
      <div className="absolute top-[59px] left-[221px] z-20 text-gray">
        <MdWorkOutline size={18} />
      </div>
      <button className="absolute bg-blue z-40 w-[146px] h-[47px] rounded-md text-white top-[46px] left-[845px] hover:opacity-90">
        Search
      </button>
      <img className="z-10 absolute" src="/backgroundImg.png" alt="banner" />
    </div>
  )
}

export default Search
