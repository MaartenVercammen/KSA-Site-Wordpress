import axios from '../axios';
import { user } from '../types';

const getAllUsers = () => axios.get<Array<user>>('/user');

const createUser = (user: user) => axios.post<Response>('/user/lid', user);

const deleteUser = (id: number) => axios.delete<Response>('user?id=' + id);

const updateUser = (user: user) => axios.put<Response>('user', user);

const getUserByID = (id: number) => axios.get<user>('/user/' + id)

const UserService = {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    getUserByID,
};

export default UserService;