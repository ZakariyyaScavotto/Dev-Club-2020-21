const quoteArea = document.getElementById("quoteArea")
const quotes = [ "Trust your senses and victory will follow.",
"Every day is a new victory.",
"Honor is in the challenge, pride in the victory.",
"My stout heart defeated your sharp sword, battle is more than skill.",
"Your mind and spirit is the strongest weapon you have.",
"Today I fair forward with the most vigor.",
"Trust yourself, there is no shame in competition.",
"Be strong, when weak. Be brave, when faced with fear. Be humble, when victorious.",
"You bleed. You sweat. You get what you put in.",
"It's hard to be scared when you're prepared.",
"It doesn't matter who I am, only what I can do.",
"I'm ready for whatever today brings.",
"Let's go get the job done. ",
"Today is gonna be our day."];
let quote = () =>{
    quoteArea.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
}

quote();