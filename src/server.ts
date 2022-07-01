import Koa from 'koa'
import DummyDependencyProvider from './dependency/DummyDependencyProvider'
import ApiRouter from './routers/ApiRouter'

const getServer = () => {
  const app = new Koa()
  const dependencyProvider = new DummyDependencyProvider()
  app.use(new ApiRouter(dependencyProvider).router.routes())
  return app
}

export default getServer
