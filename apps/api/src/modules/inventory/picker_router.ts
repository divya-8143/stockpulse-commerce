export interface BinLocation {
  aisle: number;
  shelf: number;
  level: number;
  bin: string;
}

export interface PickItemLocation {
  sku: string;
  orderId: string;
  quantity: number;
  location: BinLocation;
}

export class WarehousePickerRouter {
  public static optimizePickSequence(items: PickItemLocation[]): PickItemLocation[] {
    // Sort items by aisle ascending, then shelf, level, and bin to minimize picker travel distance (S-shape / Z-curve)
    return [...items].sort((a, b) => {
      if (a.location.aisle !== b.location.aisle) {
        return a.location.aisle - b.location.aisle;
      }
      // Alternate direction per aisle (Serpentine curve)
      const isEvenAisle = a.location.aisle % 2 === 0;
      if (isEvenAisle) {
        return b.location.shelf - a.location.shelf;
      }
      return a.location.shelf - b.location.shelf;
    });
  }
}
