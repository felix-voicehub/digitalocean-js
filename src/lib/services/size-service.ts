import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Size } from '../models/size';

export class SizeService {
  constructor() {}

  /**
   * Get all sizes
   */
  public getAllSizes(): Promise<Size[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/sizes`)
        .then(response => {
          // Return actual sizes instead of wrapped sizes
          resolve(response.data.sizes);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
