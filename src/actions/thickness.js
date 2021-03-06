import clamp from 'lodash/clamp'

export function setThickness (thicknessId) {
  return (dispatch, getState) => {
    const thickness = clamp(thicknessId, 0, getState().recording.thicknesses.length - 1)

    return dispatch({
      type: 'SET_THICKNESS',
      payload: thickness
    })
  }
}

export function increaseThickness (thicknessId) {
  return (dispatch, getState) => {
    return dispatch(setThickness(getState().recording.thicknessId + 1))
  }
}

export function decreaseThickness (thicknessId) {
  return (dispatch, getState) => {
    return dispatch(setThickness(getState().recording.thicknessId - 1))
  }
}
