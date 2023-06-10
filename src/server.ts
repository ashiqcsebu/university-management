import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'


async function management() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database connection succesfull`)
    app.listen(config.port, () => {
      logger.info(`University Management listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect DB', err)
  }
}
management()
