import axios, { AxiosRequestConfig } from "axios";

interface GetRequsetProps {
    url: string;
    params?: string | number;
}

interface PostRequsetProps {
    url: string;
    params?: string | number;
    body: any;
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


const postRequset = async <T>({ url, params, body }: PostRequsetProps, axiosConfig?: AxiosRequestConfig): Promise<T> => {

    const requestParams: AxiosRequestConfig = {
        method: "POST",
        data: body,
        url,
        params
    }

    const response = await axios.request({
        ...requestParams,
        ...axiosConfig,
    });

    console.log(response)


    return response.data
};

export { getRequset, postRequset }