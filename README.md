# Discord Pomelo Username Claimer

A high-performance Discord username availability monitor and claimer built for low-latency.

Monitors multiple target usernames and attempts to claim them as soon as they become available on multiple tokens.

## Features

* **Multi-username monitoring** — Track multiple usernames simultaneously.
* **Multi-token support** — Pair individual accounts with individual target usernames.
* **Low-latency architecture** — Designed to minimize request and processing overhead.
* **JA3 fingerprint support** — Customizable TLS client fingerprints for request handling.
* **Concurrent claiming** — Handles multiple username targets independently.
* **QUIC/UDP transport support** — Uses the project's low-latency transport implementation for supported operations.
* **Lightweight** — Minimal dependencies and straightforward configuration.
* **Grace claiming** - Tracks and calculates the username release time dynamically then claims it as it becomes available

## Installation

```bash
git clone https://github.com/zephyrcore/discord-username-sniper.git
```
```bash
cd discord-username-sniper
```
```bash
npm install
```

OR ( auto setup )

```bash
setup.bat
```

## Configuration

### 1. Add accounts

Add your account credentials to `tokens.txt` using the following format:

```txt
TOKEN:PASSWORD
TOKEN2:PASSWORD2
TOKEN3:PASSWORD3
```

### 2. Add target usernames

Add the usernames you want to monitor to `usernames.txt`, one username per line:

```txt
username
anotherusername
thirdusername
```

> **Important:** The number of tokens must match the number of usernames. Each account is paired with the username at the corresponding line number.

For example:

```txt
# tokens.txt
TOKEN_A:PASSWORD_A
TOKEN_B:PASSWORD_B
```

```txt
# usernames.txt
username_a
username_b
```

`TOKEN_A` monitors `username_a`, while `TOKEN_B` monitors `username_b`.

## Usage

Start the claimer with:

```bash
node index.js
```

The process will begin monitoring the configured usernames and attempt a claim when an availability change is detected.


## Security

`tokens.txt` contains sensitive account credentials.

Do **not** commit or publish this file. Add credential/configuration files containing secrets to `.gitignore` where appropriate:

```gitignore
tokens.txt
```

Avoid sharing Discord tokens, passwords, session credentials, or other authentication material with anyone.

## Disclaimer

This project is provided for educational and experimental purposes.

Automated account actions, unofficial API usage, fingerprint manipulation, or attempts to circumvent platform protections may violate Discord's Terms of Service or result in account restrictions. You are responsible for how you use the software and for complying with applicable platform rules.
