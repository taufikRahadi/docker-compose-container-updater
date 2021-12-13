# Container Updater

### How To Install:
1. Globally install package, you can use any node package manager.
```bash
// npm 
npm i -g git+https://gitlab+deploy-token-682818:8f785DZ9t3qpAbeZWPMt@gitlab.com/widyarobotics/mynitro/container-updater

//yarn
yarn global add git+https://gitlab+deploy-token-682818:8f785DZ9t3qpAbeZWPMt@gitlab.com/widyarobotics/mynitro/container-updater

// pnpm
pnpm i -g git+https://gitlab+deploy-token-682818:8f785DZ9t3qpAbeZWPMt@gitlab.com/widyarobotics/mynitro/container-updater
```
4. When the installation process is finished, try container-updater --help command to see if cli apps is installed properly.

### Command List
1. ```pull <image-name>```
  Pull image based on image-name argument. 
2. ```update <image-name> <docker-compose-directory>```
  Update docker container and restart docker-compose service
