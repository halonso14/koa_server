import Router from 'koa-router'
import { IDependencyProvider } from '../dependency/IDependencyProvider'
import { KEY_WINDOWS_SERVICE } from '../dependency/types'

export default class ApiRouter {
  dependencyProvider: IDependencyProvider
  router: any
  constructor (dependencyProvider: IDependencyProvider) {
    this.dependencyProvider = dependencyProvider
    this.router = new Router()

    this.router.get(
      '/version',
      async (ctx: any, next: () => Promise<any>): Promise<void> => {
        const windowsService = this.dependencyProvider.get(KEY_WINDOWS_SERVICE)
        windowsService.start({
          name: 'service_A',
          key: 'valid_key'
        })
        ctx.body = { version: 'v1.0.0' }
      }
    )
  }
}
