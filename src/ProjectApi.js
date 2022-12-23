import axios from 'axios';

export default axios.create({
    baseURL: 'http://kbomeisl.azurewebsites.net/api'
});