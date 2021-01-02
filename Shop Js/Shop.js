(function (){
    "use Strict";
  //  var selectedIndex=document.getElementById('s-state').selectedIndex;
  //  var selectedValue=document.getElementById('s-state').option[selectedIndex].value;
    document.getElementById('cart-hplus').addEventListener('submit',caltotal);
function caltotal(event){
    event.preventDefault();
    if(document.getElementById('s-state')=== ''){
        alert('please choose your shipping state.');
        document.getElementById('s-state');

    }
}
})();