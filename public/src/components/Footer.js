import FilterLink from '../containers/FilterLink'

import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div>
              
          <p>

            <FilterLink filter="SHOW_ALL">
              <RaisedButton label="Show all" style={style} />
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
              <RaisedButton label="Active" primary={true} style={style} />
            </FilterLink>
            <FilterLink filter="SHOW_COMPLETED">
              <RaisedButton label="Complated" secondary={true} style={style} />
            </FilterLink>
          </p>

        </div>

      </MuiThemeProvider>
    );
  }
}

export default Footer

