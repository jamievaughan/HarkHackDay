import * as request from 'request-promise';

import { default as config } from './Config';

const baseUrl = `http://${config.GatewayAddress}:3000/api`;

export const getMetricState = async () => {
  const response = await request.get(`${baseUrl}/metric`);

  return response;
}

export const getDeviceStates = async () => {
  const response = await request.get(`${baseUrl}/devices/state`);

  return response;
}

export const getDeviceState = async (device: string) => {
  const response = await request.get(`${baseUrl}/devices/${device}/state`);

  return response;
}

export const turnDeviceOff = async (device: string) => {
  const body = { turnOn: false };

  const response = await request.post(`${baseUrl}/devices/${device}/state`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response;
}

export const turnDeviceOn = async (device: string) => {
  const body = { turnOn: true };

  const response = await request.post(`${baseUrl}/devices/${device}/state`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response;
}
