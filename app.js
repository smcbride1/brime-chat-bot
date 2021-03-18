//Max number of chat messages that can be sent within a minute
const chatLimit = 40;
//Max number of commands per user per minute
const userCommandLimit = 10;
//Brime specific Ably credentials
const ablyCredentials = {
    clientId: process.env.CLIENT_ID,
    key: process
};