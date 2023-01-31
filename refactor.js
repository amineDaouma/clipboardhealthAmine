import { customStringify, customHash } from "./helpers";

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

export const deterministicPartitionKey = (event) => {
  let candidate=TRIVIAL_PARTITION_KEY;
  if (event) {
    candidate = event.partitionKey || customStringify(event)
    candidate = customStringify(candidate);
  }
  if(candidate.length  > MAX_PARTITION_KEY_LENGTH) {
    candidate = customHash(candidate)
  }
  return candidate;
}