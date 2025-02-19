// promise eke object hai jo ki kisi asyn prog ka completion or failure ka state dena hai return krta hai promise(object)

//creating promise call bak function

const Promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise1 ka setiomeout ");
    resolve();
  }, 1000);
});

//consume promise
Promise1.then(() => {
  console.log("promise1 consumed");
  //jab tk resolve ko call nhi kroge promise consume nahi hoga
});

//case 2 : ek var me promise create or consume kr lo
const Promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise2 ka setiomeout ");
    resolve();
  }, 1000);
}).then(() => {
  console.log("pro2 consumed");
});

//case 3 - jo resolve me dohe wahi then ko milega
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve({ name: "aditi", age: 22 });
  }, 1000);
});

promise3.then((user) => {
  console.log(typeof user);
});

//case 4
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const error = true;
    const error = false;
    if (!error) {
      resolve({ name: "sneha", age: 22 });
    } else {
      console.log("ERROR THERE in pro 4!!!!!!!!!!!!");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user.name);
    return user.name;
    //return a object(promise)isko chain kr skte hai
  })
  .then((abovedata) => {
    console.log(abovedata);
    //data returned by above promise
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //ye block hamesha chalega
    console.log("the promise is wither rejected or resolved");
  });

//case 5 :using async function to consume promise
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    // const error = false;
    if (!error) {
      resolve({ name: "sneha", age: 22 });
    } else {
      console.log("ERROR THERE in pro 5!!!!!!!!!!!!");
    }
  }, 1000);
});

async function consumepromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
// consumepromise5();

async function getuser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();
    console.log(typeof data);
    //   console.log(data);
  } catch (err) {
    console.log("the error", err);
  }
}

getuser();
