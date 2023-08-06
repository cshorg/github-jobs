import { BiTimeFive, BiWorld } from "react-icons/bi"

const Card = ({ image, company, title, status, location, time }) => {
  return (
    <div className="w-[790px] bg-white h-[114px] rounded-md shadow-md flex items-center">
      <img
        className="px-[12px] max-w-[90px] max-h-[90px]"
        src={image}
        alt="logo"
      />

      <div className="flex justify-between">
        <div className="flex flex-col gap-[10px] w-[480px]">
          <div className="text-[12px] font-bold">{company}</div>
          <div className="text-[18px]">{title}</div>

          <div className="text-[12px] w-[68px] h-[28px] flex items-center justify-center  border-[1px] rounded-md font-bold">
            {status}
          </div>
        </div>
        <div className="flex items-end ">
          <div className="flex flex-row items-center gap-[27px] text-gray">
            <div className="flex gap-[7px] items-center text-[12px]">
              <BiWorld size={18} />
              {location}
            </div>
            <div className="flex gap-[7px] items-center text-[12px]">
              <BiTimeFive size={18} />
              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
