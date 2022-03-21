import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Box, chakra, Flex, Center } from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

import SearchResult from './SearchResult'

const Search = () => {
	const [queryText, setQueryText] = useState('')

	const [searchResults, setSearchResults] = useState([])

	const handleChange = (e) => setQueryText(e.target.value)

	useEffect(() => {
		if (!queryText) {
			setSearchResults([])
			return false
		}

		;(async () => {
			const url = `${process.env.REACT_APP_API_URL}/autosearch`

			const { data } = await axios.get(url, {
				params: { title: queryText },
			})

			setSearchResults(data)
		})()

		console.log(queryText)
	}, [queryText])

	return (
		<Box
			rounded='lg'
			overflow='hidden'
			bg='transparent'
			shadow='lg'
			maxW='600px'
			width='90%'
			mx='auto'
			mt='1rem'
		>
			<Flex pos='relative' align='stretch'>
				<chakra.input
					autoComplete='off'
					autoCorrect='off'
					spellCheck='false'
					maxLength={64}
					sx={{
						w: '100%',
						h: '68px',
						pl: '68px',
						fontWeight: 'medium',
						outline: 0,
					}}
					placeholder='Search blogs'
					value={queryText}
					onChange={handleChange}
				/>
				<Center pos='absolute' left={7} h='68px'>
					<SearchIcon color='teal.500' boxSize='20px' />
				</Center>
			</Flex>

			{searchResults.length > 0 && (
				<Box maxH='70vh' p='0' overflowY='auto'>
					<Box
						sx={{
							px: 4,
						}}
					>
						<Box as='ul' borderTopWidth='1px' pt={2} pb={4}>
							<SearchResult searchResults={searchResults} />
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default Search
