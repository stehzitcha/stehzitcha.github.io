// Random Stars for the background

document.addEventListener('DOMContentLoaded', (event) => {
    
    var generateStars = function(){
        
        var $galaxy = document.querySelector('.galaxy');
        var iterator = 0;
        
        while (iterator <= 50){
            var xposition = Math.random();
            var yposition = Math.random();
            var star_type = Math.floor((Math.random() * 3) + 1);
            
            var position = {
                "x" : $galaxy.offsetWidth * xposition,
                "y" : $galaxy.offsetHeight * yposition,
            };
    
            var newEl = document.createElement('div');
            newEl.classList.add('star', `star-type${star_type}`);
            
            $galaxy.appendChild(newEl)

            newEl.style.top = `${position.y}px`;
            newEl.style.left = `${position.x}px`;
     
            iterator++;
        }
        
      };
    
      generateStars();
})
