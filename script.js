let num = 0;
let reaction = "";
function handlePrompt(choice) {
  showSearchBar();
  if (choice === "should I") {
    let note = document.getElementById("shouldI");
    let promptChange = document.getElementById("prompt");
    promptChange.textContent = note.textContent;
  } else if (choice === "will I") {
    let note = document.getElementById("willI");
    let promptChange = document.getElementById("prompt");
    promptChange.textContent = note.textContent;
  } else if (choice === "will they") {
    let note = document.getElementById("willThey");
    let promptChange = document.getElementById("prompt");
    promptChange.textContent = note.textContent;
  } else {
    // gracefully exit function
    return;
  }
}

async function getGif() {
  let userInput = document.getElementById("input").value;

  let giphyApiKey = "wL2VhWAS3RK5vRLV4Xur1HwpaF9O3dpp"; //in a real product this wouldn't be visible! it would be in a hidden ENV file

  let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg-13&api_key=${giphyApiKey}`;

  const response = await fetch(giphyApiURL);

  const data = await response.json();

  let num = Math.floor(Math.random() * 25); //random number between 0 and 24

  let imgPath = data.data[num].images.fixed_height.url;
  document.querySelector("image").setAttribute("href", imgPath);
  fortune();
}

let showSearchBar = (string, el) => {
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("id", "input");

  const newButton = document.createElement("button");
  newButton.setAttribute("onClick", "getGif()");
  newButton.textContent = `Search`;

  let search = document.createElement("div");
  search.appendChild(newInput);
  search.appendChild(newButton);
  const questionFrame = document.getElementById("questionFrame");
  questionFrame.replaceChild(search, questionFrame.lastElementChild);
};

let handleSoloQuestion = (string, el) => {
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("id", "input");

  const newButton = document.createElement("button");
  newButton.setAttribute("onClick", "getReactionGif()");
  newButton.textContent = `Search`;

  let search = document.createElement("div");
  search.appendChild(newInput);
  search.appendChild(newButton);
  const questionFrame = document.getElementById("questionFrame");
  questionFrame.replaceChild(search, questionFrame.lastElementChild);

  promptChange = document.getElementById("prompt");
  promptChange.textContent = "";
};

async function getReactionGif() {
  fortune();
  let userInput = reaction;

  let giphyApiKey = "wL2VhWAS3RK5vRLV4Xur1HwpaF9O3dpp"; //in a real product this wouldn't be visible! it would be in a hidden ENV file

  let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg-13&api_key=${giphyApiKey}`;

  const response = await fetch(giphyApiURL);

  const data = await response.json();

  num = Math.floor(Math.random() * 25); // giving a rand gif

  let imgPath = data.data[num].images.fixed_height.url;
  document.querySelector("image").setAttribute("href", imgPath);
}

const fortune = () => {
  // this is the yes, no, maybe, results are bleak, probably not, absolutely response
  // when i submit the response I select a random response and display it on the orb

  num = Math.floor(Math.random() * 100);
  let findResponseText = document.getElementById(responseText);
    let findResponseFrame = document.querySelector('#responseFrame');
  findResponseFrame.style.visibility = 'visible';
  // TODO: use a switch case here instead
  if (num > 70) {
    responseText.textContent = "Absolutely 100%";
    reaction = "excited";
  } else if (num > 60) {
    responseText.textContent = "ehhhhhhh sure";
    reaction = "happy";
  } else if (num > 40) {
    responseText.textContent = "oof :/";
    reaction = "worried";
  } else if (num > 25) {
    responseText.textContent = "results are bleak";
    reaction = "anxious";
  } else if (num > 5) {
    responseText.textContent = "i wouldnt";
    reaction = "unhappy";
  } else {
    responseText.textContent = "bro IDK";
    reaction = "confused";
    // gracefully exit function
    return;
  }
  console.log(num);
};
