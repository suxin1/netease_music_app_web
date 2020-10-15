// Validate async action type groups;
export function validateAsyncActionTypes(types) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expect an Array of three action types.");
  }
  if (!types.every((type) => typeof type === "symbol")) {
    throw new Error("Expect action types to be string.");
  }
}
