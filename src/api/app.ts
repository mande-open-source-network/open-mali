import { Hono } from 'hono';

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  return c.json({
    name: 'Open Mali Administrative API',
    status: 'ok',
  });
});

app.get('/regions', (c) => {
  return c.json({
    data: [],
    message: 'Administrative data has not been imported yet.',
  });
});

app.get('/regions/:code/cercles', (c) => {
  return c.json({
    regionCode: c.req.param('code'),
    data: [],
  });
});

app.get('/cercles/:code/communes', (c) => {
  return c.json({
    cercleCode: c.req.param('code'),
    data: [],
  });
});

app.get('/communes/:code/villages', (c) => {
  return c.json({
    communeCode: c.req.param('code'),
    data: [],
  });
});

export default app;