
const url = 'https://jsonplaceholder.typicode.com/users';




fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

   const main = document.getElementById("main");

   data.forEach(info => {

    const name = info.name;
    const username = info.username;
    const email = info.email;
  
    const card =document.createElement("div");
    card.className="card";

    const container =document.createElement("div");
    container.className="container";


    const sName = document.createElement("span");
    sName.innerHTML = `<strong>Name:</strong> ${name}</br>`;
    const sUserName = document.createElement("span");
    sUserName.innerHTML = `<strong>Username:</strong> ${username}</br>`;
    const semail = document.createElement("span");
    semail.innerHTML = `<strong>Email:</strong> ${email}</br>`;
    
    const btn= document.createElement("button");
    btn.className="btn_detail";
    btn.id="btn"
    btn.textContent="details"

    

    container.appendChild(sName);
    container.appendChild(sUserName);
    container.appendChild(semail);
    container.appendChild(btn);
    card.appendChild(container);

    btn.addEventListener("click", () => detail(info, card));
    main.appendChild(card);


    
   });


  })
  .catch(function(error) {
    console.log(error);
  });


  function detail(info, card, btn) {
    const existingDetails = card.querySelector(".div_details");
  
    if (existingDetails) {
      existingDetails.remove();
      btn.innerHTML = "details";
      return;
    }
  
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
  
    div.appendChild(sCity);
    div.appendChild(sPhone);
    div.appendChild(sCompanyName);
    card.appendChild(div);
  
    btn.innerHTML = "close";
  }