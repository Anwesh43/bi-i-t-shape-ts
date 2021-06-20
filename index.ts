const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 4 
const strokeFactor : number = 90 
const sizeFactor : number = 8.9 
const scGap : number = 0.02 / parts 
const deg : number = Math.PI
const delay : number = 20 
const backColor : string = "#bdbdbd"
const colors : Array<string> = [
    "#f44336",
    "#2196F3",
    "#00C853",
    "#F57F17",
    "#AA00FF"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}