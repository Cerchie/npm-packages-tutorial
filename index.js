// Get input values
function updateValue(){
    const mass =  parseFloat(document.getElementById("mass").value);
    const stiffness = parseFloat(document.getElementById("stiffness").value);
    const damping = parseFloat(document.getElementById("damping").value);
    const velocity =  parseFloat(document.getElementById("velocity").value);
  
    console.log(mass, stiffness)
    return {mass: mass, stiffness: stiffness, damping: damping, velocity: velocity}
}

function spring(){

    const mass = updateValue().mass;
    const stiffness = updateValue().stiffness;
    const damping = updateValue().damping;
    const velocity = updateValue().velocity;
    console.log('spring',mass, stiffness)

    // Validate input values
    if (isNaN(mass) || isNaN(stiffness) || isNaN(damping) || isNaN(velocity)) {
      alert('Please enter valid numeric values for all fields.');
    }

    var animation = anime({
        targets: '.thingy',
        translateX: 200,
        direction: 'alternate',
        loop: true,
        easing: `spring(${mass}, ${stiffness}, ${damping}, ${velocity}`
      })

    document.querySelector('.play').onclick = animation.play;
    document.querySelector('.pause').onclick = animation.pause;

    }

