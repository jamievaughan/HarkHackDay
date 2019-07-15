const baseUrl = '';

export const getMetricState = async () => {
  const response = await fetch(`${baseUrl}/metric`);
}

export const getDeviceState = async () => {
  const response = await fetch(`${baseUrl}/devices/state`);
}

export const turnDeviceOff = async (device: string) => {
  const response = await fetch(`${baseUrl}/devices/state`);
}