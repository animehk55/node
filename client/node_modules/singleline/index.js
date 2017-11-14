function singleline(multiLineString) {
  return multiLineString.replace(/\s\s+/g, ' ').trim();
}

module.exports = singleline;
