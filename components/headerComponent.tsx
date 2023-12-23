import React from 'react'
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi"
import { styleHeaderComponent } from './headerCompoen/librairie';
interface Props {
	title: string,	
}

const HeaderComponent = (props: Props) => {
	return (
    <header className={`${styleHeaderComponent.styleHeader} m-6`}>
      <p className=''>{props.title}</p>
      <div className={`${styleHeaderComponent.styleHeader} gap-2 `}>
        <IoCameraOutline size={25}  />
        <HiOutlineDotsVertical size={25} />
      </div>
    </header>
  );
}

export default HeaderComponent
