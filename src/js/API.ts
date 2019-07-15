const baseUrl = '';

export const getMetricState = async () => {
  const response = await fetch(`${baseUrl}/metric`);

  return response;
}

export const getDeviceState = async () => {
  const response = await fetch(`${baseUrl}/devices/state`);

  return response;
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

  return response;
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

  return response;
}
