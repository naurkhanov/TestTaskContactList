const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const contacts = router.db.get('contacts');
const admins = router.db.get('admins');
const middlewares = jsonServer.defaults({
  static: './build',
});

server.use(middlewares);

server.get('/contacts', (req, res) => {
  return res.json(contacts);
});

server.use((req, res, next) => {
  res.header({ 'Access-Control-Allow-Origin': '*' });
  next();
});

server.get('/authorization/login=:login/password=:password', (req, res) => {
  const admin = admins.find((item) => item.login === req.params.login);
  const password = admin.toJSON().password;
  const login = admin.toJSON().login;
  return password === req.params.password && login === req.params.login
    ? res.json(admin.toJSON().token)
    : res.json();
});

server.use(router);
server.listen(process.env.PORT || 3005, () => {
  console.log('run JSON server');
});
