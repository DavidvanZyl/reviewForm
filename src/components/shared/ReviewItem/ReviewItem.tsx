import './ReviewItem.scss';

import moment from 'moment';
import React from 'react';
import ReactStars from 'react-rating-stars-component';

import IReviewItem from '../../../interfaces/reviewItem.interface';

const Input: React.FC<IReviewItem> = ({
  name,
  rating,
  date,
  comment,
}: IReviewItem) => {
  return (
    <li key={date} className="ReviewItem">
      <ReactStars edit={false} value={rating} size={24} />
      <p className="ReviewItem__meta">
        by <span className="ReviewItem__meta__name">{name}</span>,{" "}
        {moment.unix(Number(date)).format("MMMM DD, YYYY")}
      </p>
      <p>{comment}</p>
    </li>
  );
};

export default Input;
