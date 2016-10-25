import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import {deepOrange500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

let AddTodo = ({ dispatch }) => {
  let input

  return (

    <MuiThemeProvider muiTheme={muiTheme}>

      <div>

        <form onSubmit={e => {

          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>

          <input ref={node => {
            input = node
          }} />

          <RaisedButton type="submit" label="Add todo" style={style} />

        </form>

      </div>

    </MuiThemeProvider>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
