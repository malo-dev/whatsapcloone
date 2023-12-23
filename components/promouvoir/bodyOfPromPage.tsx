import React from 'react'
import { styleProm } from './librairieProm';
import FirstCompOfProm from './firstCompOfProm';

interface Props {
	
}

const BodyOfPromPage = (props: Props) => {
	return <div className={`${styleProm}`}> <FirstCompOfProm/></div>;
}

export default BodyOfPromPage
