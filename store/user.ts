import { observable, action, makeObservable } from 'mobx';

interface beverage extends Object {
  id: number,
  name: string,
  brewery_type: string,
  street: string,
  address_2: any,
  address_3: any,
  city: string,
  state: string,
  county_province: any,
  postal_code: string,
  country: string,
  longitude: string,
  latitude: string,
  phone: string,
  website_url: string,
  updated_at: string,
  created_at: string
}

class User {

  name: string;

  legalAge: boolean;

  beverages?: Array<beverage>;

  constructor(name: string, legalAge: boolean) {
    this.name = name;
    this.legalAge = legalAge
    this.beverages = []
    makeObservable(this, {
      name: observable,
      legalAge: observable,
      beverages: observable,
      setName:action,
      setLegalAge:action,
      setBeverages:action
    })
  }

  public setName(name:string) {
    this.name = name;
  }

  public setLegalAge(legalAge:boolean) {
    this.legalAge = legalAge;
  }

  public setBeverages(beverages:Array<Object>){
    this.beverages = beverages;
  }

}

let userStore: User;
export function getUserstore(name: string = "", legalAge: boolean = false) {
  if (!userStore) {
    userStore = new User(name, legalAge);
  }
  return userStore;
};