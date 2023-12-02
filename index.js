
  




      let isMotionActive = false;
      let motionInstance = null;
  
      function toggleMotion() {
        if (isMotionActive) {
          // Stop the motion
          motionInstance.pause();
        } else {
          // Start the motion
          startMotion();
        }
  
        // Toggle motion status
        isMotionActive = !isMotionActive;
      }
  
      function startMotion() {
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
          translateY: 20,
          direction: 'alternate',
          autoplay: true,
          loop: true,
          easing: `spring(${mass}, ${stiffness}, ${damping}, ${velocity}`,
  
        })
      }
  
      function updateMotion() {
        // Stop the motion if active
        if (isMotionActive) {
          motionInstance.pause();
          isMotionActive = false;
        }
  
        // Update motion with new form values
        startMotion();
      }
