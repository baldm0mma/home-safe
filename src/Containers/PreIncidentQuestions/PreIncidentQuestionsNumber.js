import React, { Component } from "react";
import { connect } from "react-redux";
import { logAnswer } from "../../Actions/index";
import "./PreIncidentQuestions.scss";

export class PreIncidentQuestionsNumber extends Component {
  state = {
    answer: ""
  };

  handleChange = e => {
    this.setState({ answer: e.target.value })
  }

  handleSubmit = () => {
    const { logAnswer, id, advanceQuestion } = this.props;
    logAnswer(id, this.state.answer);
    advanceQuestion();
  };

  render = () => {
    return (
      <article>
        <p>{this.props.question}</p>
        <input type="text" value={this.state.answer} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>{this.props.buttonText}</button>
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
)(PreIncidentQuestionsNumber);
