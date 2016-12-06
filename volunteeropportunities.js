var config = {
  apiKey: "AIzaSyCP_aB4ESWSrJLw3dK4onNuDDwBWAh_2cI",
  authDomain: "akshaya-patra-test.firebaseapp.com",
  databaseURL: "https://akshaya-patra-test.firebaseio.com",
  storageBucket: "akshaya-patra-test.appspot.com",
  messagingSenderId: "478900433771"
};
firebase.initializeApp(config);
var database = firebase.database(); 


var url = window.location.href;
var urlsplit = url.split('/');
var pageId = urlsplit[urlsplit.length - 1];
pageId = pageId.substring(pageId.length - 2);
var num = parseInt(pageId, 10);
if (!isNaN(num))
{
 
  customData(Math.floor(num/10), num%10);
}
    

//////////////////////////////////////////////////////////////////////
//IMPORTANT GLOBAL VARIABLES TO CHANGE
var kitchenVisible = false; 
var adminVisible = false; 
var officeVisible = false;
var truckVisible = false;
//////////////////////////////////////////////////////////////////////
//Call the appropriate functions to display the opportunities


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
        document.getElementById("foursquare").style.visibility='hidden';

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        numElems = snapshot.numChildren(); 
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!


        for (var i = 0; i < numElems; i++){
            kInfo = kInfo +  databaseEvents[i].description;
            //kInfo = kInfo + '<a href = "individualItemPage.html?id='+databaseEvents[i].id+'">';
            kInfo = kInfo +  '<img src="' + databaseEvents[i].image + '"/>' ;
            //kInfo = kInfo + '</a>';
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

        document.getElementById("foursquare").style.visibility='hidden';

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        numElems = snapshot.numChildren(); 
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        for (var i = 0; i < numElems; i++){
            kInfo = kInfo +  databaseEvents[i].description;
            //kInfo = kInfo + '<a href = "individualItemPage.html?id='+databaseEvents[i].id+'">';
            kInfo = kInfo +  '<img src="' + databaseEvents[i].image + '"/>' ;
            //kInfo = kInfo + '</a>';
        } 
        document.getElementById('officeOps').innerHTML = kInfo; 
      });
      //END DEFINITION
    officeVisible = true; 
    button.value = "Office: Visible!";
    button.innerHTML = "Office: Visible!";
  }
}

//GIVE ADMIN VARIABLE
function adminCall(){
  var button = document.getElementById("buttonC");
  console.log(button);
 if (adminVisible == true){
    document.getElementById('adminOps').innerHTML = "";
    adminVisible = false; 
    button.value = "Admin.: __";
    button.innerHTML = "Admin.: __";
  }
  else if (adminVisible == false){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/admin/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);
        document.getElementById("foursquare").style.visibility='hidden';

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        numElems = snapshot.numChildren(); 
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        for (var i = 0; i < numElems; i++){
            kInfo = kInfo +  databaseEvents[i].description;
            kInfo = kInfo +  '<img src="' + databaseEvents[i].image + '"/>' ;
        } 
        document.getElementById('adminOps').innerHTML = kInfo; 
      });
      //END DEFINITION
    adminVisible = true; 
    button.value = "Admin.: Visible!";
    button.innerHTML = "Admin.: Visible!";
  }
}

//GIVE TRUCK VARIABLE
function truckCall(){
  var button = document.getElementById("buttonS");
  console.log(button);

 if (truckVisible == true){
    document.getElementById('truckOps').innerHTML = "";
    truckVisible = false; 
    button.value = "Truck: __";
    button.innerHTML = "Truck: __";
  }
  else if (truckVisible == false){
    ///THIS IS VERY SUBJECT TO APPRECIATION
      firebase.database().ref('/truck/').once('value').then(function(snapshot) 
      {
        var data = snapshot.val();
        var databaseEvents = [data.event1, data.event2, data.event3, data.event4, data.event5, data.event6, data.event7, 
        data.event8, data.event9, data.event10, data.event11, data.event12, data.event13, data.event14, data.event15, data.event16, data.event17, 
        data.event18, data.event19, data.event20, data.event21, data.event22];

        console.log(data);
        document.getElementById("foursquare").style.visibility='hidden';

        //THIS NUMELEMS VARIABLE IS VERY IMPORTANT
        numElems = snapshot.numChildren(); 
        var kInfo = "";
        //THIS SHOULD DEFINITELY BE EDITED FOR DATE AND OTHER VARIABLES THAT NEED TO BE SORTED!!!!!!!!!
        for (var i = 0; i < numElems; i++){
            kInfo = kInfo +  databaseEvents[i].description;
            kInfo = kInfo +  '<img src="' + databaseEvents[i].image + '"/>' ;
        } 
        document.getElementById('truckOps').innerHTML = kInfo; 
      });
      //END DEFINITION
    truckVisible = true; 
    button.value = "Truck: Visible!";
    button.innerHTML = "Truck: Visible!";
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