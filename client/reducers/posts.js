// According to each state we should have a distinct reducer
//reducer is a function with acccept two diffrent argument first is the current satate and the second is about the action that we're going to do

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
