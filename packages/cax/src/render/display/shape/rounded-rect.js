import Shape from './shape'

class RoundedRect extends Shape {
  constructor (width, height, r, option) {
    super()
    this.option = Object.assign({
      lineWidth: 1
    }, option)
    this.r = r
    this.width = width
    this.height = height
  }

  draw () {
    const width = this.width,
      height = this.height,
      r = this.r

    const ax = r,
      ay = 0,
      bx = width,
      by = 0,
      cx = width,
      cy = height,
      dx = 0,
      dy = height,
      ex = 0,
      ey = 0

    this.beginPath()

    this.moveTo(ax, ay)
    this.arcTo(bx, by, cx, cy, r)
    this.arcTo(cx, cy, dx, dy, r)
    this.arcTo(dx, dy, ex, ey, r)
    this.arcTo(ex, ey, ax, ay, r)

    if(this.option.fillStyle){
      this.closePath()
      this.fillStyle(this.option.fillStyle)
      this.fill()
    }

    if(this.option.strokeStyle){
      this.lineWidth(this.option.lineWidth)
      this.strokeStyle(this.option.strokeStyle)
      this.stroke()
    }
  }
}

export default RoundedRect
