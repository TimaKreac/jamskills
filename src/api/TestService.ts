import {
  ITestItem,
  IHolAnswer,
  IGatbAnswer,
  IUskAnswer,
} from './../models/ITestItem';
import { ITest } from './../models/ITest';
import axios, { AxiosResponse } from 'axios';

export default class TestService {
  static async getTest(id: string): Promise<AxiosResponse<ITestItem[]>> {
    return axios.get(`/testingusers/setquizzes/${id}`, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
  }
  static async getTests(): Promise<AxiosResponse<ITest[]>> {
    return axios.get('/testingusers/setquizzes', {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
  }
  static async sendHolAnswers(
    id: string,
    answers: IHolAnswer[]
  ): Promise<AxiosResponse> {
    return axios.post(`/testingusers/setquizzes/${id}/hol/answers`, answers, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
  }
  static async sendUskAnswers(
    id: string,
    answers: IUskAnswer[]
  ): Promise<AxiosResponse> {
    return axios.post(`/testingusers/setquizzes/${id}/usk/answers`, answers, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    });
  }
  static async sendGatbAnswers(
    id: string,
    answers: IGatbAnswer
  ): Promise<AxiosResponse> {
    return axios.post(
      `/testingusers/setquizzes/${id}/gatb_5/answers`,
      answers,
      {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        },
      }
    );
  }
}
