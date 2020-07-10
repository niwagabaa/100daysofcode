// Trying to play the audio when a key is presed by kistening to keydown event
window.addEventListener('keydown',function(e){
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Stopping the function if there is no audio element
    if (!audio) return;
});

console.log("Javascript is working");