module.exports = function(app) {
  //Express 기반이라서 Express 형태로 사용하면 된다.
  app.get('/ping', function(req, res) {
    res.send('pong');
  });

  const api = app.loopback.Router();
  const user = app.loopback.Router();
  api.get('/', (req, res, next) => {
    res.send('this api')
  })

  api.get('/get', (req, res, next) => {
    res.send('this get api')
  })

  user.get('/', (req, res, next) => {
    res.send('this user')
  })

  user.get('/get', (req, res, next) => {
    res.send('this get user')
  })


  app.use('/user', user)
  app.use('/api', api);
}
