import axios, {AxiosResponse} from 'axios';

const create = (url: string, method: string) => {
  return axios.create({
    baseURL: url,
    timeout: 5000,
    method: method,
  });
};

export const useFetch = async (url: string, method: string): Promise<any> => {
  console.log(url, method, 'hiii');
  try {
    const instance = create(url, method);
    const response = await instance();

    if (response.status === 200) {
      return response.data; // Assuming you want to return the data
    } else {
      console.log(response.status, 'error');
      throw new Error('Request failed with status ' + response.status);
    }
  } catch (error) {
    console.error('Error in useFetch:', error);
    throw error; // Re-throwing the error for the caller to handle
  }
};
