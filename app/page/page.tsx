import React from 'react'
import NavigationLayout from '../Layout/headerAndNavigationLayout/layout'
import BodyOfPromPage from '@/components/promouvoir/bodyOfPromPage'
const page = () => {
	return (
		<div>
			<NavigationLayout>
				<BodyOfPromPage/>
			</NavigationLayout>
		</div>
	)
}

export default page
