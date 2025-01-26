export type RemoteKeys = "designSystem/PrimaryButton";
type PackageType<T> = T extends "designSystem/PrimaryButton"
  ? typeof import("designSystem/PrimaryButton")
  : unknown;
