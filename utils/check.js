import axios from 'axios';
import { CHECK_URL, buildHeaders } from './config.js';
import { log } from './logger.js';

const REQUEST_TIMEOUT = 15000;

export async function checkUsername(username, token) {
  try {
    const response = await axios.post(
      CHECK_URL,
      { username },
      {
        headers: buildHeaders(token),
        timeout: REQUEST_TIMEOUT,
      }
    );

    if (response.status === 200 && response.data.taken === false) {
      log.ok(`@${username} is available`);
      return true;
    }

    return false;
  } catch {
    return false;
  }
}
