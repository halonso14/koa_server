import { ErrorCode, ErrorResponse } from '../../types'
import IWindowsService from './IWindowsService'
import { ActionAParameter, ActionAResponse, ActionBParameter, StartParameter, StartResponse, StopParameter, StopResponse } from './types'

export default class DummyWindowsService implements IWindowsService {
  start (params: StartParameter): Promise<StartResponse> {
    const { name, key } = params
    let id: string
    return new Promise((resolve: (value: StartResponse) => void, reject: (reason: ErrorResponse) => void) => {
      switch (name) {
        case 'service_A':
          id = 'valid_service'
          break
        case 'service_B':
          id = 'invalid_service'
          break
        default:
          return reject({
            errorCode: ErrorCode.SERVICE_NAME_INVALID,
            errorMessage: 'Invalid service name.'
          })
      }
      switch (key) {
        case 'valid_key':
          console.log("Windows' service is now running")
          resolve({
            errorCode: ErrorCode.SUCCESS,
            id
          })
          break
        case 'invalid_key':
          reject({
            errorCode: ErrorCode.SERVICE_KEY_INVALID
          })
          break
        default:
          reject({
            errorCode: ErrorCode.FAIL,
            errorMessage: 'Failed to start service.'
          })
          break
      }
    })
  };

  stop (params: StopParameter): Promise<StopResponse> {
    const { name } = params
    return new Promise((resolve: (value: StopResponse) => void, reject: (reason: ErrorResponse) => void) => {
      if (name === 'service_A') {
        resolve({
          errorCode: ErrorCode.SUCCESS
        })
      } else if (name === 'service_B') {
        reject({
          errorCode: ErrorCode.SERVICE_NOT_RUNNING,
          errorMessage: 'Service is not running.'
        })
      } else {
        reject({
          errorCode: ErrorCode.FAIL,
          errorMessage: 'Failed to stop service.'
        })
      }
    })
  };

  actionA (params: ActionAParameter): Promise<ActionAResponse> {
    const { id, data } = params
    return new Promise((resolve: (value: ActionAResponse) => void, reject: (reason: ErrorResponse) => void) => {
      if (id === 'valid_service') {
        resolve({
          errorCode: ErrorCode.SUCCESS
        })
      } else if (id === 'invalid_service') {
        reject({
          errorCode: ErrorCode.SERVICE_NOT_RUNNING,
          errorMessage: 'Service is not running.'
        })
      } else if (id === 'invalid_service_name') {
        reject({
          errorCode: ErrorCode.SERVICE_NAME_INVALID,
          errorMessage: 'Invalid service name.'
        })
      } else if (id === 'invalid_service_id') {
        reject({
          errorCode: ErrorCode.SERVICE_ID_INVALID,
          errorMessage: 'Invalid service id.'
        })
      } else {
        reject({
          errorCode: ErrorCode.FAIL,
          errorMessage: 'Failed to execute actionA.'
        })
      }
    })
  };

  actionB (params: ActionBParameter): Promise<void> {
    const { id, data } = params
    return new Promise((resolve: (value: void) => void, reject: (reason: ErrorResponse) => void) => {
      if (id === 'valid_service') {
        resolve()
      } else if (id === 'invalid_service') {
        reject({
          errorCode: ErrorCode.SERVICE_NOT_RUNNING,
          errorMessage: 'Service is not running.'
        })
      } else if (id === 'invalid_service_name') {
        reject({
          errorCode: ErrorCode.SERVICE_NAME_INVALID,
          errorMessage: 'Invalid service name.'
        })
      } else if (id === 'invalid_service_id') {
        reject({
          errorCode: ErrorCode.SERVICE_ID_INVALID,
          errorMessage: 'Invalid service id.'
        })
      } else {
        reject({
          errorCode: ErrorCode.FAIL,
          errorMessage: 'Failed to execute actionB.'
        })
      }
    })
  };
}
