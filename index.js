

function spring() {
    // Get input values
    const mass = parseFloat(document.getElementById('mass').value);
    const stiffness = parseFloat(document.getElementById('stiffness').value);
    const damping = parseFloat(document.getElementById('damping').value);
    const velocity = parseFloat(document.getElementById('velocity').value);

    // Validate input values
    if (isNaN(mass) || isNaN(stiffness) || isNaN(damping) || isNaN(velocity)) {
      alert('Please enter valid numeric values for all fields.');
      return;
    }

    anime({
        targets: '.thingy',
        translateX: 250,
        direction: 'alternate',
        loop: true,
        easing: `spring(${mass}, 100, 10, 0`
      })

  }

function springMass(){
    const mass = parseFloat(document.getElementById('mass').value);

    anime({
        targets: '.massthingy',
        translateX: 250,
        direction: 'alternate',
        loop: true,
        easing: `spring(${mass}, , ${damping}, ${velocity})`
      })
}