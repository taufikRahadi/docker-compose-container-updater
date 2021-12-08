#!/usr/bin/env node
const { program } = require('@caporal/core')

const Container = require('./services/Container')
const container = new Container()

program
  .version('1.0.0')
  .command('is-my-image-is-latest-image-on-earth')
  .action(({ logger }) => {
    container.pullLatestImage()
    logger.info(
      `so is your image is latest image on earth ? ${container.isMyImageIsLatestImageOnEarth()}`,
    )
  })

program
  .version('1.0.0')
  .command('update-my-container', 'just update my container')
  .action(({ logger }) => {
    container.pullLatestImage()
    logger.info(`w8, lagi pull trus nge up`)
    container.pullImage()
    logger.info(`beres cuy`)
  })

program.run()
