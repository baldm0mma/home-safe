import React from "react";
import "./ChecklistItem.scss";

export class ChecklistItem extends React.Component {
  state = {
    checked: false
  };

  componentDidMount() {
    this.setState({ checked: this.props.checked })
  }

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked })
  }

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
