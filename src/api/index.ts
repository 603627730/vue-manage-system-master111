import request from '../utils/request';
import {reactive} from "vue";

export const fetchData = () => {
    return request({
        url: 'http://localhost:8080/all',
        method: 'get'
    });
};
export const searchData = (query : any) => {
    return request({
        url: 'http://localhost:8080/search',
        method: 'post',
        data : query
    });
};

