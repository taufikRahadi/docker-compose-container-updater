#!/usr/bin/env node
const { program } = require('@caporal/core')

const Container = require('./services/Container')

program
  .version('1.1.0')
  .command('pull')
  .argument('<image>', 'image name with tag')
  .action(({ logger, args: { image } }) => {
    const container = new Container(image)
    logger.info(container.pullLatestImage())
  })

program
  .version('1.1.0')
  .command('update', 'just update my container')
  .argument('<image>', 'image name with tag')
  .argument(
    '<docker-compose-directory>',
    'directory of docker-compose.yml file',
  )
  .action(({ logger, args: { image, dockerComposeDirectory } }) => {
    const container = new Container(image)
    logger.info(container.updateContainer(dockerComposeDirectory))
  })

program.run()
