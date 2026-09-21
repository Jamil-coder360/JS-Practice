const left =document.getElementById("left");
const right =document.getElementById("right");
const image =document.getElementById("image");
let imageCount = 1; 
const handlePrev = ()=>{
    if (imageCount >1) {
        imageCount -=1;
    }
        image.setAttribute("src",`./assets/w-${imageCount}.png`)
}
const handleNext = ()=>{
    if (imageCount <=5) {
        imageCount +=1;
    }
        image.setAttribute("src",`./assets/w-${imageCount}.png`)
}

left.addEventListener("click", ()=>handlePrev(imageCount));
right.addEventListener("click", ()=>handleNext(imageCount));