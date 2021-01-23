import Promise from 'bluebird';

import { PROMOTION_API_ROUTE } from 'routes';

import { get } from './apiService';

export const apiGetPromotion = (body, promotionCode) => new Promise((resolve, reject) => {
  const path = PROMOTION_API_ROUTE + promotionCode;
  get(path, body, resolve, reject);
});
