import axios, { AxiosRequestConfig } from "axios";

interface GetRequsetProps {
    url: string;
    params?: string | number;
}

const getRequset = async <T>({ url, params }: GetRequsetProps, axiosConfig?: AxiosRequestConfig): Promise<T> => {

    const requestParams: AxiosRequestConfig = {
        method: "GET",
        url,
        params
    }

    const response = await axios.request({
        ...requestParams,
        ...axiosConfig,
    });

    return response.data
};

export {getRequset}