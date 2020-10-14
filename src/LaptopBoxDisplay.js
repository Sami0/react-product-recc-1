import React, { Component } from "react";
//import ReactDOM from "react-dom";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LaptopRendering from "./Laptop-data-sample1";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

class LaptopBoxDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.showBox = this.showBox.bind(this);
    this.backToList = this.backToList.bind(this);
    this.state = { boxDisplayed: false };
  }

  showBox() {
    this.setState({ boxDisplayed: false });
  }

  backToList() {
    this.setState({ boxDisplayed: true });
  }

  render() {
    const boxDisplayed = this.state.boxDisplayed;
    let button;
    if (boxDisplayed) {
      button = <BoxButton onClick={this.showBox} />;
    } else {
      button = <BackButton onClick={this.backToList} />;
    }

    return (
      <div>
        <TestingBOX boxDisplayed={boxDisplayed} />
        {button}
      </div>
    );
  }
}

function Laptopbox1(props) {
  return (
    <div>
      {" "}
      <p> recommended Laptop :</p> <LaptopRendering />{" "}
    </div>
  );
}

function Laptopbox2(props) {
  return <p>- </p>;
}

function TestingBOX(props) {
  const boxDisplayed = props.boxDisplayed;
  if (boxDisplayed) {
    return <Laptopbox1 />;
  }
  return <Laptopbox2 />;
}

function BoxButton(props) {
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={props.onClick}
    >
      hide laptop
    </Button>
  );
}

function BackButton(props) {
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={props.onClick}
    >
      see Laptop
    </Button>
  );
}

export default LaptopBoxDisplay;
