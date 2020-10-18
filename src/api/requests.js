import endpoints from 'config/endpoints'
import { axiosInstance } from './axiosInstance'

export const processesGet = async (id) => {
  return axiosInstance.get(`${endpoints.process}${id}`)
}

export const processesPost = async () => {
  return axiosInstance.post(endpoints.process)
}

export const processesDelete = async (id) => {
  return axiosInstance.delete(`${endpoints.process}${id}`)
}
