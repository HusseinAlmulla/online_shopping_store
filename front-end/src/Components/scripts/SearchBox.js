import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const SearchBox = ({ onSearchChange, onRequestSearch }) => {
	let history = useHistory();
	return (
		<InputGroup className="mb-6" inline >
			<FormControl
				placeholder="What are you looking for?"
				onChange={onSearchChange}
			/>
			<InputGroup.Append>
				<Button variant="outline-secondary" onClick={() => {
					onRequestSearch();
					history.push("/products/search");
				}}>Search</Button>
			</InputGroup.Append>
		</InputGroup>
	)
}

export default SearchBox;