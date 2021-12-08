require('dotenv').config()
const { exec, execSync } = require('child_process')
class Container {
  constructor(image = process.env.IMAGE) {
    this.image = image
  }

  pullLatestImage() {
    const command = `docker pull ${this.image}`
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

  isMyImageIsLatestImageOnEarth() {
    try {
      console.info(
        'retrieving latest image sha, make sure u already pull it from registry',
      )
      const latestLocalImageSha = this.getLocalLatestImageHash()

      console.info('find which container id is using that image')
      const containerId = this.getContainerId()
      if (containerId.length < 1)
        throw new Error('there is no container with that image, mate')

      console.info('retrieving container image sha')
      const containerImageSha = this.getContainerImageSha(containerId)

      return latestLocalImageSha === containerImageSha
    } catch (error) {
      throw error
    }
  }

  updateContainer() {
    try {
      const command = `cd ${process.env.APP_DIR} && docker-compose down && docker-compose up -d`

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
