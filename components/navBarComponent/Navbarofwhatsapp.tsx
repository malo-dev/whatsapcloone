import React from 'react'
import { MdOutlineCases } from "react-icons/md";
import { styleHeaderComponent } from '../headerCompoen/librairie';
import { CallbackNavFunc } from './librairieFunc';
const dataNavbar = [
  {
    icon: <MdOutlineCases />,
    label: "",
    numberofmessage: "",
  },
  {
    icon: "",
    label: "Discussions",
    numberofmessage: "",
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

const Navbarofwhatsapp = (callableFunc : any) => {
	return (
    <div className={`${styleHeaderComponent.styleHeader} opacity-80 text-[20px] mt-6 font-bold`}>
      {dataNavbar.map((items, keyindex) => {
        return (
          <div key={keyindex} className="">
            {items.icon}{" "}
            <li
              className={`list-none ${styleHeaderComponent.styleHeader} cursor-pointer  hover:text-[#0CA996] opacity-70 text-[20px]`}
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
