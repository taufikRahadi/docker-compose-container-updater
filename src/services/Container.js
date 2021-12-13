require('dotenv').config()
const { execSync } = require('child_process')
class Container {
  constructor(image) {
    this.image = image
  }

  pullLatestImage() {
    const command = `docker pull ${this.image}`
    console.log('\x1b[33m', 'Processing: ', 'Pulling your image')
    try {
      const pullImage = execSync(command, {
        encoding: 'utf-8',
      })

      return pullImage
    } catch (error) {
      throw new Error(error)
    }
  }

  getLocalLatestImageHash() {
    const command = `docker inspect -f "{{.Id}}" ${this.image}`
    try {
      const hash = execSync(command, {
        encoding: 'utf-8',
      })

      return hash
    } catch (error) {
      throw new Error(error)
    }
  }

  getContainerId() {
    const command = `docker ps | grep ${this.image} | awk '{print $1}'`
    try {
      const containerId = execSync(command, {
        encoding: 'utf-8',
      })

      return containerId
    } catch (error) {
      throw new Error(error)
    }
  }

  getContainerImageSha(container) {
    const command = `docker inspect -f "{{.Image}}" ${container}`
    try {
      const sha = execSync(command, {
        encoding: 'utf-8',
      })

      return sha
    } catch (error) {
      throw new Error(error)
    }
  }

  updateContainer(directory) {
    console.log('\x1b[33m', 'Processing: ', 'Updating your container...')
    try {
      const command = `cd ${directory} && docker-compose down && docker-compose up -d`

      const updateContainer = execSync(command, {
        encoding: 'utf-8',
      })

      return updateContainer
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = Container
