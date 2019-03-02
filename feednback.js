import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class TextFields extends React.Component {
  state = {
    name: '',
    email:'',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChange = email => event => {
    this.setState({ [email]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginLeft: "auto",marginRight: "auto",width:"12%",boxShadow:" 5px 10px", marginTop:"1%"}}>
      <h1 style={{textAlign:"center"}} >FeedBack</h1>
      <form className={classes.container} noValidate autoComplete="off">
        <div className="column" style={{}}>
          <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        /></div></form>
        <form className={classes.container} noValidate autoComplete="off">
        <div>
        <TextField
        id="standard-name"
        label="Email-Id"
        className={classes.textField}
        value={this.state.email}
        onChange={this.handleChange('email')}
        margin="normal"
      /></div></form>
      <form className={classes.container} noValidate autoComplete="off">
      <div>
      <TextField
      id="standard-textarea"
      label="FeedBack"
      placeholder="Enter Your FeedBack"
      multiline
      className={classes.textField}
      onChange={this.handleChange('FeedBack')}
      margin="normal"
    /></div></form>
    <div>
    <form className={classes.container} noValidate autoComplete="off">
    <Button variant="outlined" color="primary" className={classes.button}>
    Send
    {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
    <Icon className={classes.rightIcon}>send</Icon>
  </Button>
      </form>
      </div>
     </div> 
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
