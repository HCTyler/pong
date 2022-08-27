import Ball from "./Ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime
function update(time) {

    if (lastTime != null) {
        const delta = time - lastTime
        //Update code if we have a last time.
        ball.update(delta)
    }

    lastTime = time

    window.requestAnimationFrame(update)
}


// setInterval(update,10) <<This is bad practice because the animation may not always run every 10 millisecond and the funcation can run inbetween frame
window.requestAnimationFrame(update)
// this is a better practice because it is reactive to anytime there is a change in the animation screen.