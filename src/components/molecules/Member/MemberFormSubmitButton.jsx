import { Button, CircularProgress, withStyles } from '@material-ui/core';
import { MESSAGES } from 'data';
import { inject } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router';

const buttonStyle = () => ({
  root: {
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
    width: '6em',
  },
});

// using class component for readability
@withStyles(buttonStyle)
@inject('profileViewModel')
@withRouter
class MemberFormSubmitButton extends React.Component {
  state = { pending: false };

  shouldComponentUpdate() {
    return false;
  }

  createMember = async () => {
    try {
      const { profileViewModel, history } = this.props;
      this.setState({ pending: true });
      await profileViewModel.submitToCreate();
      // TBD: call login API here (or not)
      history.push('/home');
    } catch (e) {
      this.setState({ pending: false });
      console.error(e);
    }
  };

  updateMember = async () => {
    try {
      const { profileViewModel } = this.props;
      this.setState({ pending: true });
      await profileViewModel.submitToUpdate();
    } catch (e) {
      console.error(e);
    }
    this.setState({ pending: false });
  };

  render() {
    const { classes, update = false } = this.props;
    const { pending } = this.state;

    return (
      <Button
        classes={classes}
        variant="contained"
        color="primary"
        disableElevation
        onClick={update ? this.updateMember : this.createMember}
        disabled={pending}
      >
        {pending ? <CircularProgress /> : MESSAGES.common.submit}
      </Button>
    );
  }
}

export default MemberFormSubmitButton;
