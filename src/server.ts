import Koa from 'koa';
import ApiRouter from "./routers/ApiRouter";

const getServer = () => {
  const app = new Koa();
  app.use(new ApiRouter().router.routes());
  return app;
}

export default getServer;