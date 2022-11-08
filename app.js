const postalCode = document.querySelectorAll('input[type="number"]').forEach(input => {
  input.oninput = () => {
    if (input.value.length > input.maxLength) input.value = input.value.slice (0, input.maxLength)
  }
});;
const form = document.getElementById('form');

const userCode = document.getElementById("cp");
const fedex = document.getElementById('parcel1');
const dhl = document.getElementById('parcel2');
const fedexBox = document.querySelector(".fedex");
const dhlBox = document.querySelector(".dhl");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fedex.innerHTML = '';
  dhl.innerHTML = '';

  fetchFedexApi(userCode.value);
  fetchDHLApi(userCode.value)
  userCode.value = '';
});

function fetchFedexApi(code) {
  fedexBox.classList.remove("hidden");

  const url = `https://sistema.globalpaq.mx/api/v2/public/fedex/cobertura?cp_origen=44360&cp_destino=${code}`
  fetch(url, {
    headers: {
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njc4NTE3OTUsImV4cCI6MTY5OTM4Nzc5NSwiZGF0YSI6eyJpZCI6NzMwMTksIm5hbWUiOiJEYW5pZWwiLCJlbWFpbCI6ImxkbXM5OUBob3RtYWlsLmNvbSIsImV4Y2VkZW50ZSI6MCwic2VndXJvIjowLCJtdWx0aSI6MCwicmVjb2xlY2Npb24iOjB9fQ.0EwaHOF_9KZhv0SXa9HkC96Vgm6Z44N4Nxg0KbLFFJ0',
    }
  })
  .then(response => response.json())
  .then(data => {
    const { data: { message }} = data;
    fedex.innerHTML = message;
    (fedex.innerText.includes('x')) ? zonaExtendida() : zonaExtendida();
  })
}

function fetchDHLApi(code) {
  dhlBox.classList.remove("hidden");

  const url = `https://sistema.globalpaq.mx/api/v2/public/dhl/cobertura?cp_origen=44360&cp_destino=${code}`
  fetch(url, {
    headers: {
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njc4NTE3OTUsImV4cCI6MTY5OTM4Nzc5NSwiZGF0YSI6eyJpZCI6NzMwMTksIm5hbWUiOiJEYW5pZWwiLCJlbWFpbCI6ImxkbXM5OUBob3RtYWlsLmNvbSIsImV4Y2VkZW50ZSI6MCwic2VndXJvIjowLCJtdWx0aSI6MCwicmVjb2xlY2Npb24iOjB9fQ.0EwaHOF_9KZhv0SXa9HkC96Vgm6Z44N4Nxg0KbLFFJ0',
    }
  })
  .then(response => response.json())
  .then(data => {
    const { data: { message }} = data;
    dhl.innerHTML = message;
    (dhl.innerText.includes('x')) ? zonaExtendida() : zonaExtendida()
  })
}

function zonaExtendida() {
  (fedex.innerText.includes('x')) ? fedexBox.classList.add('extendida') : fedexBox.classList.remove('extendida');
  (dhl.innerText.includes('x')) ? dhlBox.classList.add('extendida') : dhlBox.classList.remove('extendida');
}
