//Inspired by https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc
document.addEventListener("DOMContentLoaded", () => { // waits for content to load
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => { //waits for button press
    if (e.code === "Enter") { //if someone entered input
      let input = inputField.value;
      inputField.value = ""; //clear the input field
      output(input); //get an output
    }
  });
});

function output(input) {
  let product; //sets up product 

  //Regex to remove non word/space chars
  //Trim trailing whitespce
  //Remove digits in case someone does something like 'hi!1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   //'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/what's/g,"what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you")
    .replace(/\bu\b/g, "you");
  //compares the input text based on the prompts arrays (see constants.js)
  //Then depending on answer
  if (compare(prompts, replies, text)) { 
    //Search for reply
    product = compare(prompts, replies, text);
  } 
  else if (text.match(/thank/gi)) {
    //If text has thank in it (meaning they're thanking) say you're welcome
    product = "You're welcome!"
  } 
  else if (text.match(/(corona|covid|virus)/gi)) {
    //If no match, check if message contains corona, covid or virus
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } 
  else {
    //If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //Add chat to screen
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) { //go through the prompts
    for (let y = 0; y < promptsArray[x].length; y++) { //go through options in each prompt
      if (promptsArray[x][y] === string) { //if we find what the input was
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)]; //pick random output from replies
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages"); //get the message container

  let userDiv = document.createElement("div"); //set up the user's new input
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv); //add it

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  //Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  //Fake delay to seem legit
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}