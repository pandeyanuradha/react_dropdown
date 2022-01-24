import { useCallback, useMemo, useState } from "react";
import { DropDownTree } from "@progress/kendo-react-dropdowns";
import { processTreeData, expandedState } from "./treeDataOperations";

const data = [
  {
    id: 1,
    text: "Drinks",
    items: [
      {
        id: 2,
        text: "Water",
      },
      {
        id: 3,
        text: "Juice",
      },
      {
        id: 4,
        text: "Coffee & Tea",
      },
    ],
  },
  {
    id: 5,
    text: "Free From",
    items: [
      {
        id: 6,
        text: "Gluten Free",
      },
      {
        id: 7,
        text: "Dairy Free",
      },
      {
        id: 8,
        text: "Lactose Free",
      },
    ],
  },
  {
    id: 9,
    text: "Chilled Food",
    items: [
      {
        id: 10,
        text: "Cheese",
      },
      {
        id: 11,
        text: "Cooked Meat",
      },
      {
        id: 12,
        text: "Ready Meals",
      },
    ],
  },
];

const selectField = "selected";
const expandField = "expanded";
const dataItemKey = "id";
const textField = "text";
const subItemsField = "items";
const fields = {
  selectField,
  expandField,
  dataItemKey,
  subItemsField,
};

export const FoodDropDownTree = () => {
  const [value, setValue] = useState(null);
  const [expanded, setExpanded] = useState([]);

  const onChange = event => setValue(event.value);

  const onExpandChange = useCallback(
    event => setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded]
  );

  const treeData = useMemo(
    () =>
      processTreeData(
        data,
        {
          expanded,
          value,
        },
        fields
      ),
    [expanded, value]
  );

  return (
    <form className="k-form k-my-8">
      <label className="k-label k-mb-3">Select Food Category</label>
      <DropDownTree
        data={treeData}
        textField={textField}
        onChange={onChange}
        dataItemKey={dataItemKey}
        selectField={selectField}
        expandField={expandField}
        onExpandChange={onExpandChange}
      />
    </form>
  );
};
