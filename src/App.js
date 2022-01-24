import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import { CountryAutoComplete } from "./components/AutoComplete/CountryAutoComplete";
import { RecipeDropDownList } from "./components/DropDownList/RecipeDropDownList";
import { TagsMultiSelect } from "./components/MultiSelect/TagsMultiSelect";
import { AssigneesComboBox } from "./components/ComboBox/AssigneesComboBox";
import { AssigneesMultiColumnComboBox } from "./components/MultiColumnComboBox/AssigneesMultiColumnComboBox";
import { FoodDropDownTree } from "./components/DropDownTree/FoodDropDownTree";

function App() {
  return (
    <div className="App">
      <RecipeDropDownList />
      <TagsMultiSelect />
      <CountryAutoComplete />
      <AssigneesComboBox />
      <AssigneesMultiColumnComboBox />
      <FoodDropDownTree />
    </div>
  );
}

export default App;
