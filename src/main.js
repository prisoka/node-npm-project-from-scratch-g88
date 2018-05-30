const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]

function randomColor (colorOptions) {
  const randomIndex = Math.floor(Math.random() * colorOptions.length)

  return colorOptions[randomIndex]
}

// Export both `colors` and `randomColor`

module.exports = {
  colors:colors,
  randomColor: randomColor
}
