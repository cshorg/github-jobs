import { BiWorld } from "react-icons/bi"

const Filter = () => {
  return (
    <div className="w-[380px]">
      <div className="text-dark_blue">
        <input type="radio" />
        Full time
      </div>
      <div className="mt-[30px]">
        <label className="font-bold text-gray">Location</label>
        <div className="relative mt-[14px]">
          <div className="absolute top-[15px] left-[15px] text-gray">
            <BiWorld size={18} />
          </div>

          <input
            type="text"
            placeholder="City, state, zip code or country"
            className="w-full h-[48px] rounded-md text-[12px] pl-[45px] shadow-md"
          />
        </div>
      </div>
      <div className="mt-[24px] text-dark_blue">
        <ul className="flex flex-col gap-[15px]">
          <li className="flex items-center gap-[10px]">
            <input type="radio" />
            London
          </li>
          <li className="flex items-center gap-[10px]">
            <input type="radio" />
            Amsterdam
          </li>
          <li className="flex items-center gap-[10px]">
            <input type="radio" />
            New York
          </li>
          <li className="flex items-center gap-[10px]">
            <input type="radio" />
            Berlin
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Filter
