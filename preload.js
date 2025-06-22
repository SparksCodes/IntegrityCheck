const { contextBridge } = require("electron");
const crypto = require("crypto");

contextBridge.exposeInMainWorld("hashUtils", {
  generateHash: (data, algorithm) => {
    const buffer = Buffer.isBuffer(data) ? data : Buffer.from(data);
    return crypto.createHash(algorithm).update(buffer).digest("hex");
  }
});