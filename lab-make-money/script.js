"use strict";
{
  // when we submit the form
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // prevents the form from reloading
                        // the thing that triggered the event
    const data = new FormData(e.target); // converting the data to an object
    // get the "how many" value
    // .get is built into FormData
    // and it allows us to get the value of an input 
    // based on its name
    const howMany = data.get('how-many')
    
    // get "which coin" value
    const whichCoin = data.get('which-coin')

    // use those to create our dom element
    for (let i = 0; i < howMany; i++){
        // creating the element
        const coin = document.createElement("div")
        
        // modifying the data
        coin.classList.add("coin", whichCoin)
        coin.innerText = whichCoin;
        // get the first lettter of the inner text 
        // and capitalize it.
        // let capitalizedVersion = whichCoin;
        // capitalizedVersion[0] = capitalizedVersion[0].toUpperCase()
        // coin.innerText = capitalizedVersion;

        // if (coin.whichCoin === "dime") {
        //     coin.style.backgroundColor = "https://upload.wikimedia.org/wikipedia/commons/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png"
        // } else if (coin.whichCoin === "nickel") {
        //     // do the same think for the nickel url
        // }

        // insert it into the DOM
        document.body.appendChild(coin);
    }
  });
}
