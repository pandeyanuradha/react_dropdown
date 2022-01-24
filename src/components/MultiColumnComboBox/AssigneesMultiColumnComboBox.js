import { MultiColumnComboBox } from "@progress/kendo-react-dropdowns";
import { useState } from "react";

const assignees = [
  {
    id: 1,
    name: "Chloe Williams",
    occupation: "Developer"
  },
  {
    id: 2,
    name: "Severus Snape",
    occupation: "Developer"
  },
  {
    id: 3,
    name: "Mark Smith",
    occupation: "Tech Support"
  },
  {
    id: 4,
    name: "Rosemary Adams",
    occupation: "Tech Support"
  },
  {
    id: 5,
    name: "Joe McDonalds",
    occupation: "Designer"
  },
  {
    id: 6,
    name: "Minerva McGonagall",
    occupation: "Designer"
  }
];

const columns = [
  {
    field: "id",
    header: "ID",
    width: "9rem"
  },
  {
    field: "name",
    header: "Name",
    width: "15rem"
  },
  {
    field: "occupation",
    header: "Occupation",
    width: "15rem"
  }
];

export const AssigneesMultiColumnComboBox = () => {
  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const onChange = (event) => setSelectedAssignee(event.value);

  return (
    <form className="k-form k-my-8">
      <label className="k-label k-mb-3">MultiColumn Task Assignee</label>
      <MultiColumnComboBox
        data={assignees}
        columns={columns}
        value={selectedAssignee}
        onChange={onChange}
        textField="name"
        suggest
      />
    </form>
  );
};
