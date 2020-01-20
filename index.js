process.env.NTBA_FIX_319 = 1;

var TelegramBot = require('node-telegram-bot-api');

var token = '981150414:AAEQ6jfdeV5_4pXdIoV2dZibbFHJs59kMEc';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  var chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, msg);
});

