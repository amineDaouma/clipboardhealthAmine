const {deterministicPartitionKey} = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("returns a hash of the stringified event data if partition key does not exist", () => {
    const event = { data: "event" };
    const result = deterministicPartitionKey(event);
    expect(result).toHaveLength(128);
  });
  it("returns the partition key from the event object if it exists", () => {
    const event = { partitionKey: "MouseDownKey" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("MouseDownKey");
  });
});
