const firebaseConfig = {
    apiKey: "AIzaSyAnkJo3P6qzp2hTyvHPIDCTfunjeD6qQV4",
    authDomain: "recruitment-d3477.firebaseapp.com",
    databaseURL: "https://recruitment-d3477-default-rtdb.firebaseio.com",
    projectId: "recruitment-d3477",
    storageBucket: "recruitment-d3477.appspot.com",
    messagingSenderId: "117993460733",
    appId: "1:117993460733:web:7b37aab1ca22aa23b93f94"
  }
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  

  saveMessages(name, emailid);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
}