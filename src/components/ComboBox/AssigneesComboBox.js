import { ComboBox } from "@progress/kendo-react-dropdowns";
import { useState } from "react";

const assignees = [
  {
    id: 1,
    name: "Chloe Williams",
    occupation: "Developer",
  },
  {
    id: 2,
    name: "Severus Snape",
    occupation: "Developer",
  },
  {
    id: 3,
    name: "Mark Smith",
    occupation: "Tech Support",
  },
  {
    id: 4,
    name: "Rosemary Adams",
    occupation: "Tech Support",
  },
  {
    id: 5,
    name: "Joe McDonalds",
    occupation: "Designer",
  },
  {
    id: 6,
    name: "Minerva McGonagall",
    occupation: "Designer",
  },
];

export const AssigneesComboBox = () => {
  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const onChange = event => setSelectedAssignee(event.value);

  return (
    <form className="k-form k-my-8">
      <label className="k-label k-mb-3">Task Assignee</label>
      <ComboBox
        data={assignees}
        value={selectedAssignee}
        onChange={onChange}
        textField="name"
        groupField="occupation"
        suggest
      />
    </form>
  );
};
