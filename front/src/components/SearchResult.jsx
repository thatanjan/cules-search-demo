import { nanoid } from 'nanoid'

import {
	Box,
	Image,
	chakra,
	Flex,
	Text,
	HStack,
	AspectRatio,
	Grid,
	VStack,
} from '@chakra-ui/react'

const SearchResult = ({ searchResults, onClose }) => {
	return (
		<Grid
			sx={{
				gridRowGap: '1rem',
			}}
		>
			{searchResults.map(({ title, plot, poster }) => (
				<Box
					key={nanoid()}
					_hover={{
						background: 'teal.500',
						color: 'white',
						cursor: 'pointer',
					}}
					p='.5rem 1rem'
				>
					<Grid
						sx={{
							gridTemplateColumns: '50px 1fr',
							gridColumnGap: '1rem',
							height: '70px',
							overflow: 'hidden',
						}}
					>
						<Box>
							<Image
								src={poster}
								alt=''
								sx={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
							/>
						</Box>
						<VStack align='start'>
							<Text noOfLines={1}>{title}</Text>
							<Text noOfLines={1}>{plot}</Text>
						</VStack>
					</Grid>
				</Box>
			))}
		</Grid>
	)
}

export default SearchResult
