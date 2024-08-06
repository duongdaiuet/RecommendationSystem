



function listenToMQTT() {
  // Create a client instance
  const client = mqtt.connect('ws://localhost:9001'); // Replace with your WebSocket broker address

  // Set up the callbacks
  client.on('connect', function () {
    console.log('Connected to MQTT broker via WebSocket');

    // Subscribe to the topic you want to listen to
    client.subscribe('test/topic', function (err) {
      if (!err) {
        console.log('Subscribed to topic');
      } else {
        console.error('Subscription error: ', err);
      }
    });
  });

  client.on('message', function (topic, message) {
    // Message is Buffer, convert it to string if needed
    console.log('Received message:', message.toString());
  });

  client.on('error', function (err) {
    console.error('Connection error: ', err);
  });


  client.on('close', function () {
    console.log('Connection closed');
  });
}


$(document).ready(function() {
    listenToMQTT();
})