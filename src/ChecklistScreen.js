import React from "react";
import "./ChecklistScreen.scss";
import { ChecklistItem } from "./ChecklistItem";

export class ChecklistScreen extends React.Component {
  state = {};

  render() {
    return (
      <main className="checklist-screen">
        <section className="checklist-wrapper">
          <div className="checklist-category">
            <h3>Alarms</h3>
            <ChecklistItem
              text="At least one smoke alarm on every level"
              category="Alarms"
              checked={false}
            />
            <ChecklistItem
              text="Alarms inside and outside each sleeping area"
              category="Alarms"
              checked={false}
            />
            <ChecklistItem
              text="Each alarm is less than 10 years old"
              category="Alarms"
              checked={false}
            />
            <ChecklistItem
              text="At least one carbon monoxide detector on every level"
              category="Alarms"
              checked={false}
            />
            <ChecklistItem
              text="Each carbon monoxide detector is less than 7 years old"
              category="Alarms"
              checked={false}
            />
            <div className="checklist-category">
              <h3>Electrical</h3>
              <ChecklistItem
                text="No electrical cords run under rugs"
                category="Electrical"
                checked={false}
              />
              <ChecklistItem
                text="No cords are frayed or damaged"
                category="Electrical"
                checked={false}
              />
              <ChecklistItem
                text="Appliances are plugged directly into wall outlets"
                category="Electrical"
                checked={false}
              />
              <ChecklistItem
                text="Extensions cords are not used with space heaters"
                category="Electrical"
                checked={false}
              />
            </div>
            <div className="checklist-category">
              <h3>Heating</h3>
              <ChecklistItem
                text="Chimney and furnace are cleaned and inspected yearly"
                category="Heating"
                checked={false}
              />
              <ChecklistItem
                text="Flammable furniture is at least 3ft from fireplaces, baseboards, and space heaters"
                category="Heating"
                checked={false}
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}
