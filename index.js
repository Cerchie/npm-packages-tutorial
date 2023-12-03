
  
      function startMotion() {

    
        let motionInstance = null;

      
        // Get form values
        const mass =  parseInt(document.getElementById("mass").value);
        const stiffness = parseInt(document.getElementById("stiffness").value);
        const damping = parseInt(document.getElementById("damping").value);
        const velocity =  parseInt(document.getElementById("velocity").value);

            // Validate input values
    if (isNaN(mass) || isNaN(stiffness) || isNaN(damping) || isNaN(velocity)) {
      alert('Please enter valid numeric values for all fields.');
    }

  
        // Create motion using Anime.js
        motionInstance =  anime({
          targets: '.thingy',
          translateX: 200,
          direction: 'alternate',
          autoplay: true,
          loop: 2,
          easing: `spring(${mass}, ${stiffness}, ${damping}, ${velocity})`
        })

        motionInstance.play();
      }
  
  