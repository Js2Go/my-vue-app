const http = require('http')

const PORT = 5000

const data = {
  message: '数据获取成功',
  data: [
    {
      name: 'mazi',
      sex: 'male'
    },
    {
      name: 'xh',
      sex: 'female'
    }
  ]
}

http.createServer((req, res) => {
  console.log(req.headers)
  res.setHeader('content-type', 'application/json; charset=UTF-8')
  setTimeout(() => {
    res.end(JSON.stringify(data))
  }, 2000)
}).listen(PORT, () => {
  console.log(`Server listening ${PORT}`)
})
