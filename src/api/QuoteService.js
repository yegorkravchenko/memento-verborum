import axios from 'axios';

export default class QuoteService {
  static async getRandom() {
    const response = await axios.get('https://api.quotable.io/random');
    return response;
  }
}
