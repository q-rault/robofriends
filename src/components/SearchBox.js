const SearchBox = ({searchChange}) => {
	return (
		<input
		className="black pa2 w-40 ma2 ba bw2 br2 b--light-green bg-lightest-blue tc"
		type="search"
		placeholder='search robots here'
		onChange={searchChange}
		/>
		)
} 

export default SearchBox;