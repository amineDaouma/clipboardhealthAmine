import { createHash } from "crypto";

export const customStringify = (data) => (typeof data !== "string" ? JSON.stringify(data) : data);
export const customHash = (data) => createHash("sha3-512").update(data).digest("hex");