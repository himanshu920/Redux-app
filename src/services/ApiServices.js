import axios from 'axios';
import config from 'react-global-configuration';
export const postApi = (route, data) => {
	const postUrl = config.get('apiBaseUrl')+route;

	let headers = {
		"Accept" : 'Application/json',
		'Authorization' : 'Bearer '+localStorage.getItem('authToken'),
	}
	return axios({
		url 		: postUrl,
		method 		: 'post',
		headers 	: headers,
		data 		: data
	});
}

export const getApi = (route, data) => {
	const getUrl = config.get('apiBaseUrl')+route;

	let headers = {
		"Accept" : 'Application/json',
		'Authorization' : 'Bearer '+localStorage.getItem('authToken'),
	}
	return axios({
		url 		: getUrl,
		method 		: 'get',
		headers 	: headers,
	});
}





