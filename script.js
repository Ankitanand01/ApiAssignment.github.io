const data_btn = document.getElementById('data_btn');
data_btn.addEventListener('click',getData);

function getData() {
    url = "https://random-data-api.com/api/v2/users ";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".image").innerHTML = `<img src="${data.avatar}"> `;
        document.querySelector(".title").innerText = `Name:- ${data.first_name} ${data.last_name}`;
        document.querySelector(".email").innerText = `E-Mail Id:- ${data.email}`;
        document.querySelector(".mobile").innerText = `Telephone:- ${data.phone_number}`;
        document.querySelector(".dateofbirth").innerText = `Date Of Birth:- ${data.date_of_birth}`;
      });
  }
 getData();
