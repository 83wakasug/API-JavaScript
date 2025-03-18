
const url = 'https://jsonplaceholder.typicode.com/users';




fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   data.forEach(info => {

    const name = info.name;
    const username = info.username;
    const email = info.email;
  
    
    
    
   });


  })
  .catch(function(error) {
    console.log(error);
  });


  function detail(info){
    const city = info.address.city;
    const phone = info.phone;
    const companyName = info.company.name;

  }