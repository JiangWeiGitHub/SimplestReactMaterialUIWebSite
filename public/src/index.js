
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
    if ('aaa' === this.state.value) {
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
        label="晓得了"
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
                hintText="请输入真实姓名"
                underlineStyle={styles.underlineStyle}
                value={this.state.value}
                onChange={this.handleChange}
              /><br />
            </span>

            <div style={buttonStyle}>
              <RaisedButton
                label="清 除"
                primary={true}
                onClick={this.handleClean}
              />
              <RaisedButton
                label="确 认"
                secondary={true}
                onClick={this.handleSubmit}
              />
            </div>
          </Paper>

          <Dialog
            title="欢迎亲 ^_^"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            么么哒
          </Dialog>

          <Dialog
            title="此路不通"
            actions={actions}
            modal={false}
            open={this.state.openWrongGuy}
            onRequestClose={this.handleClose}
          >
            你不是我要等的有缘人！
          </Dialog>

          <Dialog
            title="没空和你玩"
            actions={actions}
            modal={false}
            open={this.state.openEmpty}
            onRequestClose={this.handleClose}
          >
            不输入内容，你想上天呀？
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

