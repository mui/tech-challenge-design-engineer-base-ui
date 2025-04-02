import * as React from 'react';
// You can use this dataset for the component
import countries from '../src/components/countries';
import Combobox from '../src/components/Combobox';

// Update this page to show-case the demo of the Snackbar component
export default function Page() {
  return (
    <React.Fragment>
      <h1>Demo using the Combobox component</h1>
      <Combobox />
    </React.Fragment>
  );
}
