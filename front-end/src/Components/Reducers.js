import * as CONSTANTS from './Constants.js';

const initialStateSearch = {
	searchField: ''
}

export const searchItemsReducer = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CONSTANTS.CHANGE_SEARCH_FIELD:
			return { ...state, searchField: action.payload };
		default:
			return state
	}
}

const intialItemsState = {
	Items: [],
	isPending: true,
	error: ''
}

export const requestSearchItemsReducer = (state = intialItemsState, action = {}) => {
	switch (action.type) {
		case CONSTANTS.REQUEST_ITEMS_PENDING:
			return { ...state, isPending: true };
		case CONSTANTS.REQUEST_ITEMS_SUCCESS:
			return { ...state, items: action.payload, isPending: false };
		case CONSTANTS.REQUEST_ITEMS_FAILED:
			return { ...state, error: action.payload, isPending: false };
		default:
			return state;
	}
}