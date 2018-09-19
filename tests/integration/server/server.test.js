const axios = require('axios');

describe('Test API endpoints', () => {
  // Write tests for .../ratings enpoint
  describe('Test /:dealId/api/ratings endpoint', () => {
    test('should receive total stars ', async () => {
      try {
        const { data } = await axios.get('http://localhost:3002/1/api/ratings', {
          params: { total: '' }
        });
        expect(data).toHaveProperty('total');
        expect(typeof data.total === 'number').toBeTruthy();
      } catch (e) {
        throw e;
      }
    });

    test('should receive average stars', async () => {
      try {
        const { data } = await axios.get('http://localhost:3002/1/api/ratings', {
          params: { average: '' }
        });
        expect(data).toHaveProperty('average');
        expect(typeof data.average === 'number').toBeTruthy();
      } catch (e) {
        throw e;
      }
    });

    test('should receive average and total stars', async () => {
      try {
        const { data } = await axios.get('http://localhost:3002/1/api/ratings', {
          params: { average: '', total: '' }
        });
        expect(data).toHaveProperty('average');
        expect(data).toHaveProperty('total');
        expect(typeof data.average === 'number').toBeTruthy();
        expect(typeof data.total === 'number').toBeTruthy();
      } catch (e) {
        throw e;
      }
    });
  });
  /* --------------------------------------------------------------------------------------------- */

  // Write tests for .../reviews endpoint
  describe('Test /:dealId/api/reviews endpoint', () => {
    test('should receive total stars ', async () => {
      try {
        const { data } = await axios.get('http://localhost:3002/1/api/reviews');
        expect(Array.isArray(data)).toBeTruthy();
        expect(data[0]).toHaveProperty('rating');
        expect(data[0]).toHaveProperty('user');
        expect(data[0]).toHaveProperty('last_updated');
      } catch (e) {
        throw e;
      }
    });
  });
});
