import calculate from "./calculate";

it("should return object and button name", () => {
  const object = {
    total: "",
    operation: "",
    next: "0",
  };

  const obj = {
    total: null,
    next: "0",
    operation: null,
  };
  expect(calculate(object, "AC")).toStrictEqual(obj);
});
