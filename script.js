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

  