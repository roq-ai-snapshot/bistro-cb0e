const mapping: Record<string, string> = {
  businesses: 'business',
  inventories: 'inventory',
  orders: 'order',
  routes: 'route',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
