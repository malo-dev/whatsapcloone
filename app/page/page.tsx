import HeaderComponent from '@/components/headerComponent'
import Navbarofwhatsapp from '@/components/navBarComponent/Navbarofwhatsapp'
import React from 'react'

interface Props {
	
}

const page = (props: Props) => {
	return (
		<div>
			<HeaderComponent title='Whatsapp clone' />
			<Navbarofwhatsapp/>
		</div>
	)
}

export default page
