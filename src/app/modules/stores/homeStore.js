import { observable, action } from 'mobx';

import customAxios from 'src/app/framework/customAxios';
import { getUrl } from 'src/app/framework/url';

const api = {
  fetch: (params) => customAxios.get(getUrl('api'))
};

class Store {
  @observable
  title = 'home title';
}

const store = new Store();

export default store;
