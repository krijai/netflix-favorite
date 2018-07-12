import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

class InputField extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Input
          placeholder="Placeholder"
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
      </div>
    );
  }
}

InputField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputField);