import { observable, action, makeObservable } from 'mobx';

class User {

  name: string | undefined;

  legalAge: boolean;

  constructor(name?: string, legalAge: boolean = false) {
    this.name = name;
    this.legalAge = legalAge
    makeObservable(this, {
      name: observable,
      legalAge: observable,
      setUser:action,
    })
  }

  public setUser(name: string, legalAge: boolean) {
    this.name = name;
    this.legalAge = legalAge;
  }

}

let userStore: User;
export function getUserstore() {
  if (!userStore) {
    userStore = new User();
  }
  return userStore;
};