import 'envparse2/config';
import fs from 'fs';
import { checkUsername } from './utils/check.js';
import { claimUsername } from './utils/claim.js';
import { log, printBanner } from './utils/logger.js';

const POLL_INTERVAL = 5000;

function readLines(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8').trim();
    if (!data) throw new Error(`${filePath} is empty`);

    return data
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
  } catch (err) {
    log.fail(`Error reading ${filePath}: ${err.message}`);
    process.exit(1);
  }
}

function parseTokenPassword(line, index) {
  const separatorIndex = line.indexOf(':');

  if (separatorIndex === -1) {
    log.fail(`Invalid tokens.txt format on line ${index + 1}`);
    log.info('Expected format: token:password');
    process.exit(1);
  }

  const token = line.slice(0, separatorIndex).trim();
  const password = line.slice(separatorIndex + 1).trim();

  if (!token || !password) {
    log.fail(`Missing token or password on line ${index + 1}`);
    process.exit(1);
  }

  return { token, password };
}

function loadTargets() {
  const tokenLines = readLines('tokens.txt');
  const usernames = readLines('usernames.txt');

  if (tokenLines.length !== usernames.length) {
    log.fail('Token count must match username count');
    process.exit(1);
  }

  return usernames.map((username, i) => {
    const { token, password } = parseTokenPassword(tokenLines[i], i);
    return { username, token, password };
  });
}

async function runCycle(targets) {
  for (const target of targets) {
    const available = await checkUsername(target.username, target.token);

    if (available) {
      await claimUsername(target.username, target.token, target.password);
    }
  }
}

async function main() {
  printBanner();

  const targets = loadTargets();

  log.divider();
  targets.forEach((target, i) => {
    log.info(`Target ${i + 1}  ->  @${target.username}`);
  });
  log.divider();

  log.info(`Monitoring ${targets.length} target(s)`);
  log.warn('Press CTRL+C to stop the sniper');
  log.divider();

  await runCycle(targets);

  setInterval(() => runCycle(targets), POLL_INTERVAL);
}

main().catch((err) => {
  log.fail(err.message);
  process.exit(1);
});
