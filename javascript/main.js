/**
 *  @App
 *      please see note above in regards to
 *      why we are wrapping code in this App method
 */
function App() {
/**
 *  @addItemToList
 *  arguments:
 *      arr: array
 *      item: new item to add
 *  return:
 *      arr
 */
// write your code for addItemToList here...
function addItemToList(arr, item) {
    var array = arr;
    if (typeof item !== "string"){
        return array;
    }
    array.push(item);
    return array;
}
    
/**
 *  @addItemToListFront
 *  arguments:
 *      arr: array
 *      item: new item to add
 *  return:
 *      arr
 */
// write your code for addItemToListFront here...
function addItemToListFront(arr, item){
    var array = arr;
     if (typeof item !== "string"){
        return array;
    }
    array.unshift(item);
    return array;
}

/**
 *  @removeItemFromListEnd
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for removeItemFromListEnd here...

function removeItemFromListEnd(arr){
    var array = arr;
    array.pop();
    return array;
}

/**
 *  @removeItemFromListStart
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for removeItemFromListStart here...
function removeItemFromListStart(arr){
    var array = arr;
    array.shift();
    return array;
}

/**
 *  @getItemFromList
 *  arguments:
 *      arr: array
 *      i: number
 *  return:
 *      item at i-th position || -1
 */
// write your code for getItemFromList here...
function getItemFromList(arr, i){
    var array = arr;
    if (array[i] === undefined){
        return -1
    }
    return array[i];
    
}

/**
 *  @removeItemFromPosition
 *  arguments:
 *      arr: array
 *      i: number
 *  return:
 *      arr
 */
// write your code for removeItemFromPosition here...
function removeItemFromPosition(arr, y){
    var array = arr;
    arr.splice(arr, y);
    return array;
}

/**
 *  @checkForDupes
 *  THIS IS AN EXTRA CREDIT PROBLEM
 *  arguments:
 *      arr: array
 *  return:
 *      arr
 */
// write your code for checkForDupes here...

/**
 *  @addToTop
 *  THIS IS AN EXTRA CREDIT PROBLEM
 *  arguments:
 *      arr: array
 *      item: string
 *  return:
 *      arr
 */
// write your code for addToTop here...


//******************************
// IGNORE from here on out
// magic to make the tests work
// Please ignore if you are simply solving the problem
    var addItemToList = 
            (typeof addItemToList === "undefined")
            ? null
            : addItemToList
        , addItemToListFront = 
            (typeof addItemToListFront === "undefined")
            ? null
            : addItemToListFront
        , removeItemFromListEnd = 
            (typeof removeItemFromListEnd === "undefined")
            ? null
            : removeItemFromListEnd
        , removeItemFromListStart = 
            (typeof removeItemFromListStart === "undefined")
            ? null
            : removeItemFromListStart
        , getItemFromList = 
            (typeof getItemFromList === "undefined")
            ? null
            : getItemFromList
        , removeItemFromPosition = 
            (typeof removeItemFromPosition === "undefined")
            ? null
            : removeItemFromPosition
        , checkForDupes = 
            (typeof checkForDupes === "undefined")
            ? null
            : checkForDupes
        , addToTop = 
            (typeof addToTop === "undefined")
            ? null
            : addToTop;
    return {
        addItemToList: addItemToList
        , addItemToListFront: addItemToListFront
        , removeItemFromListEnd: removeItemFromListEnd
        , removeItemFromListStart: removeItemFromListStart
        , getItemFromList: getItemFromList
        , removeItemFromPosition: removeItemFromPosition
        , checkForDupes: checkForDupes
        , addToTop: addToTop
    }
} // App
App();
function caller() {
    return App;
}
caller();