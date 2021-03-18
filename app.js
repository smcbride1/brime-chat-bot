//Max number of chat messages that can be sent within a minute
const chatLimit = process.env.CHAT_LIMIT || 40;
//Max number of commands per user per minute
const userCommandLimit = process.env.USER_COMMAND_LIMIT || 10;
//Brime specific Ably credentials
const ablyCredentials = {
    clientId: process.env.CLIENT_ID,
    key: process
};
//Channel's username
const username;

let webSocket;
const connect = () => {
    console.log("Attempting to connect...");
    webSocket = new webSocket(`wss://realtime.ably.io/?key=${ablyCredentials.key}&clientId=${ablyCredentials}&format=json&heartbeats=true&v=1.2&lib=js-web-1.2.6`);
}

webSocket.onerror = (error) => {
    throw new Error(`Failed to connect: ${error.message}`);
}

webSocket.onclose = () => {
    throw new Error(`WebSocket closed`);
}

websocket.onopen = () => {
    console.log("Connected successfully");
}

const close = () => {
    console.log("Closing connection...");
    websocket.close();
}

webSocket.onmessage = (event) => {
    data = JSON.parse(event.data);
    switch(data.action) {
        case 4:
            webSocket.send({"action":10,"channel":`[?rewind=100]${username}`});
            break;
        case 11:
            webSocket.send({"action":14,"channel":`[?rewind=100]${username}`,"msgSerial":0,"presence":[{"action":2,"data":null}]});
            break;
        case 15:
            break;
        default:
    }
}
