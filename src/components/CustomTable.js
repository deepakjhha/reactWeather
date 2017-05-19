import _ from 'lodash';
import React from 'react';
import Griddle from 'griddle-react';

// var fakeData =  [
//   {
//     "id": 0,
//     "name": "Mayer Leonard",
//     "city": "Kapowsin",
//     "state": "Hawaii",
//     "country": "United Kingdom",
//     "company": "Ovolo",
//     "favoriteNumber": 7
//   },
//   ...
// ];

export default (props) => {
  return (
    <div>
    <Griddle results={props.results}/>
    </div>
  );
};
