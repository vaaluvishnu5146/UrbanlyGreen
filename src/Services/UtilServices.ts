export const getDataFromStore = (param: string) => {
  return localStorage.getItem(param);
}

export const putDataToStore = (label: string, data: any) => {
  localStorage.setItem(label, JSON.stringify(data));
}