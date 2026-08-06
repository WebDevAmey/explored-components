import type { DeviceSpec } from "./types";

export const devices: DeviceSpec[] = [
  {
    id: "desktop",
    label: "Desktop",
    frameWidth: 220,
    frameHeight: 140,
    radius: 10,
    contentBlocks: 6,
    contentLayout: "grid",
  },
  {
    id: "tablet",
    label: "Tablet",
    frameWidth: 140,
    frameHeight: 176,
    radius: 16,
    contentBlocks: 4,
    contentLayout: "stack",
  },
  {
    id: "mobile",
    label: "Mobile",
    frameWidth: 84,
    frameHeight: 176,
    radius: 20,
    contentBlocks: 3,
    contentLayout: "list",
  },
];

export const getDevice = (id: DeviceSpec["id"]): DeviceSpec =>
  devices.find((device) => device.id === id) ?? devices[0];
