import "/dist/style.css";

// Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDxXjOKHmWQ0X8MX_9p_5vdY1iJEuAb-Os",
  authDomain: "portfolio-c0794.firebaseapp.com",
  projectId: "portfolio-c0794",
  storageBucket: "portfolio-c0794.appspot.com",
  messagingSenderId: "678660982903",
  appId: "1:678660982903:web:f1772be5bb8e45918a1e72",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();

window.onload = function () {
  window.scrollTo(0, 0);
  document.getElementById("loader-wrapper").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none";
  }, 500);
  document.getElementById("body").style.height = "auto";
  document.getElementById("body").style.overflow = "auto";
  document.getElementById("body").style.overflowX = "hidden";
  // firebaseQuote();
};

//h4 Hero Component
var h4Width = document.getElementById("inner-wrapper").offsetWidth;
var h4DivWidth = h4Width;
document.getElementById("h4-hero").style.width = h4DivWidth + "px";

// Hightlight Element
var nameWidth = document.getElementById("name-link").offsetWidth;
var highlightWidth = nameWidth + (20 / 100) * nameWidth;
document.getElementById("highlight").style.width = highlightWidth + "px";
document.getElementById("highlight-footer").style.width = highlightWidth + "px";

async function firebaseQuote() {
  const totalDoc = db
    .collection("quotes")
    .get()
    .then(function (querySnapshot) {
      var totalDoc = querySnapshot.size;
      return totalDoc;
    });

  console.log(totalDoc);

  var randomNum = Math.floor(Math.random() * 2 + 1);
  var quoteID = "quote-" + randomNum;
  var docRef = db.collection("quotes").doc(quoteID);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        var obj = doc.data();
        var quoteContent = document.getElementById("quote-content");
        var quotePerson = document.getElementById("quote-person");
        quoteContent.innerHTML = obj.content;
        quotePerson.innerHTML = obj.person;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
