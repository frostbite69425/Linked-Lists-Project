import { describe, test, expect } from "@jest/globals";
import LinkedList from "./LinkedList.js";

const newList = new LinkedList();

const indexList = new LinkedList();

const insertTestList = new LinkedList();
insertTestList.append(0);
insertTestList.append(1);
insertTestList.append(2);
insertTestList.append(3);
insertTestList.append(4);
insertTestList.append(5);

describe("LinkedList tests", () => {
  test("toString() returns empty list as empty string", () => {
    expect(newList.toString()).toBe("");
  });

  test("append adds new nodes to the list", () => {
    newList.append("dog");
    expect(newList.toString()).toEqual("(dog) -> null");
  });

  test("prepen adds new head to the list", () => {
    newList.append("cat");
    newList.append("mice");
    newList.append("girl");
    newList.append("something");
    newList.prepend("man");
    expect(newList.toString()).toEqual(
      "(man) -> (dog) -> (cat) -> (mice) -> (girl) -> (something) -> null",
    );
  });

  test("size returns the total number of nodes in the list.", () => {
    expect(newList.size()).toEqual(6);
  });

  test("head returns the value of the head of the list.", () => {
    expect(newList.head()).toEqual("man");
  });

  test("tail returns the value of the last node of the list.", () => {
    expect(newList.tail()).toEqual("something");
  });

  test("tail returns undefined for an empty list.", () => {
    const emptyList = new LinkedList();
    expect(emptyList.tail()).toBeUndefined;
  });

  test("at(index) returns undefined if there's no node at the given index.", () => {
    expect(indexList.at(2)).toBeUndefined;
  });

  test("at(index) returns the value of the node at that index.", () => {
    indexList.append(1);
    indexList.append(2);
    indexList.append(3);
    indexList.append(4);
    indexList.append(5);
    indexList.append(6);
    expect(indexList.at(5)).toBe(6);
  });

  test("at(index) returns undefined if there's no node at the given index.", () => {
    expect(indexList.at(89)).toBeUndefined;
  });

  test("pop() returns undefined if the list is empty.", () => {
    const emptyList = new LinkedList();
    expect(emptyList.pop()).toBeUndefined;
  });

  test("pop() removes the head node and returns its value from the the list.", () => {
    expect(indexList.pop()).toBe(1);
  });

  test("pop() only removes the head node from the the list.", () => {
    expect(indexList.toString()).toBe(
      "(2) -> (3) -> (4) -> (5) -> (6) -> null",
    );
  });

  test("toString() returns the object values in a serial format.", () => {
    expect(indexList.toString()).toBe(
      "(2) -> (3) -> (4) -> (5) -> (6) -> null",
    );
  });

  test("contains(value) returns true for a value present in the list.", () => {
    expect(indexList.contains(5)).toBe(true);
  });

  test("contains(value) returns false for a value absent from the list.", () => {
    expect(indexList.contains(55)).toBe(false);
  });

  test("findIndex(value) returns the index of the node containing the given value.", () => {
    expect(indexList.findIndex(4)).toBe(2);
  });

  test("findIndex(value) returns the index of the first node node with the matching value in case multiple nodes contain a matching value.", () => {
    indexList.append(5);
    expect(indexList.findIndex(5)).toBe(3);
  });

  test("findIndex(value) returns -1 if the value is not found in the list.", () => {
    expect(indexList.findIndex(55)).toBe(-1);
  });

  test("insertAt(index, ...values) inserts new nodes with the given values at the given index.", () => {
    insertTestList.insertAt(2, 7, 8, 9);
    expect(insertTestList.toString()).toBe(
      "(0) -> (1) -> (7) -> (8) -> (9) -> (2) -> (3) -> (4) -> (5) -> null",
    );
  });

  test("insertAt(index, ...values) throws a RangeError if the method is called with an index that is out of bounds.", () => {
    expect(() => {
      indexList.insertAt(500, 7, 8, 9);
    }).toThrow(new RangeError());
  });

  test("insertAt(index, ...values) throws a RangeError if the method is called with an index of 0.", () => {
    expect(() => {
      insertTestList.insertAt(0, 7, 8, 9);
    }).toThrow(new RangeError());
  });

  test("removeAt(index) removes the  node at the given index.", () => {
    insertTestList.removeAt(2);
    expect(insertTestList.toString()).toBe(
      "(0) -> (1) -> (8) -> (9) -> (2) -> (3) -> (4) -> (5) -> null",
    );
  });

  test("removeAt(index) throws a RangeError if the method is called with an index that is out of bounds.", () => {
    expect(() => {
      indexList.removeAt(500);
    }).toThrow(new RangeError());
  });

  test("removeAt(index) throws a RangeError if the method is called with an index of 0.", () => {
    expect(() => {
      insertTestList.removeAt(0);
    }).toThrow(new RangeError());
  });
});
