// TODO: Declare any global variables we need
let headNum = 0;
let tailNum = 0;

let headPercent = 0;
let tailPercent = 0;

let flipTotal = 0;
let pennyResult = null;

let flipButton = document.querySelector("#flip") ;
let clearButton = document.querySelector("#clear");
let pennyImage = document.querySelector("#penny-image");
let statusMessage = document.querySelector(".message-container")

document.addEventListener('DOMContentLoaded', function () {

    flipButton.addEventListener('click', function(){
        console.log("clicked!")
  

    // Flip Button Click Handler
            pennyResult = Math.round(Math.random());
            
            //Heads
            if (pennyResult === 1)
            {
                pennyImage.setAttribute('src', './assets/images/penny-heads.jpg');
                pennyImage.setAttribute('alt', 'a picture of heads');
                
                statusMessage.textContent = "You flipped heads";
                headNum++;
                flipTotal++;

                document.querySelector('#heads').textContent = headNum;
            }

            //Tails
            else
            {
                pennyImage.setAttribute('src', './assets/images/penny-tails.jpg')
                pennyImage.setAttribute('alt', 'a picture of tails')
                
                statusMessage.textContent = "You flipped tails";
                tailNum++;
                flipTotal++;
                document.querySelector('#tails').textContent = tailNum;
            }
            
            //Calculating Percentages
            headPercent = Math.round(headNum / flipTotal * 100);
            tailPercent = Math.round(tailNum / flipTotal * 100);
            
            document.querySelector('#heads-percent').textContent = headPercent + '%';
            document.querySelector('#tails-percent').textContent = tailPercent + '%';

    })

    //Clear Button
    clearButton.addEventListener('click', function(){
        headNum = 0;
        tailNum = 0;
        flipTotal = 0;
        pennyResult = null;
        headPercent = 0;
        tailPercent = 0;

        document.querySelector('#heads').textContent = headNum;
        document.querySelector('#tails').textContent = tailNum;
        document.querySelector('#heads-percent').textContent = headPercent + '%';
        document.querySelector('#tails-percent').textContent = tailPercent + '%';

        pennyImage.setAttribute('src', './assets/images/penny-heads.jpg');
    })
})