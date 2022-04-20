// Create mock data with elements containing increasing items

export const data = new Array(100).fill().map((_, i) => ({
  id: i,
  name: `Item ${i + 1}`,
}));
