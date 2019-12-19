// Creating a class called HashTable
class Hashtable {
  // the constructor takes in 1 argurment, size of the hash table
  constructor(size) {
    // we create the datastructure for the size by using arrays
    this.data = new Array(size);
  }
  // _ means a property that is not for public access.
  // we create a hash (mixture of numbers as an address for data)
  // it takes in an argument of key, representing the key in key/value pair for our hash table/object
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // the hash gets set to the hash (0) + the key(the argument,
      // converted into a number (charCodeAt)(the iteration i) multiplied by the iteration
      // taken the modules of 50. which means that the number is anywhere between 0 and 50)
      hash = (hash + key.charCodeAt(i) * i) % this.data.length; // the length of the array for our hash table
    }
    return hash;
  }

  // Set is used to store values to the keys
  set(key, value) {
    // we create a hash for the key we have set and call it address (relating to the position in the array)
    let address = this._hash(key);
    // if the position in the array is not used. e.g. hash = 23 and this.data[23] = null
    if (!this.data[address]) {
      // then we create an array inside of that position
      this.data[address] = [];
    }
    // we push the values into the empty array and store the data in an array
    this.data[address].push([key, value]);
    console.log(this.data);
  }
  // Get is used to retrieve the value of a given key
  get(key) {
    // we found the hashed key
    let address = this._hash(key);
    // we store it into a container in this case a constant
    const currentBucket = this.data[address];
    // We check if the address inside of this.data exists
    if (currentBucket) {
      // if it does we loop through the different arrays within the address (if there is more than one input)
      for (let i = 0; i < currentBucket.length; i++) {
        // we check if the bucket has the same name as the key
        if (currentBucket[i][0] === key) {
          // if it does we log the value of that bucket
          console.log("currentBucket", currentBucket[i][1]);
        }
      }
    }
  }
  //  this function returns all the keys we have stored inside the hash table
  keys() {
    // we create an empty array to store the keys into
    const keyArrays = [];
    // we loop through the entire this.data array and return if we find data
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log("this.data", this.data[i]);
        // then we push our keys into an empty array
        keyArrays.push(this.data[i][0][0]);
      }
    }
    console.log("this.data", keyArrays);
  }
}

const myHashTable = new Hashtable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("grape6", 10000);
myHashTable.keys();
myHashTable.get("grapes");
