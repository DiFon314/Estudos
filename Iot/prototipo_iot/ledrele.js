const { Board, Relay, Led } = require("johnny-five");
const board = new Board();


board.on("ready", () => {
  const rele = new Relay(8);
  const led =new Led(13);
  board.repl.inject({
    rele,
    led,
  });

});