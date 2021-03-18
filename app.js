//Max number of chat messages that can be sent within a minute
const chatLimit = process.env.CHAT_LIMIT || 40;
//Max number of commands per user per minute
const userCommandLimit = process.env.USER_COMMAND_LIMIT || 10;
//Brime specific Ably credentials
const ablyCredentials = {
    clientId: process.env.CLIENT_ID,
    key: process
};

let webSocket;
const connect = () => {
    console.log("Attempting to connect...");
    const webSocket = new webSocket(`wss://realtime.ably.io/?key=${ablyCredentials.key}&clientId=${ablyCredentials}&format=json&heartbeats=true&v=1.2&lib=js-web-1.2.6`);
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