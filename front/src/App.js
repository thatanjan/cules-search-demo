import React, { useEffect } from 'react'

import { Grid, Heading, Box } from '@chakra-ui/react'

import Search from './components/Search'

const App = () => {
	console.log()

	return (
		<Box overflow='hidden' h='100vh' maxWidth='100vw' maxHeight='100vh'>
			<Heading align='center' as='h1' fontSize='5xl' mt='10rem'>
				Cules Search
			</Heading>

			<Search />
		</Box>
	)
}

export default App
