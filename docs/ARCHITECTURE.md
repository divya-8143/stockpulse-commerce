# StockPulse System Architecture & Technical Specifications

## 1. Concurrency & Stock Allocation Strategy
StockPulse leverages atomic transaction isolation to eliminate race conditions during high-volume checkout events:

1. **Pre-flight Availability Check**: Validates that all items in cart have `quantityOnHand - quantityReserved >= requestedQuantity`.
2. **Transaction Reservation Lock**: Atomically increments `quantityReserved` inside a database transaction.
3. **Fulfillment Deduction**: When an order transitions to `SHIPPED`, `quantityOnHand` is decremented and `quantityReserved` is cleared.
4. **Cancellation Rollback**: If an order is cancelled or expires, `quantityReserved` is decremented back to the available pool.

## 2. Finite State Machine Transitions

| From Status | Allowed Target Statuses | Inventory Effect |
| :--- | :--- | :--- |
| `PENDING` | `CONFIRMED`, `CANCELLED` | Reserves stock |
| `CONFIRMED` | `PROCESSING`, `CANCELLED` | Holds reservation |
| `PROCESSING` | `SHIPPED`, `CANCELLED` | Transitions to fulfillment |
| `SHIPPED` | `DELIVERED`, `RETURN_REQUESTED` | Deducts physical on-hand stock |
| `CANCELLED` | *(Terminal)* | Releases reserved stock |
