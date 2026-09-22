export const CHECK_URL = process.env.CHECK_URL;
export const CLAIM_URL = process.env.CLAIM_URL;

export function buildHeaders(token) {
  return {
    'Authorization': token,
    'Content-Type': 'application/json',
    'User-Agent': process.env.USER_AGENT,
    'X-Super-Properties': process.env.X_SUPER_PROPERTIES,
    'X-Discord-Locale': 'en-US',
    'Referer': 'https://discord.com/channels/@me',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Priority': 'u=1, i',
    'Sec-Ch-Ua': '"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'X-Debug-Options': 'bugReporterEnabled',
  };
}
