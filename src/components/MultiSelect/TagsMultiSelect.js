import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { useState } from "react";

const tags = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Vue",
  "Nuxt",
  "Node",
  "Python"
];

export const TagsMultiSelect = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const onChange = (event) => setSelectedTags([...event.value]);

  return (
    <form className="k-form k-my-8">
      <label className="k-label k-mb-3">Related technologies</label>
      <MultiSelect
        data={tags}
        value={selectedTags}
        onChange={onChange}
        autoClose={false}
      />
    </form>
  );
};
