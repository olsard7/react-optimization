// Create mock data with elements containing increasing items

export const data = new Array(100)
  .fill()
  .map((_, i) => i + 1)
  .map((n) => ({
    id: n,
    name: `Item ${n}`,
  }));
