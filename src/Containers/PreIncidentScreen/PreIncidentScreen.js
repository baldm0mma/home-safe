import React from "react";
import { connect } from "react-redux";
import "./PreIncidentScreen.scss";
import PreIncidentQuestionsBoolean from "../PreIncidentQuestions/PreIncidentQuestionsBoolean";
// import PreIncidentQuestionsCheckbox from "../PreIncidentQuestions/PreIncidentQuestionsCheckbox";
// import PreIncidentQuestionsNumber from "../PreIncidentQuestions/PreIncidentQuestionsNumber";
// import PreIncidentQuestionsRadio from "../PreIncidentQuestions/PreIncidentQuestionsRadio";

export class PreIncidentScreen extends React.Component {
  state = {
    currentQuestion: 0
  };

  advanceQuestion = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    this.setState({ currentQuestion: nextQuestion });
  };

  displayDots = () => {
    const dots = [];
    for (let i = 0; i < 12; i++) {
      if (i === this.state.currentQuestion) {
        dots.push(
          <img
            src="./green-dot.png"
            alt="green dot to track question progress"
            className="active-dot"
            key={i}
          />
        );
      } else {
        dots.push(
          <img
            src="./dot.png"
            alt="dot to track question progress"
            className="dot"
            key={i}
          />
        );
      }
    }
    return dots;
  };

  render() {
    return (
      <main className="pre-incident-screen">
        {this.state.currentQuestion === 0 && (
          <PreIncidentQuestionsBoolean
            key={1}
            id={1}
            question="Do you have a gate or locked entrance to your residence?"
            advanceQuestion={this.advanceQuestion}
          />
        )}
        {this.state.currentQuestion === 1 && (
          <PreIncidentQuestionsBoolean
            key={2}
            id={2}
            question="Do you have a fire hydrant within one block, or 200ft of your residence?"
            advanceQuestion={this.advanceQuestion}
          />
        )}
        {this.state.currentQuestion === 2 && (
          <PreIncidentQuestionsBoolean
            key={3}
            id={3}
            question="Do you have a pond, creek, or river within 1/4 mile of your residence?"
            advanceQuestion={this.advanceQuestion}
          />
        )}
        {/* <PreIncidentQuestionsRadio
          id={4}
          question="What type of roof do you have?"
        />
        <PreIncidentQuestionsRadio id={5} question="Do you have a basement?" />
        <PreIncidentQuestionsNumber
          id={6}
          question="How many direct exits (doors) do you have in your residence?"
        />
        <PreIncidentQuestionsBoolean
          id={7}
          question="Do you have access to your attic from the interior of your residence?"
        />
        <PreIncidentQuestionsBoolean
          id={8}
          question="Do you have a fire alarm system?"
        />
        <PreIncidentQuestionsCheckbox
          id={9}
          question="Do you have a fire suppression system?"
        />
        <PreIncidentQuestionsNumber
          id={10}
          question="How many smoke detectors are in your residence?"
        />
        <PreIncidentQuestionsBoolean
          id={11}
          question="Do you have a carbon monoxide detector in your residence?"
        />
        <PreIncidentQuestionsCheckbox
          id={12}
          question="Are you storing any hazardous materials? If so, where?"
        /> */}
        <div className="dots-wrapper">{this.displayDots()}</div>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  preIncidentQuestions: state.preIncidentQuestions
});

export default connect(mapStateToProps)(PreIncidentScreen);
