// console.log(this);

var object = {
  prop: this,
  embed: {
    method: function () {
      return this;
    },
  },
};

var array = [
  this,
  function () {
    return this;
  },
];

function global() {
  console.log("from global", this);
  function sub() {
    console.log("from sub", this);
  }
  sub();
}

global.call(object);

new global();
