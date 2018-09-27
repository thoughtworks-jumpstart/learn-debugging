const { places, addPlace } = require("./debugging");

test("it can add a place", () => {
  addPlace("Yishun", "Singapore");
  expect(places.length).toEqual(1);
  expect(places[0].id).toEqual(1);
  expect(places[0].city).toEqual("Yishun");
  expect(places[0].country).toEqual("Singapore");
  expect(places[0].numType).toEqual("odd");
});

test("it can add two places", () => {
  addPlace("Yishun", "Singapore");
  addPlace("Sydney", "Australia");
  expect(places.length).toEqual(2);
  expect(places[1].id).toEqual(2);
  expect(places[1].city).toEqual("Sydney");
  expect(places[1].country).toEqual("Australia");
  expect(places[1].numType).toEqual("even");
});
