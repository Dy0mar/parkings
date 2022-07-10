

// fixme: remove timeout
export const timeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
