const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function playNote(note) {
  // we need to get the right <audio> element
  // based on the note passed in
  console.log(note, `${note}Audio`)
  let element = document.getElementById(`${note}Audio`);

  element.currentTime = 0
  element.play()
}

function clickHandler (event) {
  event.preventDefault()

  // we need to figure out which note is associated with the event
  let note = event.target.innerText
  console.log(note)
  // and then ask the audio element to play it for us
  playNote(note)
}


function keyHandler (event) {
  event.preventDefault()

  // get the tthat was pressed from the event
  let key = event.key

  // figure out if the key that was pressed is one of my musical keyboard key
  if (notes.includes(key)) { // indexOf can also be used
    // play the note!
    playNote(key)
  }


}


document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByClassName("note")
  for (button of buttons) {
// attaches a calback to button clicks
    button.addEventListener("click", clickHandler)
  }


// attaches a callback to keyboard events
  document.body.addEventListener("keypress", keyHandler)
})
