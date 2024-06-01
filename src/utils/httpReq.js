import axios from 'axios';

const httpRe = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const rs = await httpRe.get(path, option);
    return rs.data;
};

export const getById = async (path, id = 1, option = {}) => {
    const rs = await httpRe.get(`${path}/${id}`, option)
    return rs.data
}

export const post = async (path, data) => {
    const rs = await httpRe.post(path, data)
    return rs.data
}

export const put = async (path, id, data) => {
    const rs = await httpRe.put(`${path}/${id}`, data)
    return rs.data
}

export const deleteById = async (path, id) => {
    const rs = await httpRe.delete(`${path}/${id}`, id)
    return rs.data
}

export const deletes = async (path, data) => {
    const rs = await httpRe.delete(path, data)
    return rs.data
}

export default httpRe;
