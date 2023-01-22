// action
export const darkModeAction = (val) => ({
  type: "DARKMODE",
  payload: val,
});

// reducer
const initialState = { darkMode: false };

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "DARKMODE":
      return { darkMode: !action.payload };
    default:
      return state;
  }
}
