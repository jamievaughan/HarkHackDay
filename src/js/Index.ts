import * as mqtt from 'async-mqtt';
import * as api from './Api';

import { default as config } from 'Config';

console.log('Hark Baby!');

const mqttAddress = `${config.GatewayAddress}:8883`;
const client = mqtt.connect(mqttAddress);

const handleMessage = async (topic: string, message: string): Promise<void> => {
    const body = JSON.parse(message.toString());

    switch (topic) {
        case 'temp':
            // Too warm!
            if (body.value > 25) {
                await api.turnDeviceOn('redLamp');
                await api.turnDeviceOff('blueLamp');

                await api.turnDeviceOn('fan');
                await api.turnDeviceOff('heater');
            }
            
            // Too cold!
            if (body.value < 10) {
                await api.turnDeviceOn('blueLamp');
                await api.turnDeviceOff('redLamp');

                await api.turnDeviceOn('heater');
                await api.turnDeviceOff('fan');
            }
        break;
    }
};

const main = async (): Promise<void> => {
    console.log(`Connected to MQTT broker: ${mqttAddress}`);

    client.on('message', async (topic: string, message: string) => {
        console.log(`topic=${topic} message=${message}`);

        await handleMessage(topic, message);
    })
};

client.on('connect', main);