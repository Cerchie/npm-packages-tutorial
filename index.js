// Get input values
function spring() {
    const mass =  parseFloat(document.getElementById("mass").value);
    const stiffness = parseFloat(document.getElementById("stiffness").value);
    const damping = parseFloat(document.getElementById("damping").value);
    const velocity =  parseFloat(document.getElementById("velocity").value);


    // Validate input values
    if (isNaN(mass) || isNaN(stiffness) || isNaN(damping) || isNaN(velocity)) {
      alert('Please enter valid numeric values for all fields.');
    }



    var animation = anime({
        targets: '.thingy',
        translateY: 20,
        direction: 'alternate',
        autoplay: true,
        loop: true,
        easing: `spring(${mass}, ${stiffness}, ${damping}, ${velocity}`
      })
      console.log(mass)
    document.querySelector('.pause').onclick = animation.pause;
    }
  
