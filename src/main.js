import imageUrl from "./image/enter.png"
import anime from "animejs";

const image = document.querySelector('img');
image.src = imageUrl;

anime({
    targets:image,
    rotate: 360

})