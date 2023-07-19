import * as yup from 'yup';

export const routeValidationSchema = yup.object().shape({
  route_name: yup.string().required(),
  business_id: yup.string().nullable(),
});
