import { render } from '@testing-library/react';
import { Form, Formik } from 'formik';
import React from 'react';

import Input from './Input';

describe("(Component) Input", () => {
  it("renders successfully", () => {
    const input = render(
      <Formik initialValues={{ Name: "" }} onSubmit={jest.fn()}>
        {() => (
          <Form>
            <Input name="Name" placeholder="Name" required />
          </Form>
        )}
      </Formik>
    );
    expect(input).toBeTruthy();
  });
});
