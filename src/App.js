/* eslint-disable no-unreachable */
import { useState } from 'react';
import Badge from './components/badge';
import Button from './components/button';
import CheckBox from './components/checkbox';
import { SpinnerLoader } from './components/loading_indicator.js';
import Search from './components/search';
import TextBox from './components/textbox';

function App() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState('text box value here');
  const [searchValue, setSearchValue] = useState('search anything on submit');

  return (
    <div className="ml-10 mb-96">
      <h1 className="my-2 pl-1 py-1 bg-primary text-gray-100">Badge</h1>
      <Badge className="my-1" text="hello" variant="positive" size="sm" />
      <Badge className="my-1" text="hello" variant="negative" size="md" />
      <Badge className="my-1" text="hello" variant="warning" size="lg" />

      <h1 className="pl-1 py-1 my-2 mt-8 bg-primary text-gray-100">CheckBox</h1>
      <CheckBox
        label="enable"
        id="enabled"
        size="sm"
        value={checkboxValue}
        onChange={setCheckboxValue}
      />
      <CheckBox
        label="enable"
        id="enabled"
        size="md"
        value={checkboxValue}
        onChange={setCheckboxValue}
      />
      <CheckBox
        label="enable"
        id="enabled"
        size="lg"
        value={checkboxValue}
        onChange={setCheckboxValue}
      />
      <pre>value: {checkboxValue.toString()}</pre>

      <h1 className="pl-1 py-1 my-2 mt-8 bg-primary text-gray-100">TextBox</h1>
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
        className="w-56 block my-2"
      />
      <pre>value: {textBoxValue}</pre>

      <h1 className="pl-1 py-1 my-2 mt-8 bg-primary text-gray-100">Button</h1>
      <Button
        label="button"
        size="sm"
        variant="primary"
        className="block my-2"
        onClick={() => alert('clicked!')}
      />
      <Button
        label="button"
        size="md"
        variant="secondary"
        className="block my-2"
        onClick={() => alert('clicked!')}
      />
      <Button
        label="button"
        size="lg"
        variant="outline"
        className="block my-2"
        onClick={() => alert('clicked!')}
      />

      <h1 className="pl-1 py-1 my-2 mt-8 bg-primary text-gray-100">Search</h1>
      <Search
        placeholder="search anythings"
        value={searchValue}
        onChange={setSearchValue}
        onClear={() => setSearchValue('')}
        size="sm"
        className="my-2 w-56"
      />
      <Search
        placeholder="search anythings"
        value={searchValue}
        onChange={setSearchValue}
        onClear={() => setSearchValue('')}
        size="md"
        className="my-2 w-56"
      />
      <Search
        placeholder="search anythings"
        value={searchValue}
        onChange={setSearchValue}
        onClear={() => setSearchValue('')}
        size="lg"
        className="my-2 w-56"
      />
      <pre>search value: {searchValue}</pre>

      <h1 className="pl-1 py-1 my-2 mt-8 bg-primary text-gray-100">
        Loading Indicator
      </h1>
      <SpinnerLoader size="sm" />
      <SpinnerLoader size="md" />
      <SpinnerLoader size="lg" />
      <div className="w-64 h-64 bg-primary opacity-50">
        <SpinnerLoader size="full" />
      </div>
    </div>
  );
}

export default App;
