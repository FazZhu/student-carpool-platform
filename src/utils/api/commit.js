import request from '@/utils/request'

export const commitmentSubmit=(data)=>{
    return request.post('/api/commitment/submit',data);
}
export const getCommitments=(data)=>{
    return request.post('/api/commitment/getMany',data);
}
export const getCommitmentData=(data)=>{
    return request.post('/api/commitment/detail',data);
}
export const joinCommitment=(data)=>{
    return request.post('/api/commitment/join',data);
}
export const quitCommitment=(data)=>{
    return request.post('/api/commitment/quit',data);
}