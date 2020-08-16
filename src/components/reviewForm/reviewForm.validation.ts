import * as Yup from 'yup';

const ReviewSchema = Yup.object().shape({
  name: Yup.string().required("*Required"),
  email: Yup.string().email("*Invalid email").required("*Required"),
  comment: Yup.string().max(250, "*Max 250 characters").required("*Required"),
});

export default ReviewSchema;
