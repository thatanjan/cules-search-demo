import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	chakra,
	Flex,
	Center,
	useColorMode,
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

import SearchResult from './SearchResult'

const Search = ({ onClose, isOpen }) => {
	const [queryText, setQueryText] = useState('')

	const [searchResults, setSearchResults] = useState([])

	const { colorMode } = useColorMode()

	const backgroundColor = {
		light: 'white',
		dark: 'gray.700',
	}

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
			// console.log(data)
		})()
	}, [queryText])

	return (
		<Box pos='relative' maxW='500px' m='0 auto'>
			<Flex pos='relative' zIndex='10' align='center' mt='2rem' h='4rem'>
				<chakra.input
					autoComplete='off'
					autoCorrect='off'
					spellCheck='false'
					sx={{
						w: '100%',
						pl: '68px',
						h: '100%',
						fontWeight: 'medium',
						outline: 0,
						borderRadius: '5rem',
						bg: backgroundColor[colorMode],
					}}
					placeholder='Search blogs'
					value={queryText}
					onChange={handleChange}
				/>
				<Center pos='absolute' left={7} h='68px'>
					<SearchIcon color='teal.500' boxSize='20px' />
				</Center>
			</Flex>

			{queryText && (
				<Box
					sx={{
						bg: backgroundColor[colorMode],
						pos: 'absolute',
						w: '100%',
						top: '50%',
						left: 0,
						pt: '2rem',
						px: '1rem',
					}}
				>
					<Box
						sx={{
							maxH: '30rem',
							overflowY: 'auto',
							borderTop: '1px solid white',
						}}
					>
						<SearchResult searchResults={searchResults} />
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default Search
