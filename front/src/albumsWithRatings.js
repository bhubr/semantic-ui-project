import albums from './albums'
albums.forEach((a, i, albums) => {
  albums[i].rating = 1 + Math.floor(5 * Math.random())
})

export default albums
