// function for heart increase
 const heartCount = document.getElementById('heart-count');
 const heartIcon = document.getElementsByClassName('heart')
 for(const hearts of heartIcon){
    hearts.addEventListener('click',function(e){
        e.preventDefault;
        let currentHeartValue = heartCount.innerText;
        currentHeartValue++;
        heartCount.innerText = currentHeartValue;
    })
 }


// function for call fucntionality
let coinCount = parseInt(document.getElementById('coin-count').innerText);
const callButton = document.getElementsByClassName('call-btn')
let coin = 100;
for(let btn of callButton){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        const cardTitle = btn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const cardNumber = btn.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        if(coinCount < 20){
            alert("You Don't Have Enough Coin to Make a Call")
            return
        }
        coinCount = coinCount-20;
        document.getElementById('coin-count').innerText = coinCount;
    })
}

// for national emergency card


// for police helpline card

// for fire service

// for ambulance service card

// for women child helpline card

// for anti-corruption-card

// for electricity-helpline-card

// for brac-helpline-card

// for railway-helpline-card
