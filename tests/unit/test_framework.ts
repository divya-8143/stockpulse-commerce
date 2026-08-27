export interface TestResult {
  suite: string;
  name: string;
  passed: boolean;
  error?: string;
}

const testResults: TestResult[] = [];
let currentSuite = "Global";

export function describe(suiteName: string, fn: () => void | Promise<void>) {
  currentSuite = suiteName;
  fn();
}

export function it(testName: string, fn: () => void | Promise<void>) {
  try {
    const res = fn();
    if (res instanceof Promise) {
      res.then(() => {
        testResults.push({ suite: currentSuite, name: testName, passed: true });
      }).catch(err => {
        testResults.push({ suite: currentSuite, name: testName, passed: false, error: err.message });
      });
    } else {
      testResults.push({ suite: currentSuite, name: testName, passed: true });
    }
  } catch (err: any) {
    testResults.push({ suite: currentSuite, name: testName, passed: false, error: err.message });
  }
}

export function expect(actual: any) {
  return {
    toBe(expected: any) {
      if (actual !== expected) {
        throw new Error(`Expected ${JSON.stringify(expected)} but received ${JSON.stringify(actual)}`);
      }
    },
    toEqual(expected: any) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected equal: ${JSON.stringify(expected)} vs ${JSON.stringify(actual)}`);
      }
    }
  };
}

export function getResults(): TestResult[] {
  return testResults;
}
