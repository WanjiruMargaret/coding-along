function place(location,landmarks,timeOfYear,notes){
  this.location = location
  this.landmarks = landmarks
  this.timeOfYear=timeOfYear
  this.notes=notes
}
const places=[
  new place("new Place('Paris', 'Eiffel Tower, Louvre Museum', 'Spring', 'Great weather, amazing food!'"),
  new place('New York', 'Statue of Liberty, Central Park', 'Fall', 'Beautiful fall colors, busy city life'),
  new place('Tokyo', 'Shibuya Crossing, Tokyo Tower', 'Winter', 'Cold but festive vibes, lots of shopping'),
]
const placeList=document.getElementById("placeList")
places.forEach((place,index)=>{
  const placeDiv = document.createElement("div")
  placeDiv.className="place"
  placeDiv.innerText= place.location
  placeDiv.addEventListener('click',()=>{
    const display=document.getElementById("formSection-${index}")
  })
  const detailsDiv=document.createElement('div')
  detailsDiv.className = 'details';
            detailsDiv.id = `details-${index}`;
            detailsDiv.innerHTML = `
                <strong>Landmarks:</strong> ${place.landmarks}<br>
                <strong>Time of Year:</strong> ${place.timeOfYear}<br>
                <strong>Notes:</strong> ${place.notes}
            `
            placeDiv.appendChild(detailsDiv)
            placeList.appendChild(placeDiv)

})
  