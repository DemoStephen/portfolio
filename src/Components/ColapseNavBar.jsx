/* eslint-disable react/prop-types */
import { LeftArrow, RightArrow } from "../UI/SVGs";

export default function ColapseNavBar({ handleSideBarWidth, sideBarWidth }) {
  return (
    <button
      onClick={handleSideBarWidth}
      className="w-6 h-6  hidden lg:flex justify-center items-center rounded-full border border-gray-50 absolute top-10 -right-3 bg-black"
    >
      {sideBarWidth ? <RightArrow /> : <LeftArrow />}
    </button>
  );
}
