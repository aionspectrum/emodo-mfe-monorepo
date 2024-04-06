/// <reference types="@testing-library/jest-dom" />

import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

/* extend 'expect' to have jest-dom features */
expect.extend(matchers);

/* run a clean after each test case (e.g. clearing jsdom) */
afterEach(() => {
  cleanup();
});
