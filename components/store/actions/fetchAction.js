import * as types from '../types'

export const showNotes = () => async dispatch => {
  const resp = await fetch('http://localhost:4444/notes')
  const resF = await resp.json()
  dispatch({
    type: types.SHOW_NOTES,
    payload: resF
  })
}
