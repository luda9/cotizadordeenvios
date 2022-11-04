const url = 'https://staging-app.enviosperros.com/api/v2/shipping/rates';

const apiKey = 'zi7YJxULkOcUevMpMq1gGTNBbZtmLQkH1XuT2CjN';

function envios() {
  var request = new XMLHttpRequest();

  request.open('POST', 'https://staging-app.enviosperros.com/api/v2/shipping/rates');

  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authentication', `Bearer ${apiKey}`);

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

  var body =     {
          'api_token':apiKey,
          'depth': '20',
          'width': '20',
          'height': '20',
          'weight': '1',
          'origin': {
              'codePostal': '45130'
          },
          'destination': {
              'codePostal': '64000'
          },
  };

  request.send(JSON.stringify(body));
}

async function getEnvios() {
  const resultado = await envios();

  console.log(resultado);
}

getEnvios();
