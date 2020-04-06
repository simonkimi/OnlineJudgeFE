import axios from 'axios';
import qs from 'qs';

const server = axios.create({
    baseURL:'http://127.0.0.1:8000/',
});

server.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';


function stringify(data) {
    let d = [];
    Object.keys(data).forEach(key => {
        d.push(`${key}=${data[key]}`);
    });
    return `?${d.join('&')}`;
}

function ajax(url, method, options) {
    let { params = {}, data = {} } = options !== undefined ? options : {};
    if (Object.keys(params).length !== 0) {
        url += stringify(params);
    }
    return new Promise((resolve, reject) => {
        server({
            url,
            method,
            params: {},
            data: qs.stringify(data)
        })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    resolve(res.data);
                } else {
                    reject(res);
                }
            }, res => {
                reject(res);
            })
            .catch(e => {
                reject(e);
            });
    });
}

export default {
    async getProblemList() {
        return ajax('problems/', 'get')
    }
}