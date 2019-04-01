import * as Sentry from '@sentry/browser'
import { APP_CONFIG } from '../appConfig'

const consoleToSentryLevelMap: Record<string, Sentry.Severity> = {
  log: Sentry.Severity.Info,
  warn: Sentry.Severity.Warning,
}

const log = (level: 'log' | 'warn') => (
  str: string,
  data?: Record<string, string>,
  other?: any,
) => {
  if (APP_CONFIG.environment !== 'production') {
    console[level](str, ...[data, other].filter(arg => !!arg))
  } else {
    Sentry.addBreadcrumb({
      level: consoleToSentryLevelMap[level],
      message: str,
      data,
    })
  }
}

class Logger {
  info = (str: string, data?: Record<string, string>, other?: any) => log('log')(str, data, other)
  warn = (str: string, data?: Record<string, string>, other?: any) => log('warn')(str, data, other)
}

export const logger = new Logger()
