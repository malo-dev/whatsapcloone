import React from 'react'
import { AiFillNotification } from "react-icons/ai";

interface Props {
	
}

const FirstCompOfProm = (props: Props) => {
	return (
    <div className="flex flex-col gap-5 ">
      <p className="opacity-60">Déveloper votre entreprise</p>
      <div className=" ml-2 shadow-lg bg-[#636461f6] rounded-lg  p-4">
        <div className="flex flex-row justify-center gap-3">
          <div>
            <AiFillNotification size={50} />
          </div>
          <p className="opacity-50">
            {
              " En utilisant nos publicités whatsapp En utilisant nos publicités whatsapp En utilisant nos publicités whatsapp "
            }
          </p>
        </div>
        <button className="text-center bg-[#04AD9C] w-auto p-2 font-bold rounded-full mt-2">
          Developer votre audiance
        </button>
      </div>
    </div>
  );
}

export default FirstCompOfProm
