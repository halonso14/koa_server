import Router from "koa-router";

export default class ApiRouter {
  router: any;
  constructor() {
    this.router = new Router();
    this.router.get(
      '/version',
      async (ctx: any, next: () => Promise<any>): Promise<void> => {
        ctx.body = { version: 'v1.0.0' };
      },
    );
  }
}