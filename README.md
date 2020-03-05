# Get a Version of an Object with Sorted Keys

Although objects in JavaScript are theoretically unsorted, in practice most engines use insertion order—at least, ignoring numeric keys. This manifests itself most prominently when dealing with an object's JSON serialization.

So, for example, you might be trying to serialize some object to a JSON file. But every time you write it, it ends up being output in a different order, depending on how you created it in the first place! This makes for some ugly diffs.

**sorted-object** gives you the answer. Just use this package to create a version of your object with its keys sorted before serializing, and you'll get a consistent order every time.

```js
var sortedObject = require("sorted-object");

var objectToSerialize = generateStuffNondeterministically();

// Before:
fs.writeFileSync("dest.json", JSON.stringify(objectToSerialize));

// After:
var sortedVersion = sortedObject(objectToSerialize);
fs.writeFileSync("dest.json", JSON.stringify(sortedVersion));
```

The default order direction is Ascending, you may provide a boolean value as 2nd parameter to sort in Descending order.

```js
var sortedObject = require("sorted-object");

// sortedObject(obj, isDesc)

sortedObject({ c:1, d:1, a:1, b:1 });
//=> { a: 1, b: 1, c: 1, d: 1 }

sortedObject(['c', 'd', 'a', 'b'], true);
//=> { d: 1, c: 1, b: 1, a: 1 }
```
