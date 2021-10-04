import axios from './axios';

let token = window.localStorage.getItem('authToken')

if(token){
	axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}
const apiV1 = axios.create({ 
	baseURL: (process.env.NODE_ENV !== 'production') ? 'http://localhost:8000/api/v1/' : '/api/v1/'
});

export default apiV1;