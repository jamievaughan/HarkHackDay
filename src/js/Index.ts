import * as mqtt from 'async-mqtt';
import * as api from './API';

console.log('Hark Baby!');

const address = '10.0.0.45:8883';
const client = mqtt.connect(address);

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
    client.on('message', async (topic: string, message: string) => {
        console.log(`topic=${topic} message=${message}`);

        await handleMessage(topic, message);
    })
};

client.on('connect', main);