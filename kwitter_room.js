const firebaseConfig = {
      apiKey: "AIzaSyAHrdwmpT8LUiAMvmLL6MNmqpD3_MaGhZc",
      authDomain: "zwitter2.firebaseapp.com",
      projectId: "zwitter2",
      storageBucket: "zwitter2.appspot.com",
      messagingSenderId: "646143161812",
      appId: "1:646143161812:web:ce2271a230a8641b8c5241",
      measurementId: "G-WQQ3QSYNFN"
    };
    
    // Initialize Firebase
    
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
       console.log("room-name"+Room_names);
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";

}
