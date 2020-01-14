// helpers
module.exports.turn2CSV = (object) => {
  var result = [];
  for (var key in object) {
    if (key !== 'children') {
      result.push(key, ',');
    } else {
      result.pop();
    }
  }

  result.push('\n');
  var recurse = (node) => {
    for (var key in node) {
      if (key !== 'children') {
        if (typeof node[key] === 'number') {
          result.push(JSON.stringify(node[key]));
        } else {
          result.push(node[key], ',');
        }
      }
    }
    result.push('\n');
    node.children.forEach((child) => {
        recurse(child);
    })
  }
  recurse(object);
  return result;
}