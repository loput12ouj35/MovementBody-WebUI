import { Button, CircularProgress, withStyles } from '@material-ui/core';
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
class MemberFormSubmitButton extends React.Component {
  state = { pending: false };

  shouldComponentUpdate() {
    return false;
  }

  createMember = async () => {
    try {
      const { profilePageStore } = this.props;
      this.setState({ pending: true });
      await profilePageStore.requestCreation();
      // TBD: call login API here (or not)
      this.props.history.push('/home');
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

    return (
      <Button
        classes={classes}
        variant="contained"
        color="primary"
        disableElevation
        onClick={update ? this.updateMember : this.createMember}
        disabled={this.state.pending}
      >
        {this.state.pending ? <CircularProgress /> : MESSAGES.common.submit}
      </Button>
    );
  }
}

export default MemberFormSubmitButton;