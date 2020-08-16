import { waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import ReviewForm from './reviewForm';

describe("ReviewForm", () => {
  it("renders successfully", () => {
    const reviewForm = render(<ReviewForm handleSubmit={jest.fn()} />);
    expect(reviewForm).toBeTruthy();
  });

  it("sumbit is called and no errors with valid input", async () => {
    const handleSubmit = jest.fn();
    const { findAllByTestId, findByText, findByPlaceholderText } = render(
      <ReviewForm handleSubmit={handleSubmit} />
    );

    const nameInput = (await findByPlaceholderText("Name")) as HTMLInputElement;
    const emailInput = (await findByPlaceholderText(
      "Email Address"
    )) as HTMLInputElement;
    const commentInput = (await findByPlaceholderText(
      "Comment"
    )) as HTMLInputElement;
    const submitButton = (await findByText("Submit")) as HTMLButtonElement;

    userEvent.type(nameInput, "TestName");
    userEvent.type(emailInput, "test@test.com");
    userEvent.type(commentInput, "A test comment");
    userEvent.click(submitButton);

    const errors = await findAllByTestId("error")
      .then(() => true)
      .catch(() => false);

    expect(errors).toBe(false);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("user can submit valid form with only keys", async () => {
    const testFormValues = {
      name: "TestName",
      email: "test@test.com",
      rating: "4",
      comment: "Test comment",
    };
    let submittedValues = {
      name: null,
      email: null,
      rating: null,
      comment: null,
    };
    const handleSubmit = jest.fn((values) => (submittedValues = values));

    const { findAllByTestId, findByText, findByTestId, container } = render(
      <ReviewForm handleSubmit={handleSubmit} />
    );

    const nameInput = (await findByTestId("name")) as HTMLInputElement;
    const emailInput = (await findByTestId("email")) as HTMLInputElement;
    // React Stars Lib does not use {...props} or pass testid
    const ratingInput = container.querySelector(
      ".react-stars"
    ) as HTMLInputElement;
    const commentInput = (await findByTestId("comment")) as HTMLTextAreaElement;
    const submitButton = (await findByText("Submit")) as HTMLButtonElement;

    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(nameInput).toHaveFocus();
    userEvent.type(nameInput, testFormValues.name);
    userEvent.tab();

    expect(emailInput).toHaveFocus();
    userEvent.type(emailInput, testFormValues.email);
    userEvent.tab();

    expect(ratingInput).toHaveFocus();
    userEvent.type(ratingInput, String(testFormValues.rating));
    userEvent.tab();

    expect(commentInput).toHaveFocus();
    userEvent.type(commentInput, testFormValues.comment);
    userEvent.tab();

    expect(submitButton).toHaveFocus();
    userEvent.click(submitButton);

    const errors = await findAllByTestId("error")
      .then(() => true)
      .catch(() => false);

    expect(errors).toBe(false);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(submittedValues.name).toContain(testFormValues.name);
    expect(submittedValues.email).toContain(testFormValues.email);
    expect(String(submittedValues.rating)).toContain(
      String(testFormValues.rating)
    );
    expect(submittedValues.comment).toContain(testFormValues.comment);
  });

  it("sumbit is not called and errors with no input", async () => {
    const handleSubmit = jest.fn();
    const { findAllByTestId, findByText } = render(
      <ReviewForm handleSubmit={handleSubmit} />
    );
    const submitButton = (await findByText("Submit")) as HTMLButtonElement;

    userEvent.click(submitButton);

    const errors = await findAllByTestId("error");

    await waitFor(() => {
      expect(errors).toBeTruthy();
      expect(errors.length).not.toBe(0);
      expect(handleSubmit).toHaveBeenCalledTimes(0);
    });
  });
});
