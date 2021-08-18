const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export const randomColor = () => {
  return `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`
}
