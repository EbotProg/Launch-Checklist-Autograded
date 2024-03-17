// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
                                <ol>
                                    <li>Name: ${name}</li>
                                    <li>Diameter: ${diameter}</li>
                                    <li>Star: ${star}</li>
                                    <li>Distance from Earth: ${distance}</li>
                                    <li>Number of Moons: ${moons}</li>
                                </ol>
                                <img src="${imageUrl}">`
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if(testInput == ""){

        return "Empty"

    }
    else if(isNaN(testInput) == false){

        return "Is a Number"

    }
    else{

        return "Not a Number"

    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus")
    const fuelStatus = document.getElementById("fuelStatus")
    const cargoStatus = document.getElementById("cargoStatus")
    const launchStatus = document.getElementById("launchStatus")
    
    list.style.visibility = "visible";//make faulty items div to display on every submission

    const pilotIsReady = checkCrewMember(pilot, pilotStatus, launchStatus, "Pilot")
    const copilotIsReady = checkCrewMember(copilot, copilotStatus, launchStatus, "Copilot")
    const fuelLevelIsHigh = checkFuelLevel(fuelLevel, fuelStatus, launchStatus);
    const cargoLevelIsLow = checkCargolevel(cargoLevel, cargoStatus, launchStatus);

    if( 
        pilotIsReady == true && 
        copilotIsReady == true && 
        fuelLevelIsHigh == true && 
        cargoLevelIsLow == true
    ) {
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green"
    }

 }

function checkCrewMember(crewInput, crewStatus, launchStatus, crewRoleStr) {
    if (validateInput(crewInput) === "Empty" || validateInput(crewInput) === "Is a Number") {
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
      crewStatus.textContent = `${crewRoleStr} is not Ready`;
      return false;
    } else if (validateInput(crewInput) === "Not a Number") {
        crewStatus.textContent = `${crewInput} is Ready`;
      return true;
    }
  }

  function checkFuelLevel(fuelLevel, fuelStatus, launchStatus) {

    if (Number(fuelLevel) < 10000 || validateInput(fuelLevel) === "Not a Number") {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    
        if (Number(fuelLevel) < 10000) {
          fuelStatus.innerHTML = "There is not enough fuel for the journey";
        } else {
          fuelStatus.innerHTML = "The amount of fuel is not valid";
        }
        return false;
      } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        return true;
      }

  }

  function checkCargolevel(cargoLevel, cargoStatus, launchStatus) {

    if(Number(cargoLevel) > 10000 || validateInput(cargoLevel) == "Empty" || validateInput(cargoLevel) == "Not a Number"){

        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "red"
    
        if(Number(cargoLevel) > 10000){
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off"
        } 
        else if(validateInput(cargoLevel) == "Empty") {
            cargoStatus.innerHTML = "There is no mass for the shuttle to take off"
        }else if(validateInput(cargoLevel) == "Not a Number") {
            cargoStatus.innerHTML = "Cargo mass is invalid"
        } 
        return false
    }
    else{
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        return true;
    }
  }
 
 async function myFetch(url) {
     let planetsReturned;
 
     planetsReturned = fetch(url).then( async function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    const index = Math.floor(Math.random() * 7);

    return planets[index];
 }

 function addAlert(document) {
    const myForm = document.forms[0];
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "*All fields are required";
    myForm.insertBefore(newParagraph, myForm.firstChild);

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
 module.exports.addAlert = addAlert;