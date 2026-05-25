import NodeClass from "./Node.js";
import LinkedList from "./LinkedList.js";

let newList = new LinkedList();

newList.append("dog");

newList.append("cat");

newList.append("mice");
newList.append("girl");
newList.append("something");
newList.prepend("man");

newList.prepend("woman");

console.log(newList.size());

// console.log(newList.toString());
// // console.log(newList.head());
