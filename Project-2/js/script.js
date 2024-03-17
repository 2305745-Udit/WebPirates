const API_ENDPOINT = 'https://kodessphere-api.vercel.app';

function toggleBulb() {
  const currentState = document.getElementById('bulbState').innerText;
  const newState = currentState === 'State: Off' ? 'State: On' : 'State: Off';

  // Construct the request body
  const requestBody = {
    teamid: 'aEb3tne',
    device: 'bulb',
    value: newState === 'State: On' ? 1 : 0
  };

  // Send a POST request to the API endpoint
  fetch(API_ENDPOINT + '/devices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('bulbState').innerText = newState;
    } else {
      throw new Error('Failed to toggle bulb');
    }
  })
  .catch(error => {
    console.error('Error toggling bulb:', error);
  });
}

function chooseLEDColor() {
  const color = prompt('Enter color code (e.g., #ff0000):', '#ffffff');
  if (color !== null) {
    document.getElementById('ledColor').innerText = `Color: ${color}`;

    // Construct the request body
    const requestBody = {
      teamid: 'aEb3tne',
      device: 'led',
      value: color
    };

    // Send a POST request to the API endpoint
    fetch(API_ENDPOINT + '/devices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to set LED color');
      }
    })
    .catch(error => {
      console.error('Error setting LED color:', error);
    });
  }
}

function toggleACState() {
  const currentState = document.getElementById('acState').innerText;
  const newState = currentState === 'State: Off' ? 'State: On' : 'State: Off';

  // Construct the request body
  const requestBody = {
    teamid: 'aEb3tne',
    device: 'ac',
    value: newState === 'State: On' ? 1 : 0
  };

  // Send a POST request to the API endpoint
  fetch(API_ENDPOINT + '/devices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('acState').innerText = newState;
    } else {
      throw new Error('Failed to toggle air conditioner state');
    }
  })
  .catch(error => {
    console.error('Error toggling air conditioner state:', error);
  });
}

function decreaseTemperature() {
  const currentTemperature = parseInt(document.getElementById('acTemperature').innerText.split(' ')[1]);
  const newTemperature = Math.max(currentTemperature - 1, 16);

  // Construct the request body
  const requestBody = {
    teamid: 'aEb3tne',
    device: 'ac',
    value: {
      temp: newTemperature,
      state: 1 // Assuming we always want to turn on the AC when adjusting temperature
    }
  };

  // Send a POST request to the API endpoint
  fetch(API_ENDPOINT + '/devices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('acTemperature').innerText = `Temperature: ${newTemperature}°C`;
    } else {
      throw new Error('Failed to decrease air conditioner temperature');
    }
  })
  .catch(error => {
    console.error('Error decreasing air conditioner temperature:', error);
  });
}

function increaseTemperature() {
  const currentTemperature = parseInt(document.getElementById('acTemperature').innerText.split(' ')[1]);
  const newTemperature = Math.min(currentTemperature + 1, 30);

  // Construct the request body
  const requestBody = {
    teamid: 'aEb3tne',
    device: 'ac',
    value: {
      temp: newTemperature,
      state: 1 // Assuming we always want to turn on the AC when adjusting temperature
    }
  };

  // Send a POST request to the API endpoint
  fetch(API_ENDPOINT + '/devices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('acTemperature').innerText = `Temperature: ${newTemperature}°C`;
    } else {
      throw new Error('Failed to increase air conditioner temperature');
    }
  })
  .catch(error => {
    console.error('Error increasing air conditioner temperature:', error);
  });
}
