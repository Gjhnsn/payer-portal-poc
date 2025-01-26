import { createModuleFederationConfig } from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    designSystem: "designSystem@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
