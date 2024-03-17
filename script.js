// Write your JavaScript code here!

window.addEventListener("load", async function() {

    this.addAlert(document);//add alert at the top of the form to show that all fields are required
    
    const formSubmission = this.formSubmission
    const myForm = this.document.forms[0];

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const pilot  = myForm["pilotName"].value;
        const copilot  = myForm["copilotName"].value;
        const fuelLevel  = myForm["fuelLevel"].value;
        const cargoLevel  = myForm["cargoMass"].value;
        const list = document.getElementById("faultyItems")
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = this.myFetch("https://handlers.education.launchcode.org/static/planets.json");
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const {  name, diameter, star, distance, moons, image } = pickPlanet(listedPlanets)
        addDestinationInfo(document, name, diameter, star, distance, moons, image)
    })
    
 });