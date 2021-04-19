import { Button, CircularProgress, withStyles } from '@material-ui/core';
import { requester } from 'custom_util';
import { MESSAGES } from 'data';
import React from 'react';
import { withRouter } from 'react-router';

const buttonStyle = (theme) => ({
  root: { marginTop: '4em' },
});

// using class component for readability
@withRouter
@withStyles(buttonStyle)
class SignUpFormButton extends React.Component {
  TEMP_VALUES = {
    memberId: 'tempId',
    birth: 'temp',
    email: 'temp@temp.temp',
    // loginType: null, // TBD
  };
  state = { pending: false };

  shouldComponentUpdate() {
    return false;
  }

  handleClick = async () => {
    try {
      const { value } = this.props;
      this.setState({ pending: true });
      await requester.member.create({ ...this.TEMP_VALUES, ...value });
      // TBD: call login API here (or not)
      this.props.history.push('/home');
    } catch (e) {
      this.setState({ pending: false });
      console.error(e);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Button
        classes={classes}
        variant="contained"
        color="primary"
        disableElevation
        onClick={this.handleClick}
        disabled={this.state.pending}
      >
        {this.state.pending ? <CircularProgress /> : MESSAGES.common.confirm}
      </Button>
    );
  }
}

export default SignUpFormButton;
