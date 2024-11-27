/* eslint-disable react/prop-types */
import { LeftArrow, RightArrow } from "../UI/SVGs";

export default function ColapseNavBar({ handleSideBarWidth, sideBarWidth }) {
  return (
    <button
      onClick={handleSideBarWidth}
      className="absolute top-1 left-5 w-7 h-7 hidden lg:flex justify-center items-center rounded-full border border-dashed border-gray-50 bg-black"
    >
      {sideBarWidth ? <RightArrow /> : <LeftArrow />}
    </button>
  );
}
