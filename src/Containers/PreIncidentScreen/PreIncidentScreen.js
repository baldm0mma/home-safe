import React from "react";
import { connect } from "react-redux";
import "./PreIncidentScreen.scss";

export class PreIncidentScreen extends React.Component {
  state = {
    currentQuestion: 1
  };

  advanceQuestion = () => {
    this.setState({ currentQuestion: this.state.currentQuestion++ })
  }

  displayDots = () => {
    const dots = [];
    for (let i = 1; i < 13; i++) {
      if (i === this.state.currentQuestion) {
        dots.push(<img src="./green-dot.png" alt="green dot to track question progress" className="active-dot" />)
      } else {
        dots.push(
          <img
            src="./dot.png"
            alt="dot to track question progress"
            className="dot"
          />
        );
      }
    }
    return dots;
  }

  render() {
    return (
      <main className="pre-incident-screen">
        {/* conditionally render each question component based on the currentQuestion state */}
        <div className="dots-wrapper">
          {this.displayDots()}
        </div>
      </main>
    );
  }
};

export const mapStateToProps = state => ({
  preIncidentQuestions: state.preIncidentQuestions
});

export default connect(mapStateToProps)(PreIncidentScreen);
