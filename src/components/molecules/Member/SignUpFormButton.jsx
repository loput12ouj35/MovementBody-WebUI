import { Button, CircularProgress, withStyles } from '@material-ui/core';
import { requester } from 'custom_util';
import { MESSAGES } from 'data';
import { inject } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router';

const buttonStyle = (theme) => ({
  root: {
    marginTop: '4em',
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
  },
});

// using class component for readability
@withStyles(buttonStyle)
@inject('profilePageStore')
@withRouter
class SignUpFormButton extends React.Component {
  state = { pending: false };

  shouldComponentUpdate() {
    return false;
  }

  handleClick = async () => {
    try {
      const { profilePageStore } = this.props;
      this.setState({ pending: true });
      await requester.member.create(profilePageStore.profile);
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
