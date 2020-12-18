import axios from 'axios';

const dataService = {
    get: (url, options) => {
        let param = {};
        param.params = options;
        return new Promise((resolve, reject) => axios.get(url, param).then((data) => resolve(data)).catch((err) => reject(err)));
    },

    post: (url, data) => {

        return new Promise((resolve, reject) => axios.post(url, data).then((data) => resolve(data)).catch((err) => reject(err)));

    },

    put: (url, data) => {

        return new Promise((resolve, reject) => axios.put(url, data).then((data) => resolve(data)).catch((err) => reject(err)));
    },

    delete: (url, data) => {

        return new Promise((resolve, reject) => axios.delete(url, data).then((data) => resolve(data)).catch((err) => reject(err)));
    }
};

export default dataService;