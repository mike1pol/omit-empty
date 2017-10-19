function omitEmpty(o) {
  let newObj;
  if (Array.isArray(o)) {
    if (o.length > 0) {
      newObj = o.filter(v => v && v.length > 0)
      if (newObj.length === 0) {
        newObj = null;
      }
    }
  } else if (typeof o === 'object') {
    newObj = {};
    Object.keys(o).forEach((key) => {
      if (o[key]) {
        let nw = null;
        let isDate = false;
        if (Array.isArray(o[key]) || typeof o[key] === 'object') {
	        const dt = new Date(o[key]);
          if (dt != "Invalid Date") {
           	nw = o[key];
            isDate = true;
          } else {
						nw = omitEmpty(o[key]);
          }
        } else if (o[key].length > 0) {
          nw = omitEmpty(o[key]);
        } else {
          nw = o[key];
        }
        if (isDate) {
        	newObj[key] = nw;
        } else if (nw) {
          newObj[key] = omitEmpty(nw);
        }
      } else if (o[key] === false || o[key] === 0) {
      	newObj[key] = o[key];
      }
    });
    if (Object.keys(newObj).length === 0) {
      newObj = null;
    }
  } else if (o && (o.length > 0 || o > 0)) {
    newObj = o;
  } else if (typeof o === 'date') {
  	newObj = o;
  }
  return newObj;
};

module.exports = omitEmpty;
