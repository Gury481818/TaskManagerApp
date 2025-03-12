export const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, { id: Date.now(), text: action.text, completed: false }];
      case "DELETE_TASK":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };
  