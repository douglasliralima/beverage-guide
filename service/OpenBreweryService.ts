import axios, { AxiosResponse } from 'axios';

export default class OpenBreweryService {
  list = (): Promise<AxiosResponse<any>> => {
    return axios.get("https://api.openbrewerydb.org/breweries?sort=name:asc");
  };
}