import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface RouteInterface {
  id?: string;
  route_name: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface RouteGetQueryInterface extends GetQueryInterface {
  id?: string;
  route_name?: string;
  business_id?: string;
}
