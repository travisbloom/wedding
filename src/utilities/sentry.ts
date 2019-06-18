import * as SentryLib from "@sentry/browser"

import { logger } from "./logger"
import { APP_CONFIG } from "../appConfig"
import { isServerRendering } from "./executionEnvironment"

const getEventMessage = (event: SentryLib.SentryEvent) => {
  if (APP_CONFIG.environment !== "local") {
    return ""
  }
  if (event.message) {
    return event.message
  }
  if (
    event.exception &&
    event.exception.values &&
    event.exception.values[0] &&
    event.exception.values[0].value
  ) {
    return event.exception.values[0].value
  }
  return ""
}
SentryLib.init({
  logLevel: 2,
  dsn: "https://56f0565480664f6fa7d0fc0a6cd9d119@sentry.io/1427913",
  environment: APP_CONFIG.environment,
  enabled:
    !isServerRendering() &&
    window.location.href.indexOf("travisandmeghan") !== -1,
  beforeBreadcrumb(breadcrumb) {
    return breadcrumb.category === "console" ? null : breadcrumb
  },
  beforeSend: event => {
    if (APP_CONFIG.environment === "local") {
      logger.warn(
        `SENTRY EVENT: ${getEventMessage(event)}${
          event.tags ? ` ${JSON.stringify(event.tags)}` : ""
        }`,
        undefined,
        event
      )
    }
    return event
  },
})

if (!isServerRendering()) {
  // @ts-ignore
  window.testError = () => SentryLib.captureMessage("test error")
}

export const Sentry = SentryLib
