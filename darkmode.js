// Dark Mode function

// paste this html in your html on top of the screen
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js">
    </script> */}


// html tags
//  <Button id="darkModeToogle">Dark Mode: <span id="dark_mode_status"></span></Button>

// Paste this CSS property
// #darkModeToogle {
//     margin-bottom: 10px;
//     cursor: pointer;
//     text-align: center;
//     padding: 5px;
//     margin-left: 8px;
//     border-radius: 20px;
//     background-color: #0069FF;
//     color: white;
//     border: none;
// }
// .dark{
//     background-color: rgb(37, 37, 37);
//     color: #e6e6e6;
// }


let darkToggle = document.getElementById('darkModeToogle');
darkToggle.addEventListener('click', () => {
    darkMode();
    
});
let toggleInfo= document.getElementById('dark_mode_status');
toggleInfo.innerHTML='OFF';
let darkCount=0;
const darkMode = () => {
    var element = document.body;
    element.classList.toggle("dark");
    var card = document.body;

    darkCount++;
    if(Number(darkCount)%2==0){
        toggleInfo.innerHTML= 'OFF';
    }
    else{
        toggleInfo.innerHTML= 'ON';
    } 
}