import { makeAutoObservable } from 'mobx';
import { DEFAULT_STATE } from './state';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  private state = DEFAULT_STATE;
}

export default Store;
