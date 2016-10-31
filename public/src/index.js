
import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import {deepOrange500} from 'material-ui/styles/colors'
import {orange500, blue500} from 'material-ui/styles/colors'

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
}

const paperStyle = {
  'display': 'flex',
  'justify-content': 'center',
  'align-items':'center',
  'flex-direction':'column',
  'margin':'20',
  'padding':'20',
}

const buttonStyle = {
  'width':'100%',
  'display': 'flex',
  'margin-top':'40',
  'flex-direction': 'row',
  'justify-content':'space-between',
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
})

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      open: false,
      openWrongGuy: false,
      openEmpty: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClean = this.handleClean.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    if ('john' === this.state.value) {
      this.setState({open: true})
    }
    else if ('' === this.state.value){
      this.setState({openEmpty: true})
    }
    else {
      this.setState({openWrongGuy: true})
    }
  }

  handleClean(event) {
    this.setState({value: ''})
  }

  handleClose(event) {
    this.setState({
      open: false,
      openEmpty: false,
      openWrongGuy: false,
    })
  }

  render() {

    const actions = [
      <FlatButton
        label="Got it"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ]

    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div>

          <Paper style={paperStyle} zDepth={2} >
            <span>
              <TextField
                hintText="Input your real name"
                underlineStyle={styles.underlineStyle}
                value={this.state.value}
                onChange={this.handleChange}
              /><br />
            </span>

            <div style={buttonStyle}>
              <RaisedButton
                label="Clean"
                primary={true}
                onClick={this.handleClean}
              />
              <RaisedButton
                label="Confirm"
                secondary={true}
                onClick={this.handleSubmit}
              />
            </div>
          </Paper>

          <Dialog
            title="Welcome Honey"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Happy Halloween!
          </Dialog>

          <Dialog
            title="Dead End"
            actions={actions}
            modal={false}
            open={this.state.openWrongGuy}
            onRequestClose={this.handleClose}
          >
            You are not the Mr. Right!
          </Dialog>

          <Dialog
            title="Empty Input"
            actions={actions}
            modal={false}
            open={this.state.openEmpty}
            onRequestClose={this.handleClose}
          >
            What the fcuk do you want to do?
          </Dialog>

        </div>

      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
)

