import request from '@/utils/request'

export const systemLogin = (data)=>{
    return request.post('/api/user/login',data);
}
export const systemLogout = ()=>{
    return request.post('/api/user/logout');
}

// export const systemLogout = ()=>{
//     return request.post('/user/logout');
// }