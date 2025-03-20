const url = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderUsers(data);
  } catch (error) {
    console.log(error);
  }
}

function renderUsers(data) {
  const main = document.getElementById("container");

  data.forEach(info => {
    const name = info.name;
    const username = info.username;
    const email = info.email;

    const card = document.createElement("div");
    card.className = "card";

    const container = document.createElement("div");
    container.className = "div_container";

    const sName = document.createElement("span");
    sName.innerHTML = `<strong>Name:</strong> ${name}<br>`;
    const sUserName = document.createElement("span");
    sUserName.innerHTML = `<strong>Username:</strong> ${username}<br>`;
    const sEmail = document.createElement("span");
    sEmail.innerHTML = `<strong>Email:</strong> ${email}<br>`;

    const btn = document.createElement("button");
    btn.className = "btn_detail";
    btn.textContent = "details";

    container.appendChild(sName);
    container.appendChild(sUserName);
    container.appendChild(sEmail);
    container.appendChild(btn);
    card.appendChild(container);

    btn.addEventListener("click", () => detail(info, card, btn, container));

    main.appendChild(card);
  });
}

function detail(info, card, btn, container) {
  const existingDetails = card.querySelector(".div_details");

  if (existingDetails) {
    existingDetails.remove();
    container.appendChild(btn); 
    return;
  }

  container.removeChild(btn); 

  const city = info.address.city;
  const phone = info.phone;
  const companyName = info.company.name;

  const div = document.createElement("div");
  div.className = "div_details";

  const sCity = document.createElement("span");
  sCity.innerHTML = `<strong>City:</strong> ${city}<br>`;
  const sPhone = document.createElement("span");
  sPhone.innerHTML = `<strong>Phone:</strong> ${phone}<br>`;
  const sCompanyName = document.createElement("span");
  sCompanyName.innerHTML = `<strong>Company Name:</strong> ${companyName}<br>`;

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "close";
  closeBtn.className = "close-btn"; 

  div.appendChild(sCity);
  div.appendChild(sPhone);
  div.appendChild(sCompanyName);
  div.appendChild(closeBtn);
  card.appendChild(div);

  closeBtn.addEventListener("click", () => {
    div.remove();
    container.appendChild(btn);
  });
}


fetchUsers();