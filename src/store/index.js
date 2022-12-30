import { createPinia } from 'pinia';
const store = createPinia();

export { store };

export default store;
export * from './modules/user'
