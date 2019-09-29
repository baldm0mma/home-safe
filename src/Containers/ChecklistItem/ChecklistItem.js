import React from 'react';
import './ChecklistItem.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addProgress,
  subtractProgress,
  checkItem,
  unCheckItem
} from '../../Actions';

export class ChecklistItem extends React.Component {
  state = {
    checked: false
  };

  componentDidMount() {
    this.setState({ checked: this.props.checked });
  }

  toggleChecked = async () => {
    await this.setState({ checked: !this.state.checked });
    if (this.state.checked) {
      this.props.checkItem(this.props.id);
      // this.props.addProgress(2);
    } else {
      this.props.unCheckItem(this.props.id);
      // this.props.subtractProgress(2);
    }
  };

  render() {
    return (
      <article className="checklist-item" onClick={this.toggleChecked}>
        {!this.state.checked && (
          <img
            alt="empty checkbox"
            src="./unchecked.png"
            className="checkbox unchecked-box"
          />
        )}
        {this.state.checked && (
          <img
            alt="checked checkbox"
            src="./checked.png"
            className="checkbox checked-box"
          />
        )}
        <p className="checklist-item-text">{this.props.text}</p>
      </article>
    );
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addProgress, subtractProgress, checkItem, unCheckItem },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(ChecklistItem);
