const data = {
  1: "One",
  2: "Two",
  3: "There",
};

export function getNames(key: number) {
  // @ts-ignore
  return data[key];
}
