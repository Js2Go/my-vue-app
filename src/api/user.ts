import request from '../util/request'

export const getProfile = async (params: any) => {
  return await request({
    url: '/profile',
    params
  })
}
