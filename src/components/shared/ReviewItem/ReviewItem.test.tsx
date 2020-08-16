import { render } from '@testing-library/react';
import React from 'react';

import ReviewItem from './ReviewItem';

describe("(Component) ReviewItem", () => {
  it("renders successfully", () => {
    const reviewItem = render(
      <ReviewItem
        name="Name"
        comment="comment"
        rating={4}
        date={"1594828629"}
      />
    );
    expect(reviewItem).toBeTruthy();
  });
});
