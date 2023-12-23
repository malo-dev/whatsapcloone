import React from 'react'
import { MdOutlineCases } from "react-icons/md";
import { styleHeaderComponent } from '../headerCompoen/librairie';
const dataNavbar = [
  {
    icon: <MdOutlineCases />,
    label: "",
    numberofmessage: "",
  },
  {
    icon: "",
    label: "Discussions",
    numberofmessage: 21,
  },
  {
    icon: "",
    label: "Actus",
    numberofmessage: "",
  },
  {
    icon: "",
    label: "Appels",
    numberofmessage: "",
  },
];

const Navbarofwhatsapp = () => {
	return (
    <div className={`${styleHeaderComponent.styleHeader} opacity-80 text-[20px] m-3 font-bold`}>
      {dataNavbar.map((items, keyindex) => {
        return (
          <div
            key={keyindex}
            className="active:text-green-500"
          >
            {items.icon}{" "}
            <li
              className={`list-none ${styleHeaderComponent.styleHeader} opacity-70 text-[20px]`}
            >
              <ul>{items.label}</ul>
              <ul>{items.numberofmessage}</ul>
            </li>
          </div>
        );
      })}
    </div>
  );
}
export default Navbarofwhatsapp
