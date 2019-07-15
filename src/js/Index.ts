import * as mqtt from 'mqtt';

console.log('Hark Baby!');

const address = '10.0.0.45:8883';
const client = mqtt.connect(address);

client.on('connect', () => {
    client.on('message', (topic, message) => {
        console.log(`topic=${topic} message=${message}`);
    });
});