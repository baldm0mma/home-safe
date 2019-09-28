import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logAnswer } from '../../Actions/index';
import { Checkbox } from '@material-ui/core';

export class PreIncidentQuestionsCheckbox extends Component {
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
        <Checkbox
          value='checkedA'
          inputProps={{ 'aria-label': 'Checkbox A' }}
        />
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
)(PreIncidentQuestionsCheckbox);
