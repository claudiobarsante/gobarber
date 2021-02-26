import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

// apiClient.interceptors.request.use(async (config) => {
//     try {
//       const userData = await SecureStore.getItemAsync("userData");

//       if (userData) {
//         const { token } = JSON.parse(userData);
//         config.headers.Authorization = `Bearer ${token}`;
//       }

//       return config;
//     } catch (error) {
//       return;
//     }
//   });
export default apiClient;
