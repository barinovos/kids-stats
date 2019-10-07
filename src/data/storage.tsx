const STORAGE_KEY = "baby_stats_storage"

export const getData = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")

export const setData = (data = {}) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
