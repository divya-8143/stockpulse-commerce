import { getResults } from "./unit/test_framework.js";
import "./unit/stock_reservation_concurrency.test.js";
import "./unit/out_of_stock_prevention.test.js";
import "./unit/order_lifecycle_stock_sync.test.js";
import "./unit/low_stock_threshold_alerts.test.js";
import "./unit/reporting_engine.test.js";
import "./unit/customer_crm_ltv.test.js";

async function runAllTests() {
  console.log("\n=======================================================");
  console.log("  ⚡ StockPulse Enterprise Test Suite Execution");
  console.log("=======================================================\n");

  await new Promise(r => setTimeout(r, 100));

  const results = getResults();
  let passedCount = 0;
  let failedCount = 0;

  const grouped = new Map<string, typeof results>();
  for (const r of results) {
    const list = grouped.get(r.suite) || [];
    list.push(r);
    grouped.set(r.suite, list);
  }

  for (const [suite, suiteTests] of grouped.entries()) {
    console.log(`\n📦 Suite: ${suite}`);
    for (const t of suiteTests) {
      if (t.passed) {
        console.log(`  ✓ PASS: ${t.name}`);
        passedCount++;
      } else {
        console.error(`  ✗ FAIL: ${t.name} -> ${t.error}`);
        failedCount++;
      }
    }
  }

  console.log("\n-------------------------------------------------------");
  console.log(`  Total Specs Executed: ${results.length}`);
  console.log(`  Passed: ${passedCount}`);
  console.log(`  Failed: ${failedCount}`);
  console.log("=======================================================\n");

  if (failedCount > 0) {
    process.exit(1);
  }
}

runAllTests();
