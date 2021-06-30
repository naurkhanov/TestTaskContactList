const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const contacts = router.db.get('contacts');
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

server.use(router);
server.listen(process.env.PORT || 3005, () => {
  console.log('run JSON server');
});
