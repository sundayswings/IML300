// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmp8ZmnlMSPpIHnLKWZGo0o4pQlGvIKpU",
    authDomain: "not-the-eternal-name.firebaseapp.com",
    projectId: "not-the-eternal-name",
    storageBucket: "not-the-eternal-name.appspot.com",
    messagingSenderId: "824621333500",
    appId: "1:824621333500:web:183e49b26845b286a55079",
    measurementId: "G-51HBN9FXMJ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
let dbRef = db.ref("text");

//  var data ={
//    name: "q",
//    word: "hello"
//  }
 
// dbRef.push(data);


let chatContainer = document.getElementById("chat-container");
let entry = document.getElementById("text-input-entry");
let share = document.getElementById("text-input-submit");


dbRef.on("child_added", gotText);

function gotText(data) {
  let id = data.key;
  let value = data.val();
  console.log(value);
  chatContainer.innerHTML =
    "<div class='response'>" + value + "</div>" + chatContainer.innerHTML;
}

//click button will run this function
const textInputSubmit = document.getElementById("text-input-submit");
textInputSubmit.addEventListener("click", submitText);

let textContainerElement = document.getElementById("text-input-entry");

function submitText() {
  let textToSubmit = textContainerElement.value; //gets text value from textbox
  let newKey = dbRef.push().key; //ask firebase to give you a new key / 'name'
  let updates = {}; //send firebase list of values
  updates[newKey] = textToSubmit;
  dbRef.update(updates);
}

function submitlock() {
  entry.remove();
  share.value = "^_^";
  share.disabled = true;
  share.style.width = "70%";
}
