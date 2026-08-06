export type DeviceKind = "desktop" | "tablet" | "mobile";

export interface DeviceSpec {
  id: DeviceKind;
  label: string;
  frameWidth: number;
  frameHeight: number;
  radius: number;
  contentBlocks: number;
  contentLayout: "grid" | "stack" | "list";
}

export interface DeviceFrameProps {
  device: DeviceSpec;
}

export interface DevicePreviewProps {
  active: DeviceKind;
}

export interface DeviceTabsProps {
  active: DeviceKind;
  onChange: (device: DeviceKind) => void;
}
