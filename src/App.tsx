import './App.scss';

import Highcharts from 'highcharts';
import React, { useEffect } from 'react';

import ReviewForm from './components/reviewForm';
import ReviewItem from './components/shared/ReviewItem';
import mockReviewsChartData from './data/reviewsChartData.mockData';
import useReviews from './hooks/useReviews';
import IReview from './interfaces/review.interface';

function App() {
  const { reviews, addReview } = useReviews();

  const submit = (review: IReview) => {
    addReview(review);
  };

  useEffect(() => {
    Highcharts.chart("reviewsChart", {
      title: {
        text: "Average rating over the last 6 months  ",
      },
      chart: {
        height: "325px",
      },
      tooltip: { enabled: false },
      legend: { enabled: false },
      yAxis: {
        max: 5,
        title: {
          text: "Average User Rating",
        },
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        type: "datetime",
        accessibility: {
          rangeDescription: "Last six months",
        },
      },
      series: [
        {
          type: "line",
          data: mockReviewsChartData,
        },
      ],
    });
  }, []);

  return (
    <div className="App">
      <div className="Review">
        <div className="Review__formChart">
          <ReviewForm handleSubmit={submit} />
          <div id="reviewsChart"></div>
        </div>
        <ul className="Review__reviewList">
          {reviews &&
            reviews.map((review) => (
              <ReviewItem
                key={review.date} // Would be UID
                name={review.name}
                rating={review.rating}
                date={review.date}
                comment={review.comment}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
