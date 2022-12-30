import router from "@/router";
import axios from "axios";
import Cookies from "js-cookie";


const host = 'http://localhost';
const CODE = {
    LOGIN_TIMEOUT: 1000,
    REQUEST_SUCCESS: 0,
    REQUEST_FOBID: [500, 400, 401, 403, 404],
};

const instance = axios.create({
    baseURL: host,
    timeout: 1000,
    //withCredentials: true,
});

instance.interceptors.request.use((config) => config);//axios设置请求拦截

instance.defaults.timeout = 5000;//设置超时时长

/**axios设置响应拦截
*/
instance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            const { data } = response;
            //console.log(data);
            if (data.CODE === CODE.REQUEST_SUCCESS) {
                return data;
            } else if (CODE.REQUEST_FOBID.includes(data.code)) {
                router.push({ path: '/login' })
                Cookies.remove('HAS_LOGIN')
            }
        }
        return response.data;
    },
    async (err) => {
        const { config } = err;
        if (!config || !config.retry) return Promise.reject(err);

        config.retryCount = config.retryCount || 0;

        if (config.retryCount >= config.retry) {
            return Promise.reject(err);
        }
        config.retryCount += 1;
        const backoff = new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, config.retryDelay || 1);
        });

        await backoff;
        return await instance(config);
    },
);

export default instance;
