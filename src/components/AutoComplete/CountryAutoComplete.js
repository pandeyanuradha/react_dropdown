import { countries } from "./countries";
import { AutoComplete } from "@progress/kendo-react-dropdowns";

export const CountryAutoComplete = () => {
  return (
    <form className="k-form k-my-8">
      <label className="k-label k-mb-3">Select Country</label>
      <AutoComplete data={countries} textField="label" suggest />
    </form>
  );
};
