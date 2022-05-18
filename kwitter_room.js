var firebaseConfig = {
      apiKey: "AIzaSyDAM6PKxDfY3bwkSY0-_snMABSYw8fsXsY",
      authDomain: "letschatwebapp-58953.firebaseapp.com",
      databaseURL: "https://letschatwebapp-58953-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "letschatwebapp-58953",
      storageBucket: "letschatwebapp-58953.appspot.com",
      messagingSenderId: "809173009407",
      appId: "1:809173009407:web:24d3a05abb009e1d51ddca",
      measurementId: "G-K3L9J9L91L"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);
 username = localStorage.getItem("user_name"); 
 document.getElementById("user_name").innerHTML = "Welcome"+ username + "!";
    //ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
      });
         localStorage.setItem("room_name", room_name);

         window.location = "index.html";
}

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
    window.location = "index.html";
}



