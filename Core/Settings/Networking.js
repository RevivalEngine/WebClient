// These don't need to use SSL since they aren't intended to be run remotely, for now
var NETWORKING_WORLDSERVER_URL = "ws://localhost:1734";
var NETWORKING_PACK_MESSAGES = false; // Requires the server to support binary packed messages (messagepack format)

const MESSAGE_TOKEN_SEPARATOR = "#";
