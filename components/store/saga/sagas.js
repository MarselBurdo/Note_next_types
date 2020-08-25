import * as types from '../types'

const fetchOnServer = async (id) =>{
  const response = await fetch(`http://localhost:4444/notes/${id}`)
  const note = await response.json()
  return note
}

function* showOneNote(action) {
  
}
