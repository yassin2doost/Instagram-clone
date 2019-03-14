// According to each state we should have a distinct reducer
//reducer is a function with acccept two diffrent argument first is the current satate and the second is about the action that we're going to do

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMEMNT_LIKES":
      const i = action.index;
      return [
        ...sate.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...sate.slice(i + 1)
      ];
    default:
      return state;
  }
}

export default posts;
