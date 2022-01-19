const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("succesfully connected!")
    conn.write("Name: BTS");
  });

  conn.on("data", (data) => {
    console.log("received", data)
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = connect