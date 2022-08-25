// AddEventListner   ::   It takes two arguments one is event
// and other is a function without parenthensis
//We also pass it anonymous function that does'nt have any name
// function(){ code for function}


var but = document.querySelectorAll('.drum').length;  //returns total buttons with this class
// but[0].addEventListener('click',hel);
// but[1].addEventListener('click',hel);
// but[2].addEventListener('click',hel);
// but[3].addEventListener('click',hel);
// but[4].addEventListener('click',hel);
// but[5].addEventListener('click',hel);
// but[6].addEventListener('click',hel);

//Shortest way to select buttons
/*
for(var i =0;i<but;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        //this.style.color="white";
        var e = this.textContent;
        switch(e){
            
            case 'w':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'a':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case 'k':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('sounds/kick.mp3');
                audio.play();
                break;
            default:
                alert('Something Went Wrong!');
            
                
        }


    })}
*/
    //Key Board listner

    // For adding key board listner we use keydown 
    
    //sample syntax
    //document.addEvenListner('keydown',function(){})

    //If we pass an argument called event to function
    //  This tells us the info about when key is pressed all of its attributes
    // But we can focus on event.key : this returns the key we pressed

    // document.addEventListener('keydown',function(event){
    //     console.log(event.key);
    // })

    // the following will only execute when a is pressed it plays the sound


    //Now adding this to our site




    for(var i =0;i<but;i++){
        document.querySelectorAll('.drum')[i].addEventListener('click',function(){
            //this.style.color="white";
            var e = this.textContent;
            mixedsound(e);
            buttonAnimation(e);
            
            
    
    
        })}

// Code for event Listners for Keyboard

document.addEventListener('keydown',function(event){
    mixedsound(event.key);
    buttonAnimation(event.key);
})




    //Funtion for Making sounds 

function mixedsound(key){

        switch(key){
                
            case 'a':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'f':   
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case 'k':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('sounds/kick.mp3');
                audio.play();
                break;
            default:
                console.log('Something Went Wrong!');
            
                
        }
    }


/* Call Backs and Call Back Funtion
 The function that returns something to object 
 with an event occurs is called callback function.
 The object call that function. */



 //Adding Animations to site

 function buttonAnimation(currentkey)
 
 {
    

    var activeButton = document.querySelector('.'+currentkey);
    activeButton.classList.add('pressed');
    setTimeout(() => {
        activeButton.classList.remove('pressed');
        
    }, 100);    
        

    
 }
    


    
