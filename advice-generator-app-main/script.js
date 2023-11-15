const url = "https://api.adviceslip.com/advice",
      dice = document.querySelector(".dice"),
      tag = document.querySelector(".tag"),
      advice = document.querySelector(".advice")
      let newTag = 0
 dice.addEventListener("click" , getData)

 async function getData(){
 const response = await fetch(url)
 const data = await response.json()
 const advice = await data.slip.advice
 await newTag++;
 updateUI(advice , newTag)
 
 }

function updateUI(get , newTag){
    advice.innerHTML = get;
    tag.innerHTML = "Advice" + " " + "#" + newTag
}
getData()