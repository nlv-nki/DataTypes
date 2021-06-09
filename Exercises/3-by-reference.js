'use strict';

const inc = (obj) => {
  (typeof obj === 'object') ?
    obj.n++ :
   `not obj`

};

module.exports = { inc };
