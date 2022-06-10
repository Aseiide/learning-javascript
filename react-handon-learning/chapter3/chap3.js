// 関数をオブジェクトのプロパティとして記述できる
const obj = {
  message: "They can be added to objects like variables",
  log(message) {
    console.log(message);
  }
};

obj.log(obj.message);

// 配列に関数を格納することもできる
const messages = [
  "They can be inserted into arrays",
  message => console.log(message),
  "like variables",
  message => console.log(message)
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables

// 関数を別の関数に引数として渡す
const insideFn = logger =>
  logger(
    "They can be sent to other functions as arguments"
  );

insideFn(message => console.log(message)); // They can be sent to other functions as arguments
