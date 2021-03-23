import axios from 'axios';
const locationIp = 'http://localhost:7001';

const axiosRequest = axios.create({
    baseURL: locationIp,
    timeout: 5000,
});

export function userRegister(url: string, data: any) {
    axiosRequest.post(url, data);
}
