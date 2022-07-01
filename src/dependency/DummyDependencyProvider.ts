import DummyWindowsService from '../services/windows_service/DummyWindowsService'
import { IDependencyProvider } from './IDependencyProvider'
import { KEY_WINDOWS_SERVICE } from './types'

export default class DummyDependencyProvider implements IDependencyProvider {
  private objects: any = {}

  constructor () {
    this.set(KEY_WINDOWS_SERVICE, new DummyWindowsService())
  }

  set (key: string, obj: any): void {
    this.objects[key] = obj
  }

  get (key: string): any {
    if (key in this.objects) {
      return this.objects[key]
    } else {
      throw new Error(`Invalid key: ${key}`)
    }
  }
}
