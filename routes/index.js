import express from 'express';

import listRouter from './list.router.js';

export default function routerApi(app) {
  const router = express.Router();
  //V1 root
  app.use('/reddit-api/v1', router);

  router.use('/reddit-posts', listRouter);
}