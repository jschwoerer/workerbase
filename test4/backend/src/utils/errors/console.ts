export function logToStdErr (errMsg: unknown): void {
  console.error(new Date().toLocaleString(), errMsg)
}
