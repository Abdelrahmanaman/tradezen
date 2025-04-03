import { type } from 'arktype';

const n = { newborn: "Newborn", junior: "Junior", preTeen: "Pre-Teen", teen: "Teen", postTeen: "Post-Teen", fullGrown: "Full-Grown" }, s = type({ itemId: type("number").configure({ message: "Invalid item ID" }), amount: type("number >= 1").configure({ message: "Invalid number" }), isFlyable: type("boolean").configure({ message: "isFlyable must be a boolean" }), isRideable: type("boolean").configure({ message: "isRideable must be a boolean" }), isNeon: type("boolean").configure({ message: "isNeon must be a boolean" }), isMegaNeon: type("boolean").configure({ message: "isMegaNeon must be a boolean" }), age: type.valueOf(n).configure({ message: "Invalid age" }), lookingFor: type("string[]").configure({ message: "Trade for is invalid" }), slug: type("string").configure({ message: "slug is invalid" }) });

export { n, s };
//# sourceMappingURL=add-list-CNuhmZ-z.mjs.map
