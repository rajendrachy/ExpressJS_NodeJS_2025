const ad = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

// Export the functions you want
// module.exports.ad = ad;
// module.exports.mult = mult;



//-----------export a multiple functions using named exports
module.exports = {
  ad,
  mult, 
  sub,
  div,
};



