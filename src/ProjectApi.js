import axios from 'axios';

export default axios.create({
    baseURL: 'https://kbomeisl.azurewebsites.net/api'
});