import axios from 'axios';
import { CLAIM_URL, buildHeaders } from './config.js';
import { log } from './logger.js';

const REQUEST_TIMEOUT = 15000;

export async function claimUsername(username, token, password) {
  log.action(`Attempting claim on @${username}`);

  try {
    await axios.patch(
      CLAIM_URL,
      { username, password },
      {
        headers: buildHeaders(token),
        timeout: REQUEST_TIMEOUT,
      }
    );

    log.ok(`Successfully claimed @${username}`);
    return true;
  } catch {
    log.fail(`Failed to claim @${username}`);
    return false;
  }
}
