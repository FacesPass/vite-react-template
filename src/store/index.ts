import { createContext, useContext } from 'react';
import Store from './store';

// Store 列表，可存放多个子 Store
const Stores = () => ({
  Store: new Store(),
});

const createStoreContext = createContext(Stores());

// 将所有的 Store 放到 Context 中
const useStores = () => useContext(createStoreContext);

const useStore = () => useStores().Store;

export { useStore };
