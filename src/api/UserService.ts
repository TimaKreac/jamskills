import axios, { AxiosResponse } from 'axios';

export default class UserService {
  static async loginUser(
    email: string,
    password: string
  ): Promise<AxiosResponse<{ token: string }>> {
    return axios.post(
      '/testingusers/login',
      {
        email,
        password,
      },
      {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      }
    );
  }
}
