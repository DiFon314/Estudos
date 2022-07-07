import { initializeApp } from 'firebase/app';
const { Board, Led, Relay } = require("johnny-five");
const board = new Board();

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsMpyMXKwisJ4bQ9URXPCognXQDG_9oQk",
  authDomain: "<teste1-34e42.firebaseapp.com>",
  databaseUrl: "<https://teste1-34e42.firebaseio.com>",
  storageBucket: "<teste1-34e42.appspot.com>",
};

const app = initializeApp(firebaseConfig);
board.on("ready", () => {
  const rele = new Relay(8);

  board.repl.inject({
    rele,
  });

  var star =firebase.database().ref('lampada').on('value',function(snapshot){
    let lampada = snapshot.val();

    if(lampada=='on'){
        rele.on();
    }else{
        rele.off();
    }
  });

});