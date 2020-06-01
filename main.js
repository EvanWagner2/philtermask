 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBVznK9nQESJTit8-aJ_y8eFyXNdlb1rCU",
    authDomain: "philtermask-a52cb.firebaseapp.com",
    databaseURL: "https://philtermask-a52cb.firebaseio.com",
    projectId: "philtermask-a52cb",
    storageBucket: "philtermask-a52cb.appspot.com",
    messagingSenderId: "199351954294",
    appId: "1:199351954294:web:f8226b4f54bc17d64fa857"
  };
  console.log(firebase.initializeApp)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference messages
  var submitsRef = firebase.database().ref('submits');

//eventlistener
document.getElementById('contactForm').addEventListener('submit', 
submitForm);

//submit form
function submitForm(e){
    e.preventDefault();


   //get values
   var name = getInputVal('name');
   var initials = getInputVal('initials');
   var printedName = getInputVal('printedName');
   var date = getInputVal('date');

   saveInput(name, initials, printedName, date);
   console.log(name);
   // clear form
   document.getElementById('contactForm').reset();
}

//form values function
function getInputVal(id){
    return document.getElementById(id).value;
}

//save submits to firebase
function saveInput(name, initials, printedName, date){
    var newInputRef = submitsRef.push();
    newInputRef.set({
        name: name,
        initials : initials,
        printedName : printedName,
        date : date
    });
}

function clearInputs(name, initials, printedName, date, email, msg){
    
}


