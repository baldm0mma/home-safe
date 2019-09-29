import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logAnswer } from '../../Actions/index';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export class PreIncidentQuestionsCheckbox extends Component {
  state = {
    answer: []
  };

  handleSubmit = () => {
    const { logAnswer, id, advanceQuestion } = this.props;
    logAnswer(id, this.state.answer);
    advanceQuestion();
  };

  handleChange = val => {
    if (this.state.answer.includes(val)) {
      const newAnswers = this.state.answer.filter(el => el !== val);
      this.setState({ answer: newAnswers });
    } else {
      this.setState({ answer: [...this.state.answer, val] });
    }
  };

  createCheckboxes = () => {
    return this.props.options.map(el => {
      return (
        <FormControlLabel
          label={el}
          control={
            <Checkbox
              value={el}
              style={{
                color: '#00e676'
              }}
            />
          }
          onChange={() => this.handleChange(el)}
        />
      );
    });
  };

  render = () => {
    const { id, question, buttonText } = this.props;
    return (
      <article key={id} className="question-wrapper">
        <p>{question}</p>
        <div className="checkboxes-wrapper">{this.createCheckboxes()}</div>
        <button className="next-button" onClick={this.handleSubmit}>
          {buttonText}
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
)(PreIncidentQuestionsCheckbox);
