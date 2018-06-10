const download = require('image-downloader')
global.Promise = require('bluebird')
const sequence = require('./sequence')

const url = (gender, index) => `https://randomuser.me/api/portraits/${gender}/${index}.jpg`
const path = (gender, index) => `${__dirname}/avatars/${gender}/${index}.jpg`

Promise.reduce(['women', 'men'], (all, gender) =>
  Promise.reduce(sequence(0, 100), (byGender, index) =>
    download.image({
      url: url(gender, index), dest: path(gender, index)
    })
      .then(({ filename, image }) => {
        console.log(`[${gender} ${index}] File saved to ${filename}`)
        return byGender.concat(filename)
      })
      .catch((err) => {
        console.error(err)
        return byGender
      }),
  []
  )
    .then(results => all.concat(results)),
[]
)

// // Download to a directory and save with the original filename
// const options = {
//   url: 'http://someurl.com/image.jpg',
//   dest: '/path/to/dest'                  // Save to /path/to/dest/image.jpg
// }
 
// download.image(options)
//   .then(({ filename, image }) => {
//     console.log('File saved to', filename)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
 
// // Download to a directory and save with an another filename
// options = {
//   url: 'http://someurl.com/image2.jpg',
//   dest: '/path/to/dest/photo.jpg'        // Save to /path/to/dest/photo.jpg
// }
 
// download.image(options)
//   .then(({ filename, image }) => {
//     console.log('File saved to', filename)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
