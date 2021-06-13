import { Storage } from "@ionic/storage";

export const openStorage = async (store: Storage) => {
  await store.create();
}
export const getDataFromStore = async (store: Storage, param: string) => {
  return await store.get(param);
}

export const putDataToStore = async (store: Storage, label: string, data: any) => {
  await store.set(label, data);
}