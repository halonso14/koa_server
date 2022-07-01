import { ActionAParameter, ActionAResponse, ActionBParameter, StartParameter, StartResponse, StopParameter, StopResponse } from './types'

export default interface IWindowsService {
  /**
   * Start windows' service
   * @param params
   * @returns Response for starting windows' service.
  */
  start(params: StartParameter): Promise<StartResponse>

  /**
   * Stop windows' service
   * @param params
   * @returns Response for starting windows' service.
  */
  stop(params: StopParameter): Promise<StopResponse>

  /**
   * Do actionA
   * @param params
   * @returns Response for actionA.
  */
  actionA(params: ActionAParameter): Promise<ActionAResponse>

  /**
   * Do actionB
   * @param params
  */
  actionB(params: ActionBParameter): Promise<void>
}
