import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logAnswer } from '../../Actions/index';

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
      <article>
        <p>{this.props.question}</p>
        <button onClick={() => this.setState({ answer: true })}>Yes</button>
        <button onClick={() => this.setState({ answer: false })}>No</button>
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
)(PreIncidentQuestionsBoolean);
