const firebaseConfig = {
    apiKey: "AIzaSyDjomo9LY8Ry9pOmNUv1Lu77BhAIQ11ykM",
    authDomain: "zwitter1-1f08c.firebaseapp.com",
    databaseURL: "https://zwitter1-1f08c-default-rtdb.firebaseio.com",
    projectId: "zwitter1-1f08c",
    storageBucket: "zwitter1-1f08c.appspot.com",
    messagingSenderId: "419280278730",
    appId: "1:419280278730:web:dd2341459c4bf15ff31033"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser() { 
    user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); 
}