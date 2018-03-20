//javascript Document

var imageArray = [];

imageArray[0] =  "../website images/website images/slider images/shop 2-11.png";// set src string for image 1

imageArray[1] = "../website images/website images/slider images/image-display.png";// set src string for image 2

imageArray[2] = "../website images/website images/slider images/shop3.png";



imageArray[3] = "../website images/website images/slider images/slider-4.png";

var counter = 0; // counter starts at 0 for function below

function updateImg() {

    document.getElementById("mySlides3").src = imageArray[counter]; 

    counter++; // add one to the counter

    if (counter >= imageArray.length) // if the counter reaches the legnth of the array run code below.
    {
        counter = 0; // reset counter so it restarts.
    }
}

 



var imageArrayAbout =[]; 

imageArrayAbout[0] = "../website images/website images/slider images/fair-trade-clothing-hero.png"; 

imageArrayAbout[1] = "../website images/website images/slider images/wool.png";

imageArrayAbout[2] = "../website images/website images/Clothing-name.png";

imageArrayAbout[3] = "../website images/website images/slider images/We-Made-Your-Clothes-Fashion-Revloution.jpg";
var counter = 0; 

function updateImgAbout() {

    document.getElementById("clothesmaker").src = imageArrayAbout[counter] ;

    counter++; 

    if (counter >= imageArrayAbout.length) 
    {
        counter = 0; 
    }
}

 
var imageArrayLadies = []; 

imageArrayLadies[0] = "../website images/website images/slider images/girl-clothes2.png"; 

imageArrayLadies[1] = "../website images/website images/slider images/girl-clothes.png";

imageArrayLadies[2] = "../website images/website images/slider images/tumblr_static_clothes2.png";

imageArrayLadies[3] = "../website images/website images/slider images/slider-5.png"; 



var counter = 0; 

function updateImgLadies() {

    document.getElementById("mySlides2").src = imageArrayLadies[counter]; 

    counter++; 

    if (counter >= imageArrayLadies.length) 
    {
        counter = 0; 
    }
}

            function checkFields() {
 
            var name = document.getElementById("nameInput").value; 
            var email = document.getElementById("emailInput").value;
            var country = document.getElementById("countryInput").value;
            var message=document.getElementById("messageInput").value;
            var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex variable
            
                if (name ==="" || !isNaN (name) || country === "" || !isNaN (country)){
            alert ( "Name and Country cannot be a number or an empty field");
        }
        
              else if(email === "" || !emailRegex.test(email)){
                   alert ("Please enter a valid email");
               }
               
               else if (message ==="" ||!isNaN ("message")){
                   alert("Please input a message");
               }
               else {
                   alert("Thank you, we will contact you shortly");
               }
            }
           