/* eslint-disable react/prop-types */
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      style={generateStyle(type)}
      onClick={handleClick}
      className={` px-2 py-1.5 flex-1 rounded-md ${customStyles} middle none center mr-3 rounded-lg  py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md ${snap.color}/20 transition-all hover:shadow-lg hover:${snap.color}/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
      data-ripple-light="true"
    >
      {title}
    </button>
  );
};

export default CustomButton;
