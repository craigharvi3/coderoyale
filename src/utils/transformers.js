const transformArray = arr => {
  return arr.reduce((result, item) => {
    // eslint-disable-next-line no-param-reassign
    result[item.id] = item;
    return result;
  }, {});
};

export { transformArray };
