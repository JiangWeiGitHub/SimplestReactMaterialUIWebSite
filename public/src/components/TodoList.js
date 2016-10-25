import React, { PropTypes } from 'react'
import Todo from './Todo'

import {deepOrange500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  width: 250,
  margin: 10,
  textAlign: 'left',
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const TodoList = ({ todos, onTodoClick }) => (

  <MuiThemeProvider muiTheme={muiTheme}>
 
    <Paper style={style} zDepth={2}>

      <ul>

        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )}

      </ul>

    </Paper>

  </MuiThemeProvider>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
