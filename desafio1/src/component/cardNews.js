class cardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
}

customElements.define 
('card-new',cardNews);

build()
{
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");
    
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "BY" + this.getAttribute("autor") || "BY Anonymous";
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");
    const newContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("contet");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "asset-imag.png/tecnologia3.png";
    newsImage.alt = "foto de imagem de tecnologia";
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    
    return componentRoot;
}

StyleSheet
    { 
  const style = document.createElement("style");
  style.textContent = `
  .card{
    width: 100%;
    border: 1px solid gray;
    box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.card_left{
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.card_left > span{
 font-weight: 400;
}

.card-img{
    width: 500px;
    height: 300px;
}

.card_left > a{
    margin-top: 15px;
    font-size: 30px;
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.card_left > p{
    color:  rgb(70, 70, 70);
}

  `;
  return style;
}
  
customElements.define("card-nws", Cardnews);
