//create manager card
const managerCard = function (manager) {
    return `
    <div class="col-4 mt-4">
    <div class="cardHeader">
    <h2>${manager.name}</h2>
    <h3>Manager</h3>
    </div>

    <div class="cardBody">
    <p class="id">ID: ${manager.id}</p>
    <p class="email">E-Mail: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
    </div></div>
    `;
}
//create engineer card
const engineerCard = function (engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="cardHeader">
    <h2>${engineer.name}</h2>
    <h3>Engineer</h3>
    </div>

    <div class="cardBody">
    <p class="id">ID: ${engineer.id}</p>
    <p class="email">E-Mail: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p class="github">Gitub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div></div>
    `;
}
//create intern card
const internCard = function (intern) {
    return `
    <div class="col-4 mt-4">
    <div class="cardHeader">
    <h2>${intern.name}</h2>
    <h3>Intern</h3>
    </div>

    <div class="cardBody">
    <p class="id">ID: ${intern.id}</p>
    <p class="email">E-Mail: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="school">School: ${intern.school}</p>
    </div></div>
    `;
}

generateCards = (data) => {

    cardArray = []; 

    for (var i=0; i < data.length; i++) {
        const singleEmployee = data[i];
        const employeeRole = singleEmployee.getRole(); 

        if (employeeRole === 'Manager') {
            const filledManagerCard = managerCard(singleEmployee); 
            cardArray.push(filledManagerCard); 
        }
        if (employeeRole === 'Engineer') {
            const filledEngineerCard = engineerCard(singleEmployee); 
            cardArray.push(filledEngineerCard); 
        }
        if (employeeRole === 'Intern') {
            const filledInternCard = internCard(singleEmployee); 
            cardArray.push(filledInternCard); 
        }

    }

    const employeeCards = cardArray.join('');

    const generateLayout = generatePage(employeeCards); 
    return generateLayout; 

}


//generate html page

const generatePage = function (employeeCards) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
    <body> 
    <div class="row justify-content-center" id="allCards">
    ${employeeCards}
    </div>
    </body>
    `
}

module.exports = generateCards; 