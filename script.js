const buttonNot = document.getElementById("not");
const buttonYes = document.getElementById("yes");
const logoImage = document.getElementById("logo");
const questionText = document.getElementById("question");
const buttonsBox = document.getElementById("buttons");
const videoElement = document.getElementById("video");

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
    questionText.textContent = "Você";
    await new Promise(resolve => setTimeout(resolve, 1000));
    questionText.textContent = "Você é";
    await new Promise(resolve => setTimeout(resolve, 1000));
    questionText.textContent = "Você é a melhor";
    await new Promise(resolve => setTimeout(resolve, 1000));
    questionText.textContent = "Você é a melhor namorada do mundo!!!";
    await new Promise(resolve => setTimeout(resolve, 1000));
    questionText.textContent = "Tenho uma coisa para te mostrar, quer ver?";
    await new Promise(resolve => setTimeout(resolve, 1000));
    let tempYes = document.createElement("button");
    let tempNot = document.createElement("button");
    tempNot.className = "button";
    tempYes.className = "button";
    tempYes.textContent = "Sim";
    tempNot.textContent = "Não";
    buttonsBox.appendChild(tempYes);
    buttonsBox.appendChild(tempNot);
    let sourceVideo = document.createElement("source")
    
    tempYes.addEventListener("click", () => {
        logoImage.src = "imgs/Sanrio.gif";
        sourceVideo.src = "imgs/Goo Goo Dolls - Iris.mp3"
        sourceVideo.type = "audio/mp3"
        sourceVideo.id = "source"
        videoElement.appendChild(sourceVideo)
        showSecondGifAndText();
    });

    tempNot.addEventListener("click", () => {
        logoImage.src = "imgs/Sanrio sad.gif";
        logoImage.className = "logo_animated"
    });
});

buttonNot.addEventListener("click", () => {
    buttonNot.remove()
});

function showSecondGifAndText() {
    // Remover os botões e o texto existentes
    buttonsBox.innerHTML = "";
    questionText.textContent = "";

    // Criar e adicionar o segundo gif como plano de fundo
    const secondGif = document.createElement("div");
    secondGif.id = "secondGif";
    secondGif.style.backgroundImage = "url('imgs/heart falling down.gif')";
    secondGif.style.backgroundSize = "cover";
    secondGif.style.backgroundRepeat = "no-repeat";
    secondGif.style.backgroundPosition = "center";
    secondGif.style.position = "fixed";
    secondGif.style.top = "0";
    secondGif.style.left = "0";
    secondGif.style.width = "100%";
    secondGif.style.height = "100%";
    secondGif.style.zIndex = "-1";
    document.body.appendChild(secondGif);
    
    // Criar e adicionar a caixa de texto
    const textBox = document.createElement("div");
    textBox.className = "textbox";
    const textParagraph = document.createElement("p");
    textParagraph.textContent = `Aby, meu amor,

Mesmo que você não seja muito fã de datas comemorativas, eu quis fazer algo especial para celebrar esse dia.

Desde que nos conhecemos, você se tornou uma pessoa extremamente especial na minha vida. Você trouxe alegria, diversão e significado para cada dia, transformando cada momento ao seu lado em algo especial e inesquecível para mim. Estar com você se tornou meu passatempo favorito, não importa o que estejamos fazendo juntos.

Obrigado por ser a pessoa mais carinhosa, compreensiva e incrível que eu já conheci. Você me faz ser uma pessoa melhor a cada dia.

Neste Dia dos Namorados, quero te agradecer por tudo que você faz por mim. Você é a luz da minha vida, a pessoa que me completa e me faz feliz todos os dias.

Te amo mais do que consigo expressar em palavras.

Com todo o meu amor,

William

P.S: Sei que você não se importa muito com presentes materiais e comemorações, mas eu não poderia deixar passar sem fazer algo especial por você. Isso é só um gesto para demonstrar o quanto você é especial para mim. Te amo muito! Mesmo estragando meus planos...`;
    textBox.appendChild(textParagraph);
    document.body.appendChild(textBox);
}
