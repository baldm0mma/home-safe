import React, { Component } from "react";
import { connect } from "react-redux";
import { logAnswer } from "../../Actions/index";

export class PreIncidentQuestionsBoolean extends Component {
  state = {
    answer: null
  };

  handleSubmit = () => {
    const { logAnswer, id, advanceQuestion } = this.props;
    logAnswer(id, this.state.answer);
    advanceQuestion();
  };

  render = () => {
    return (
      <article className="question-wrapper">
        <p className="question-text">{this.props.question}</p>
        <div className="boolean-buttons-wrapper">
          <button
            className={`yes-button ${this.state.answer ? "green" : null}`}
            onClick={() => this.setState({ answer: true })}
          >
            Yes
          </button>
          <button
            className={`no-button ${this.state.answer === false ? "red" : null}`}
            onClick={() => this.setState({ answer: false })}
          >
            No
          </button>
        </div>
        <button className="next-button" onClick={this.handleSubmit}>
          {this.props.buttonText}
        </button>
      </article>
    );
  };
}

export const mapDispatchToProps = dispatch => ({
  logAnswer: (id, answer) => dispatch(logAnswer(id, answer))
});

export default connect(
  null,
  mapDispatchToProps
)(PreIncidentQuestionsBoolean);
