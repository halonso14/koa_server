import type { ErrorResponse } from '../../types'

type Name = {
  name: string;
};

type ID = {
  id: string;
};

type OptionalID = {
  id?: string;
};

type StartParameter = Name & {
  key: string;
};

type StopParameter = Name;

type ActionAParameter = ID & {
  data: string;
};

type ActionBParameter = ID & {
  data: number;
};

type StartResponse = ErrorResponse & OptionalID;

type StopResponse = ErrorResponse;

type ActionAResponse = ErrorResponse;

export type { StartParameter, StopParameter, ActionAParameter, ActionBParameter, StartResponse, StopResponse, ActionAResponse }
