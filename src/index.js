#!/usr/bin/env node
const { program } = require('@caporal/core')

const Container = require('./services/Container')

program
  .version('1.0.0')
  .command('is-my-image-is-latest-image-on-earth')
  .option('-i', '--image-name <imageName>')
  .action(({ logger, options }) => {
    const container = new Container(options.imageName)

    container.pullLatestImage()
    logger.info(
      `so is your image is latest image on earth ? ${container.isMyImageIsLatestImageOnEarth()}`,
    )
  })

program
  .version('1.0.0')
  .command('pull-latest-image')
  .option('-i', '--image-name <imageName>')
  .action(({ logger, options }) => {
    const container = new Container(options.imageName)

    logger.info(`sek, lagi di pull`)
    logger.info(container.pullLatestImage())
  })

program
  .version('1.0.0')
  .command('update-my-container', 'just update my container')
  .option('-i', '--image-name <imageName>')
  .action(({ logger, options }) => {
    const container = new Container(options.imageName)
    logger.info(`w8, lagi pull trus nge up`)
    container.updateContainer()
    logger.info(`beres cuy`)
  })

program.run()
