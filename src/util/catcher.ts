import { Notify } from 'vant'

interface ReturnType {
  message: string
  data: any
}

const handleError = async (cb: (...arg: any) => ReturnType, ...args: any) => {
  try {
    const data = await cb(...args)
    Notify({
      type: 'success',
      message: data.message || '成功'
    })
    return data.data
  } catch (err) {
    Notify({
      type: 'danger',
      message: err.message || 'Error'
    })
  }
}

export default handleError
