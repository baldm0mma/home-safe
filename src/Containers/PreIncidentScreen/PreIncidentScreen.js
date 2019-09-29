import React from "react";
import { connect } from "react-redux";
import "./PreIncidentScreen.scss";
import PreIncidentQuestionsBoolean from "../PreIncidentQuestions/PreIncidentQuestionsBoolean";
import PreIncidentQuestionsCheckbox from "../PreIncidentQuestions/PreIncidentQuestionsCheckbox";
import PreIncidentQuestionsNumber from "../PreIncidentQuestions/PreIncidentQuestionsNumber";
import PreIncidentQuestionsRadio from "../PreIncidentQuestions/PreIncidentQuestionsRadio";

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
      dots.push(
        <img
          src="./blackDot.png"
          alt="green dot to track question progress"
          className={`${
            i === this.state.currentQuestion ? "active-dot" : "dot"
          }`}
          key={i}
        />
      );
    }
    return dots;
  };

  render() {
    return (
      <main>
        {this.state.currentQuestion === 0 && (
          <PreIncidentQuestionsBoolean
            key={1}
            id={1}
            question="Do you have a gate or locked entrance to your residence?"
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 1 && (
          <PreIncidentQuestionsBoolean
            key={2}
            id={2}
            question="Do you have a fire hydrant within one block, or 200ft of your residence?"
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 2 && (
          <PreIncidentQuestionsBoolean
            key={3}
            id={3}
            question="Do you have a pond, creek, or river within 1/4 mile of your residence?"
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 3 && (
          <PreIncidentQuestionsRadio
            id={4}
            question='What type of roof do you have?'
            options={['Flat', 'Arched', 'Pitched', 'Hip', 'Dome', 'Other']}
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 4 && (
          <PreIncidentQuestionsRadio
            id={5}
            question="What type of basement do you have?"
            options={["None", "Daylight Basement", "Walkout Basement"]}
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 5 && (
          <PreIncidentQuestionsNumber
            id={6}
            question="How many direct exits (doors) do you have in your residence?"
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 6 && (
          <PreIncidentQuestionsBoolean
            id={7}
            question="Do you have access to your attic from the interior of your residence?"
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 7 && (
          <PreIncidentQuestionsBoolean
            id={8}
            question="Do you have a fire alarm system?"
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 8 && (
          <PreIncidentQuestionsCheckbox
            id={9}
            question="Do you have a fire suppression system?"
            advanceQuestion={this.advanceQuestion}
            options={["Wet", "Dry chemical", "Foam", "Halon", "No"]}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 9 && (
          <PreIncidentQuestionsNumber
            id={10}
            question="How many smoke detectors are in your residence?"
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 10 && (
          <PreIncidentQuestionsBoolean
            id={11}
            question="Do you have a carbon monoxide detector in your residence?"
            advanceQuestion={this.advanceQuestion}
            buttonText="Next"
          />
        )}
        {this.state.currentQuestion === 11 && (
          <PreIncidentQuestionsCheckbox
            id={12}
            question="Are you storing any hazardous materials? If so, where?"
            advanceQuestion={this.advanceQuestion}
            options={[
              "Garage",
              "Basement",
              "Kitchen",
              "Bathroom",
              "Attic",
              "I am not storing any Hazardous Materials"
            ]}
            buttonText="Finish"
          />
        )}
        <div className="dots-wrapper">{this.displayDots()}</div>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  preIncidentQuestions: state.preIncidentQuestions
});

export default connect(mapStateToProps)(PreIncidentScreen);
