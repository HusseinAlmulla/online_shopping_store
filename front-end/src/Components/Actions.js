import * as CONSTANTS from './Constants.js';

export const setSearchFieldAction = (text) => {
	return ({
		type: CONSTANTS.CHANGE_SEARCH_FIELD,
		payload: text
	})

}

export const requestSearchItemsAction = (keyword) => (dispatch) => {
	dispatch({
		type: CONSTANTS.REQUEST_ITEMS_PENDING,
	});

	fetch('http://localhost:3000/products/search?q=' + keyword, {
		method: 'get',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json())
		.then(data => {
			if (data[0].id) {
				dispatch(requestSuceed(data));
			}
			else if (data[0].error)
				dispatch(requestFailed(data[0].error));
		}).catch(err => dispatch(requestFailed(err)))
}

export const requestCategoryItemsAction = (main, sub) => (dispatch) => {

	dispatch({
		type: CONSTANTS.REQUEST_ITEMS_PENDING,
	});

	fetch('http://localhost:3000/products/category', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			main: main,
			sub: sub,
		})
	}).then(response => response.json())
		.then(data => {
			if (data[0].id) {
				dispatch(requestSuceed(data));
			}
			else if (data[0].error)
				dispatch(requestFailed(data[0].error));
		}).catch(err => dispatch(requestFailed(err)))
}

const requestSuceed = (data) => ({
	type: CONSTANTS.REQUEST_ITEMS_SUCCESS,
	payload: data
})

const requestFailed = (error) => ({
	type: CONSTANTS.REQUEST_ITEMS_FAILED,
	payload: error
})

export const requestUserLoginAction = (email, password) => (dispatch) => {

	dispatch({
		type: CONSTANTS.REQUEST_ITEMS_PENDING,
	});

	fetch('http://localhost:3000/login', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: email,
			password: password,
		})
	}).then(response => response.json())
		.then(user => {
			if (user[0].id) {
				dispatch(requestSuceed(user));
			}
			else if (user[0].error)
				dispatch(requestFailed(user[0].error));
		}).catch(err => dispatch(requestFailed(err)))
}