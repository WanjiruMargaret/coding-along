// Contact Constructor
function Contact(name, phone, email, address) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
  
  // AddressBook Constructor
  function AddressBook() {
    this.contacts = [];
  }
  
  AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
  };
  
  AddressBook.prototype.findContact = function(name) {
    return this.contacts.find(contact => contact.name === name);
  };
  
  AddressBook.prototype.deleteContact = function(name) {
    this.contacts = this.contacts.filter(contact => contact.name !== name);
  };



// Constructor for a Place
function Place(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
  }
  
  // Constructor for the TravelLog (to store all places)
  function TravelLog() {
    this.places = [];
  }
  
  TravelLog.prototype.addPlace = function(place) {
    this.places.push(place);
  };
  
  TravelLog.prototype.findPlace = function(location) {
    return this.places.find(function(place) {
      return place.location === location;
    });
  };
  
  // Initialize a new TravelLog
  let myTravelLog = new TravelLog();
  
  // Function to update the UI list
  function updatePlaceList() {
    const list = document.getElementById("placesList");
    list.innerHTML = ""; // Clear list first
  
    myTravelLog.places.forEach(function(place) {
      const li = document.createElement("li");
      li.textContent = place.location;
      li.classList.add("place-name");
      li.addEventListener("click", function() {
        showPlaceDetails(place);
      });
      list.appendChild(li);
    });
  }
  
  // Function to display place details
  function showPlaceDetails(place) {
    const details = document.getElementById("placeDetails");
    details.innerHTML = `
      <h3>${place.location}</h3>
      <p><strong>Landmarks:</strong> ${place.landmarks.join(", ")}</p>
      <p><strong>Time of Year:</strong> ${place.timeOfYear}</p>
      <p><strong>Notes:</strong> ${place.notes}</p>
    `;
  }
  
  // Handle form submission
  document.getElementById("placeForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    const location = document.getElementById("location").value.trim();
    const landmarks = document.getElementById("landmarks").value.split(",").map(item => item.trim());
    const timeOfYear = document.getElementById("timeOfYear").value.trim();
    const notes = document.getElementById("notes").value.trim();
  
    // Create a new Place and add it to the TravelLog
    const newPlace = new Place(location, landmarks, timeOfYear, notes);
    myTravelLog.addPlace(newPlace);
  
    // Reset form and update UI
    this.reset();
    updatePlaceList();
  });
  