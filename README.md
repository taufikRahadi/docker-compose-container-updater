# Container Updater

### How To Install:
1. Dapetin deploy token repository nya di gitlab.
2. Install secara global menggunakan npm/yarn/pnpm.
```bash
// npm 
npm i -g git+https://<token-name>:<token>@gitlab.com/widyarobotics/mynitro/container-updater.git

//yarn
yarn global add git+https://<token-name>:<token>@gitlab.com/widyarobotics/mynitro/container-updater.git

// pnpm
pnpm i -g git+https://<token-name>:<token>@gitlab.com/widyarobotics/mynitro/container-updater.git
```
3. Tunggu sampai selesai.
4. lalu coba jalankan container-updater --help untuk melihat command apa saja yang bisa digunakan.

### How To Use:
1. Pastikan udah diinstall.
2. Coba jalanin command 
```bash 
container-updater --help
```
3. Ada list command yang bisa kita gunakan.
4. Setiap command punya satu option yang sama. ```-i``` atau ```--image-name```, jadi kita bisa nge set image nya lewat option, bisa juga lewat env mungkin  dari .bashrc, di set env dengan key ```IMAGE``` dengan value image name nya.
