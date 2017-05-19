import React from 'react';
import Dropdown from 'react-dropdown'



// Usage
//
// Flat Array options
//
// const options = [
//   'one', 'two', 'three'
// ]
// Object Array options
//
// const options = [
//   { value: 'one', label: 'One' },
//   { value: 'two', label: 'Two' },
//   {
//    type: 'group', name: 'group1', items: [
//      { value: 'three', label: 'Three' },
//      { value: 'four', label: 'Four' }
//    ]
//   },
//   {
//    type: 'group', name: 'group2', items: [
//      { value: 'five', label: 'Five' },
//      { value: 'six', label: 'Six' }
//    ]
//   }
// ]

export default (props) => {
  return (
    <div>
     <Dropdown options={props.options}  value={props.defaultOption} placeholder="Select an option" />
    </div>
  );
};
