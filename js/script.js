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
        let cardTitle = btn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        let cardNumber = btn.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        if(coinCount < 20){
            alert("You Don't Have Enough Coin to Make a Call")
            return
        }
        coinCount = coinCount-20;
        document.getElementById('coin-count').innerText = coinCount;
        alert("📞 Calling " + cardTitle +"  " + cardNumber)


        const callHistoryData = [];
        const data = {name:"card title",Numb:"cardNumber",time:new Date().toLocaleTimeString() };
        callHistoryData.push(data);

        let cardContainer = document.getElementById("card-container")
        const NewCallHistory = document.createElement("div")
        NewCallHistory.innerHTML=` <div class="cart-box flex justify-between bg-[#fafafa] items-center p-3 rounded-lg my-3 gap-2"> 
                    <div>
                        <h1 class="font-semibold">${cardTitle}</h1>
                        <p>${cardNumber}</p>
                    </div>
                    <div>
                        <h1>${data.time}</h1>
                    </div>
                </div>`;
                cardContainer.append(NewCallHistory)
        
    })
    const clearCallHistory = document.getElementById('clear-btn');
    clearCallHistory.addEventListener("click",function(e){
        e.preventDefault();
        let cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = " "
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
