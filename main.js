function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
    
// var totalCount = 5;
function ChangeIt() {

}
 
    ChangeIt();
    
//code for click functionality
 const items=document.querySelectorAll('.key');

  function clickTrigger(){
  let key=(this.dataset.key);
  const audio=document.querySelector(`audio[data-key="${key}"]`);
  const item=this;
  item.classList.add('play');
  audio.currentTime = 0;
  audio.play();

  }

  function unclickTrigger(){
  this.classList.remove('play');
 }
 items.forEach(item=>item.addEventListener('mousedown',clickTrigger));
 items.forEach(item=>item.addEventListener('mouseup',unclickTrigger));    

$(document).ready(function(){
    var classCycle=['imageCycle1','imageCycle2' ,'imageCycle3' ,'imageCycle4' ,'imageCycle5'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];
    
    $('body').addClass(classToAdd);

});
