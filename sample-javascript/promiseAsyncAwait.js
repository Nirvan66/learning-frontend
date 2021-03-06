// promises ##########################################
const number = 1;
const myExecutor = (resolve, reject) => {
  if (number > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};
function orderSunglasses() {
  return new Promise(myExecutor);
}
const orderPromise = orderSunglasses();
console.log(orderPromise); //Sunglasses order processed.

// timeout callback ##########################################
const usingSTO = () => {
  console.log("Not");
};
// wait 3 seconds and call usingSTO
setTimeout(usingSTO, 3000);

// handle promise ##########################################
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue); //Sunglasses order processed.
};
const handleFailure = (rejectReason) => {
  console.log(rejectReason); // That item is sold out.
};
promise = new Promise(myExecutor);
promise.then(handleSuccess).catch(handleFailure);

// chaning promises
firstPromiseFunction()
  .then((firstResolveVal) => {
    return secondPromiseFunction(firstResolveVal);
  })
  .then((secondResolveVal) => {
    console.log(secondResolveVal);
  });

// Multiple promises ##########################################
const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. Placing order now.`
  );
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};
const checkSunglasses = checkAvailability("sunglasses", "Favorite Supply Co.");
const checkPants = checkAvailability("pants", "Favorite Supply Co.");
const checkBags = checkAvailability("bags", "Favorite Supply Co.");

let myPromises = Promise.all([checkSunglasses(), checkPants(), checkBags()]);

myPromises
  .then((arrayOfValues) => {
    onFulfill(arrayOfValues);
  })
  .catch((rejectionReason) => {
    onReject(rejectionReason);
  });

// async function that return promises ##########################################
const withAsync = async (num) => {
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
};
withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});

// await with asyn #################################################
function brainstormDinner() {
  return new Promise((resolve, reject) => {
    console.log("In brain storm");
    setTimeout(() => {
      console.log("Still in brain storm");
      resolve("returning brain storm");
    }, 1000);
  });
}
async function announceDinner() {
  let value = await brainstormDinner(); //waits here
  console.log(`${value}`);
}
announceDinner(); // keeps going to next line here
console.log("Over here");
/*
waits for promise to complete 
but only in the async function.

The rest of the code outside async
function keeps going.
Execution order:
  In brain storm
  Over here
  Still in brain storm
  returning brain storm
*/
//another example
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yay, I resolved!");
    }, 1000);
  });
};
async function noAwait() {
  let value = myPromise();
  console.log(value);
}
async function yesAwait() {
  let value = await myPromise();
  console.log(value);
}
noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
