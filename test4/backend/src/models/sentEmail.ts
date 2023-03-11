import type Email from './email'

export default interface SentEmail extends Email {
  sent: boolean
  errMsg?: string
};
