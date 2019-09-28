import React, { Component } from "react";
import { connect } from "react-redux";
import { logAnswer } from "../../Actions/index";

export class PreIncidentQuestionsRadio extends Component {
  state = {
    answer: ""
  };

  displayOptions = () => {
    return this.props.options.map(option => {
      return <option value={option}>{option}</option>;
    })
  }

  handleChange = e => {
    this.setState({ answer: e.target.value });
  };

  handleSubmit = () => {
    const { logAnswer, id, advanceQuestion } = this.props;
    logAnswer(id, this.state.answer);
    advanceQuestion();
  };

  render = () => {
    return (
      <article>
        <p>{this.props.question}</p>
        <select onChange={this.handleChange} value={this.state.answer}>
          {this.displayOptions()};
        </select>
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
)(PreIncidentQuestionsRadio);
