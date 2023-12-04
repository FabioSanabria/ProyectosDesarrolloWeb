var rand = function() {
  return Math.random().toString(36).substr(2); };

function generateToken() { return rand() + rand(); }

export { generateToken };