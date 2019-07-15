import { default as config } from './Config';

const baseUrl = `${config.GatewayAddress}:3000/api`;

export const getMetricState = async () => {
  const response = await fetch(`${baseUrl}/metric`);

  return response.json();
}

export const getDeviceState = async () => {
  const response = await fetch(`${baseUrl}/devices/state`);

  return response.json();
}

export const turnDeviceOff = async (device: string) => {
  const body = {isOn: false}

  const response = await fetch(`${baseUrl}/devices/${device}/state`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
}

export const turnDeviceOn = async (device: string) => {
  const body = {isOn: true}

  const response = await fetch(`${baseUrl}/devices/${device}/state`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
}
