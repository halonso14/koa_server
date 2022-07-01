import IWindowsService from '../services/windows_service/IWindowsService'

export interface IDependencyProvider {
  set(key: string, obj: any): void;
  get(key: string): IWindowsService;
}
