import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import QuestionsList from "./QuestionsList";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
class ButtonChange extends React.Component {
  constructor(props) {
    super(props);
    this.handleIntroButton = this.handleIntroButton.bind(this);
    this.handleQuestionsButton = this.handleQuestionsButton.bind(this);
    this.state = { ButtonClicked: true };
  }

  handleIntroButton() {
    this.setState({ ButtonClicked: false });
  }

  handleQuestionsButton() {
    this.setState({ ButtonClicked: true });
  }

  render() {
    const ButtonClicked = this.state.ButtonClicked;
    let button;
    if (ButtonClicked) {
      button = <IntroButton onClick={this.handleIntroButton} />;
    } else {
      button = <QuestionsButton onClick={this.handleQuestionsButton} />;
    }

    return (
      <div>
        <TestingM ButtonClicked={ButtonClicked} />
        {button}
      </div>
    );
  }
}

function Message1(props) {
  return (
    <div>
      {" "}
      <p> answering the form below will help us find the best option :</p>{" "}
      <QuestionsList />{" "}
    </div>
  );
}

function Message2(props) {
  return <p>it's time for an upgrade </p>;
}

function TestingM(props) {
  const ButtonClicked = props.ButtonClicked;
  if (ButtonClicked) {
    return <Message2 />;
  }
  return <Message1 />;
}

function IntroButton(props) {
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={props.onClick}
    >
      see options
    </Button>
  );
}

function QuestionsButton(props) {
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={props.onClick}
    >
      go back
    </Button>
  );
}

export default ButtonChange;
