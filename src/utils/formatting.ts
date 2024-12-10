export const formatContinentText = (continents) => {
  if (continents.length == 2) {
    return `${continents[0]}/${continents[1]}`;
  }
  return continents[0];
};
