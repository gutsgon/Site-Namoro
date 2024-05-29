const buttonNot = document.getElementById("not");
const buttonYes = document.getElementById("yes");
const logoImage = document.getElementById("logo");
const questionText = document.getElementById("question");
const buttonsBox = document.getElementById("buttons")
const videoElement = document.getElementById("video")

// videoElement.style = "display: none;"
// videoElement.pause()

buttonYes.addEventListener("click", async () => {
    if (!buttonNot == undefined) {
        buttonYes.remove();
    } else {
        buttonNot.remove();
        buttonYes.remove();
    }
    logoImage.src = "imgs/Sanrio heart.gif";
    questionText.textContent = "EU AMO MUITO VOCÊ!!!";
    await new Promise(resolve => setTimeout(resolve, 3000));
    questionText.textContent = "Você"
    await new Promise(resolve => setTimeout(resolve, 1000));
    questionText.textContent = "Você é"
    await new Promise(resolve => setTimeout(resolve, 1000));
    questionText.textContent = "Você é a melhor"
    await new Promise(resolve => setTimeout(resolve, 1000));
    questionText.textContent = "Você é a melhor namorada do mundo!!!"
    await new Promise(resolve => setTimeout(resolve, 1000));
    questionText.textContent = "Tenho uma coisa para te mostrar, quer ver?"
    await new Promise(resolve => setTimeout(resolve, 1000));
    let tempYes = document.createElement("button");
    let tempNot = document.createElement("button");
    tempNot.className = "button"
    tempYes.className = "button"
    tempYes.textContent = "Sim"
    tempNot.textContent = "Não"
    buttonsBox.appendChild(tempYes)
    buttonsBox.appendChild(tempNot)
    let sourceVideo = document.createElement("source")
    tempYes.addEventListener("click", ()=>{
        logoImage.src = "imgs/Sanrio.gif"
        sourceVideo.src = "imgs/Goo Goo Dolls - Iris.mp3"
        sourceVideo.type = "audio/mp3"
        sourceVideo.id = "source"
        videoElement.appendChild(sourceVideo)
        tempNot.remove()
        tempYes.remove()
        questionText.remove()
        logoImage.className = "logo_animated"
    }) 

    tempNot.addEventListener("click",()=>{
        logoImage.src = "imgs/Sanrio sad.gif"
        sourceVideo.src = "imgs/aranha.mp4"
        sourceVideo.type = "video/mp4"
        sourceVideo.id = "source"
        videoElement.appendChild(sourceVideo)
        tempNot.remove()
        tempYes.remove()
        questionText.remove()
        logoImage.className = "logo_animated"
    })
});

buttonNot.addEventListener("click", () => {
  buttonNot.remove();
});
