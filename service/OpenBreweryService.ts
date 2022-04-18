import axios, { AxiosResponse } from 'axios';
import type { beverage } from '../store/user';

export default class OpenBreweryService {
  list = (): Promise<AxiosResponse<beverage>> => {
    return axios.get("https://api.openbrewerydb.org/breweries?sort=name:asc");
  };
}