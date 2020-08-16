import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe("Review App", () => {
  it("renders successfully", () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });
});
