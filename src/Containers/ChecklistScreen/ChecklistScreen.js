import React from "react";
import { connect } from "react-redux";
import "./ChecklistScreen.scss";
import ChecklistItem from "../ChecklistItem/ChecklistItem";

export class ChecklistScreen extends React.Component {
  state = {};

  displayChecklist = () => {
    return this.props.checklist.map(item => {
      return (
        <ChecklistItem
          key={item.id}
          id={item.id}
          text={item.text}
          category={item.category}
          checked={item.checked}
        />
      );
    });
  };

  render() {
    return (
      <main className="checklist-screen">
        <section className="checklist-wrapper">
          {this.props.checklist && this.displayChecklist()}
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  checklist: state.checklist
});

export default connect(mapStateToProps)(ChecklistScreen);
