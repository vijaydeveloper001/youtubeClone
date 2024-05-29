import axios, {AxiosResponse} from 'axios';
import Toast from 'react-native-toast-message';
const create = (url: string, method: string) => {
  return axios.create({
    baseURL: url,
    timeout: 10000,
    method: method,
  });
};

export const useFetch = async (url: string, method: string): Promise<any> => {
  console.log(url, method, 'hiii');
  try {
    const instance = create(url, method);
    const response = await instance();

    if (response.status === 200) {
      Toast.show({
        type:'success',
        text1: 'Api response sucsssfully',
      })
      return response.data; // Assuming you want to return the data
    } else {
      Toast.show({
        type:'error',
        text1: 'Axios error network error',
      
      })
      console.log(response.status, 'error');
      throw new Error('Request failed with status ' + response.status);
    }
  } catch (error) {
    console.error('Error in useFetch:', error);
    throw error; // Re-throwing the error for the caller to handle
  }
};
