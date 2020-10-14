import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import LaptopIcon from "@material-ui/icons/Laptop";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import QuestionsList from "./QuestionsList";
import ButtonChange from "./ButtonChange";
import LaptopBoxDisplay from "./LaptopBoxDisplay";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

function IconContainer(props) {
  return (
    <div id="iconContainer">
      <LaptopIcon style={{ fontSize: 150 }} />
    </div>
  );
}

function startQuestionsList(props) {
  console.log("startQuestionsList is activated");

  return <div></div>;

  // <QuestionsList />;
}

function IntroButton(props) {
  return (
    <div>
      <div>
        <ButtonChange />
      </div>
      <div></div>
    </div>
  );
}

function IntroPage(props) {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <IconContainer />
        <h3>{props.MainPhrase}</h3>

        <IntroButton />
      </header>
    </div>
  );
}

export default IntroPage;
