import * as request from 'request';

import { default as config } from './Config';

const baseUrl = `http://${config.GatewayAddress}:3000/api`;

export const getMetricState = async () => {
  const response = await request.get(`${baseUrl}/metric`);

  return JSON.parse(response.body.toString());
}

export const getDeviceState = async () => {
  const response = await request.get(`${baseUrl}/devices/state`);

  return JSON.parse(response.body.toString());
}

export const turnDeviceOff = async (device: string) => {
  const body = {isOn: false}

  const response = await request.post(`${baseUrl}/devices/${device}/state`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return JSON.parse(response.body.toString());
}

export const turnDeviceOn = async (device: string) => {
  const body = {isOn: true}

  const response = await request.post(`${baseUrl}/devices/${device}/state`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return JSON.parse(response.body.toString());
}
