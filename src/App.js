import { useState } from 'react';
import Badge from './components/badge';
import Button from './components/button';
import CheckBox from './components/checkbox';
import SearchOnSubmitField from './components/search_on_submit__field';
import TextBox from './components/textbox';

function App() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState('text box value here');
  const [searchOnSubmitValue, setSearchOnSubmitValue] = useState(
    'search anything on submit'
  );

  return (
    <div className="ml-10">
      <h1 className="my-2 pl-1 py-1 bg-blue-300">Badge</h1>
      <Badge text="hello" variant="positive" size="sm" />
      <Badge text="hello" variant="negative" size="md" />
      <Badge text="hello" variant="pending" size="lg" />

      <h1 className="pl-1 py-1 my-2 mt-8 bg-blue-300">CheckBox</h1>
      <CheckBox
        label="enable"
        name="enabled"
        size="sm"
        checked={checkboxValue}
        onChange={setCheckboxValue}
      />
      <CheckBox
        label="enable"
        name="enabled"
        size="md"
        checked={checkboxValue}
        onChange={setCheckboxValue}
      />
      <CheckBox
        label="enable"
        name="enabled"
        size="lg"
        checked={checkboxValue}
        onChange={setCheckboxValue}
      />
      <pre>value: {checkboxValue.toString()}</pre>

      <h1 className="pl-1 py-1 my-2 mt-8 bg-blue-300">TextBox</h1>
      <TextBox
        placeholder="Search"
        value={textBoxValue}
        size="sm"
        onChange={setTextBoxValue}
        className="w-56 block my-2"
      />
      <TextBox
        placeholder="Search"
        value={textBoxValue}
        size="md"
        onChange={setTextBoxValue}
        className="w-56 block my-2"
      />
      <TextBox
        placeholder="Search"
        value={textBoxValue}
        size="lg"
        onChange={setTextBoxValue}
        bg-blue-300
        className="w-56 block my-2"
      />
      <pre>value: {textBoxValue}</pre>

      <h1 className="pl-1 py-1 my-2 mt-8 bg-red-300">Search on Submit</h1>
      <SearchOnSubmitField
        placeholder="search anythings"
        size="sm"
        className="my-2 w-56"
      />
      <SearchOnSubmitField
        placeholder="search anythings"
        size="md"
        className="my-2 w-56"
      />
      <SearchOnSubmitField
        placeholder="search anythings"
        size="lg"
        className="my-2 w-56"
      />

      <h1 className="pl-1 py-1 my-2 mt-8 bg-blue-300">Button</h1>
      <Button label="button" size="sm" variant="primary" className="block my-2" />
      <Button label="button" size="md" variant="secondary" className="block my-2" />
      <Button label="button" size="lg" variant="outline" className="block my-2" />
    </div>
  );
}

export default App;
