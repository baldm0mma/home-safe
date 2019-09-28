const defaultChecklist = [
  {
    id: 1,
    text: "At least one smoke alarm on every level",
    category: "Alarms",
    checked: false
  },
  {
    id: 2,
    text: "Alarms inside and outside each sleeping area",
    category: "Alarms",
    checked: false
  },
  {
    id: 3,
    text: "Each alarm is less than 10 years old",
    category: "Alarms",
    checked: false
  },
  {
    id: 4,
    text: "At least one carbon monoxide detector on every level",
    category: "Alarms",
    checked: false
  },
  {
    id: 5,
    text: "Each carbon monoxide detector is less than 7 years old",
    category: "Alarms",
    checked: false
  },
  {
    id: 6,
    text: "No electrical cords run under rugs",
    category: "Electrical",
    checked: false
  },
  {
    id: 7,
    text: "No cords are frayed or damaged",
    category: "Electrical",
    checked: false
  },
  {
    id: 8,
    text: "Appliances are plugged directly into wall outlets",
    category: "Electrical",
    checked: false
  },
  {
    id: 9,
    text: "Extensions cords are not used with space heaters",
    category: "Electrical",
    checked: false
  },
  {
    id: 10,
    text: "Chimney and furnace are cleaned and inspected yearly",
    category: "Heating",
    checked: false
  },
  {
    id: 11,
    text:
      "Flammable furniture is at least 3ft from fireplaces, baseboards, and space heaters",
    category: "Heating",
    checked: false
  }
];

export const checklistReducer = (state = defaultChecklist, action) => {
  switch (action.type) {
    case "CHECK_ITEM":
      return state.map(item => {
        return item.id === action.id ? { ...item, checked: true } : item;
      });
    case "UNCHECK_ITEM":
      return state.map(item => {
        return item.id === action.id ? { ...item, checked: false } : item;
      });
    default:
      return state;
  }
};
