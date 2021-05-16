import { Button, CircularProgress, withStyles } from '@material-ui/core';
import { MESSAGES } from 'data';
import { inject } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router';

const buttonStyle = () => ({
  root: {
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
    margin: '0 0.5rem',
    width: '6rem',
  },
});

// using class component for readability
@withStyles(buttonStyle)
@inject('profilePageStore')
@withRouter
class MemberFormSubmitButton extends React.Component {
  state = { pending: false };

  shouldComponentUpdate() {
    return false;
  }

  createMember = async () => {
    try {
      const { profilePageStore, history } = this.props;
      this.setState({ pending: true });
      await profilePageStore.requestCreation();
      // TBD: call login API here (or not)
      history.push('/home');
    } catch (e) {
      this.setState({ pending: false });
      console.error(e);
    }
  };

  updateMember = async () => {
    try {
      const { profilePageStore } = this.props;
      this.setState({ pending: true });
      await profilePageStore.requestUpdate();
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
