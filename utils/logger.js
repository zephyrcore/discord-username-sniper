const COLOR = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  gray: '\x1b[90m',
  red: '\x1b[91m',
  blue: '\x1b[94m',
  purple: '\x1b[95m',
};

export function paint(color, text) {
  return `${COLOR[color]}${text}${COLOR.reset}`;
}

const DIVIDER = '─'.repeat(100);

const BANNER = `
 ██████╗ ██████╗  ██████╗ █████╗      ██████╗██╗      █████╗ ██╗███╗   ███╗███████╗██████╗
██╔═══██╗██╔══██╗██╔════╝██╔══██╗    ██╔════╝██║     ██╔══██╗██║████╗ ████║██╔════╝██╔══██╗
██║   ██║██████╔╝██║     ███████║    ██║     ██║     ███████║██║██╔████╔██║█████╗  ██████╔╝
██║   ██║██╔══██╗██║     ██╔══██║    ██║     ██║     ██╔══██║██║██║╚██╔╝██║██╔══╝  ██╔══██╗
╚██████╔╝██║  ██║╚██████╗██║  ██║    ╚██████╗███████╗██║  ██║██║██║ ╚═╝ ██║███████╗██║  ██║
 ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝     ╚═════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝`;

const stamp = () =>
  paint('gray', `[${new Date().toLocaleTimeString('en-GB', { hour12: false })}]`);

function emit(tag, tagColor, msg) {
  console.log(`${stamp()} ${paint(tagColor, tag)} ${msg}`);
}

export function printBanner() {
  console.log();
  console.log(paint('purple', BANNER));
  console.log();
  console.log(paint('blue', '                  [ Discord username claim vulnerability ]'));
}

export const log = {
  info: (msg) => emit('[*]', 'purple', msg),
  ok: (msg) => emit('[+]', 'blue', msg),
  fail: (msg) => emit('[-]', 'red', msg),
  warn: (msg) => emit('[!]', 'red', msg),
  action: (msg) => emit('[>]', 'purple', msg),
  dim: (msg) => console.log(`${stamp()} ${paint('gray', msg)}`),
  divider: () => console.log(paint('gray', DIVIDER)),
};
