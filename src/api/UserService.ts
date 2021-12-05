import { IUser } from './../models/IUser';
import axios, { AxiosResponse } from 'axios';

export default class UserService {
  static async loginUser(
    user: IUser
  ): Promise<AxiosResponse<{ token: string }>> {
    return axios.post('/testingusers/login', user, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
  }

  static async registerUser(user: IUser): Promise<AxiosResponse> {
    return axios.post('/testingusers/registration', user, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
  }
}
