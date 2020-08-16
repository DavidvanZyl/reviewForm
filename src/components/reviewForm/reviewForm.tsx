import './reviewForm.scss';

import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import IReview from '../../interfaces/review.interface';
import Input from '../shared/Input';
import ReviewSchema from './reviewForm.validation';

interface IReviewFormProps {
  handleSubmit(arg0: IReview): void;
}

const ReviewForm: React.FC<IReviewFormProps> = ({
  handleSubmit,
}: IReviewFormProps) => {
  const defaultValues: IReview = {
    name: "",
    email: "",
    rating: 0,
    comment: "",
    date: null,
  };

  // Use key update to clear star review - remove once value prop works as expected
  // Known Issue: https://github.com/n49/react-stars/issues/68
  const [starsKey, setStarsKey] = useState(0);

  const onSubmit = async (values, { resetForm }) => {
    values.date = new Date().getTime() / 1000;
    handleSubmit(values);
    resetForm();
    setStarsKey(Math.random());
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={ReviewSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ setFieldValue }) => (
        <Form className="reviewForm">
          <Input name="name" placeholder="Name" required />
          <Input name="email" placeholder="Email Address" required />
          <Field
            classNames="input__rating"
            size={32}
            key={starsKey}
            onChange={(value) => setFieldValue("rating", value)}
            component={ReactStars}
            data-testid="rating"
          />
          <Input
            className="input__textarea"
            as="textarea"
            maxLength="250"
            name="comment"
            placeholder="Comment"
            required
          />
          <button className="button button__submit" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ReviewForm;
