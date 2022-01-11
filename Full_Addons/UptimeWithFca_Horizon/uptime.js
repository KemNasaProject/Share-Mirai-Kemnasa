const Monitor = require('ping-monitor');
const notifier = require('node-notifier');

const myit = new Monitor({
    address: '127.0.0.1',
    port: 1000, //port bot
    interval: 10,
  config: {
    intervalUnits: 'seconds',
    generateId: false // defaults is true
  }
});


myit.on('up', function (res, state) {
    console.log('Check Connected : ' + res.address + ':' + res.port + ' Is Online !');
});


myit.on('down', function (res, state) {
    console.log('Check Connected : ' + res.address + ':' + res.port + ' Is Offline !');
      return notifier.notify({title: 'Check Connected',message: 'ListenMQTT Is DOWN !'});
});


myit.on('stop', function (res, state) {
    console.log(res.address + ' monitor has stopped.');
      return notifier.notify({title: 'Check Connected',message: 'ListenMQTT Is DOWN !'});
});


myit.on('error', function (error, res) {
    console.log(error);
    return notifier.notify({title: 'Check Connected',message: 'ListenMQTT Is DOWN !'});
});


myit.on('timeout', function (error, res) {
    console.log(error);
      return notifier.notify({title: 'Check Connected',message: 'ListenMQTT Is DOWN !'});
});