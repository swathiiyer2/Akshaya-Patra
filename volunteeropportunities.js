var config = {
  apiKey: "AIzaSyCP_aB4ESWSrJLw3dK4onNuDDwBWAh_2cI",
  authDomain: "akshaya-patra-test.firebaseapp.com",
  databaseURL: "https://akshaya-patra-test.firebaseio.com",
  storageBucket: "akshaya-patra-test.appspot.com",
  messagingSenderId: "478900433771"
};
firebase.initializeApp(config);
var database = firebase.database(); 


//////////////////////////////////////////////////////////////////////
//IMPORTANT GLOBAL VARIABLES TO CHANGE
var kitchenVisible = false; 
var corpVisible = false; 
var officeVisible = false;
var schoolVisible = false;
//////////////////////////////////////////////////////////////////////
//Call the appropriate functions to display the opportunities
kitchenCall();
corpCall();
officeCall();
schoolCall();

//Sorting Variables
var startDate;
var endDate;
var location; 

//Definition Variables - Define new Page to be opened; 
//var chosenDescription = document.getElementById(newPageDescription); 

//var chosenDate = "<img src=https://tse4.mm.bing.net/th?id=OIP.M738f0a7e4dc782f47c4f115328d90f42o0&pid=15.1>";
//document.getElementById("chosenDateHTML").value = chosenDate;
var chosenImage; 
var chosenTerm; 
//////////////////////////////////////////////////////////////////////
var chosenCat =  1; //This will give the category chosen in any number
var chosenNumber = 0; //This will grant the number 
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


customData(2,0); 

function customData(chosenCat, chosenNumber){
 if (chosenCat == 0){
    firebase.database().ref('/school/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        kInfo = kInfo +  databaseEvents[chosenNumber].description;
        kInfo = kInfo +  "<img src=" + databaseEvents[chosenNumber].image + ">" ;
        kInfo = kInfo + databaseEvents[chosenNumber].location;
        kInfo = kInfo + databaseEvents[chosenNumber].date;

        document.getElementById('customDescription').innerHTML = kInfo; 
      });
  }
else if (chosenCat == 1){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/corp/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        kInfo = kInfo +  databaseEvents[chosenNumber].description;
        kInfo = kInfo +  "<img src=" + databaseEvents[chosenNumber].image + ">" ;
        kInfo = kInfo + databaseEvents[chosenNumber].location;
        kInfo = kInfo + databaseEvents[chosenNumber].date;

        document.getElementById('customDescription').innerHTML = kInfo; 
      });
      //END DEFINITION
    kitchenVisible = true; 
  }



  else if (chosenCat == 2){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/kitchen/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        kInfo = kInfo +  databaseEvents[chosenNumber].description;
        kInfo = kInfo +  "<img src=" + databaseEvents[chosenNumber].image + ">" ;
        kInfo = kInfo + databaseEvents[chosenNumber].location;
        kInfo = kInfo + databaseEvents[chosenNumber].date;

        document.getElementById('customDescription').innerHTML = kInfo; 
      });
      //END DEFINITION
    kitchenVisible = true; 
  }

else if (chosenCat == 3){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/office/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        kInfo = kInfo +  databaseEvents[chosenNumber].description;
        kInfo = kInfo +  "<img src=" + databaseEvents[chosenNumber].image + ">" ;
        kInfo = kInfo + databaseEvents[chosenNumber].location;
        kInfo = kInfo + databaseEvents[chosenNumber].date;

        document.getElementById('customDescription').innerHTML = kInfo; 
      });
      //END DEFINITION
    kitchenVisible = true; 
  }


}



//Calculate and MAKE KITCHEN VISIBLE 
function kitchenCall(){
  var button = document.getElementById("buttonK");
  console.log(button);

 if (kitchenVisible == true){
    document.getElementById('kitchenOps').innerHTML = "";
    kitchenVisible = false; 
    button.value = "Kitchen: __";
    button.innerHTML = "Kitchen __";
  }
  else if (kitchenVisible == false){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/kitchen/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        numElems = 2; 
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        for (var i = 0; i < numElems; i++){
            kInfo = kInfo +  databaseEvents[i].description;
            kInfo = kInfo +  '<a href="individualItemPage.html">';
            kInfo = kInfo +  '<img src="' + databaseEvents[i].image + '"/>' ;
            kInfo = kInfo + '</a>';
        } 
        document.getElementById('kitchenOps').innerHTML = kInfo; 
      });
      //END DEFINITION
    kitchenVisible = true; 
    button.value = "Kitchen: Visible!";
    button.innerHTML = "Kitchrn: Visible!";
  }
}

//<a href="individualItemPage.html">
//<img src="https://tse2.mm.bing.net/th?id=OIP.M29993a9b0171a17845f5bcfa41e64407o0&pid=15.1" />
//</a>




//GIVE OFFICE VARIABLE
function officeCall(){
  var button = document.getElementById("buttonO");
  console.log(button);

 if (officeVisible == true){
    document.getElementById('officeOps').innerHTML = "";
    officeVisible = false; 
    button.value = "Office: __";
    button.innerHTML = "Office: __!";
  }
  else if (officeVisible == false){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/office/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        numElems = 1; 
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        for (var i = 0; i < numElems; i++){
            kInfo = kInfo +  databaseEvents[i].description;
            kInfo = kInfo +  '<a href="individualItemPage.html">';
            kInfo = kInfo +  '<img src="' + databaseEvents[i].image + '"/>' ;
            kInfo = kInfo + '</a>';
        } 
        document.getElementById('officeOps').innerHTML = kInfo; 
      });
      //END DEFINITION
    officeVisible = true; 
    button.value = "Office: Visible!";
    button.innerHTML = "Office: Visible!";
  }
}

//GIVE CORP VARIABLE
function corpCall(){
  var button = document.getElementById("buttonC");
  console.log(button);
 if (corpVisible == true){
    document.getElementById('corpOps').innerHTML = "";
    corpVisible = false; 
    button.value = "Corp.: __";
    button.innerHTML = "Corp.: __";
  }
  else if (corpVisible == false){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/corp/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        numElems = 1; 
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        for (var i = 0; i < numElems; i++){
            kInfo = kInfo +  databaseEvents[i].description;
            kInfo = kInfo +  '<a href="individualItemPage.html">';
            kInfo = kInfo +  '<img src="' + databaseEvents[i].image + '"/>' ;
            kInfo = kInfo + '</a>';
        } 
        document.getElementById('corpOps').innerHTML = kInfo; 
      });
      //END DEFINITION
    corpVisible = true; 
    button.value = "Corp.: Visible!";
    button.innerHTML = "Corp.: Visible!";
  }
}

//GIVE SCHOOL VARIABLE
function schoolCall(){
  var button = document.getElementById("buttonS");
  console.log(button);

 if (schoolVisible == true){
    document.getElementById('schoolOps').innerHTML = "";
    schoolVisible = false; 
    button.value = "School: __";
    button.innerHTML = "School: __";
  }
  else if (schoolVisible == false){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/school/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        numElems = 1; 
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        for (var i = 0; i < numElems; i++){
            kInfo = kInfo +  databaseEvents[i].description;
            kInfo = kInfo +  '<a href="individualItemPage.html">';
            kInfo = kInfo +  '<img src="' + databaseEvents[i].image + '"/>' ;
            kInfo = kInfo + '</a>';
        } 
        document.getElementById('schoolOps').innerHTML = kInfo; 
      });
      //END DEFINITION
    schoolVisible = true; 
    button.value = "School: Visible!";
    button.innerHTML = "School: Visible!";
  }
}


//Confirms the Changes Made to the Variable and Stores the Data in JavaScript
function confirmVariables() 
{
  startDate = document.getElementById("startDate").value;
  endDate = document.getElementById("endDate").value;
  var button = document.getElementById("button");
  console.log(button);
  button.value = "Done!";
  button.innerHTML = "Done!";
  console.log(email);
  firebase.database().ref('users/').set({email: email,});

}



function updateButton(){
  var button = document.getElementById("button2");
  console.log(button);
  button.value = startDate;
  button.innerHTML = startDate;
}


//FireBase Kitchen 





function getData()
{
  firebase.database().ref('/kitchen/').once('value').then(function(snapshot) 
  {
    var data = snapshot.val();
    console.log(data);
    var kCount = document.getElementById("kitchenCapacity");
    var title = data.event1.description;
    console.log(title);
    //kCount.innerHTML = title;

});
}






