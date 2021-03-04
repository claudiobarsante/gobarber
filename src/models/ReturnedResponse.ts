import { Response } from '../types/response';

export class ReturnedResponse {
  constructor(public code: Response, public message: string) {}
}
