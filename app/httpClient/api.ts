import { httpPost, httpGet } from "./index";
import { GenericObject } from "./model";

export const samplePostRequest = (data: any): Promise<GenericObject> =>
  httpPost("/login", data);
export const sampleGetRequest = (): Promise<GenericObject> => httpGet("/login");

export default {
  addWord: "/word",
  getWords: "/word",
  deleteWord: "/word",
  updateWord: "/word",
};
