import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_number: yup.string().required(),
  status: yup.string().required(),
  business_id: yup.string().nullable(),
});
