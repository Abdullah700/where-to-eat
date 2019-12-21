import axios from 'axios';

export default axios.create({
    baseURL: 'https://wainnakel.com/api/v1/',
    headers: {'Access-Control-Allow-Origin': '*'}
});
