import { useEffect, useState } from 'react';

import IReviewItem from '../interfaces/reviewItem.interface';
import mockReviews from './../data/reviews.mockData';
import mockReviewsChartData from './../data/reviewsChartData.mockData';

function useReviews() {
  const [reviews, setReviews] = useState<Array<IReviewItem>>();
  const [reviewChartData, setReviewChartData] = useState<Number[][]>();

  // MOCK: API CALL FOR REVIEW DATA
  useEffect(() => {
    setReviews(mockReviews);
    setReviewChartData(mockReviewsChartData);
  }, []);

  const addReview = (review: IReviewItem): void => {
    setReviews((prev: Array<IReviewItem> = []) => [review, ...prev]);
  };

  return { reviews, addReview, reviewChartData };
}

export default useReviews;
