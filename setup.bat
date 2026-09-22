```bat
@echo off
setlocal
title claimer
cd /d "%~dp0"

cls
echo.
echo ============================================================
echo                    og-claimer
echo ============================================================
echo.

echo [1/5] Setting up the tool directory...
if not exist "node_modules" (
    echo       Project directory ready.
) else (
    echo       Existing installation detected.
)
echo.

echo [2/5] Installing dependencies...
call npm install
if errorlevel 1 (
    echo.
    echo [ERROR] npm install failed.
    echo Make sure Node.js and npm are installed and available in PATH.
    pause
    exit /b 1
)
echo       Dependencies installed successfully.
echo.

echo [3/5] Making default environment...
(
    echo CHECK_URL=https://discord.com/api/v9/unique-username/username-attempt-unauthed
    echo CLAIM_URL=https://discord.com/api/v9/users/@me
    echo USER_AGENT=Mozilla/5.0 ^(Windows NT 10.0; Win64; x64^) AppleWebKit/537.36 ^(KHTML, like Gecko^) Chrome/147.0.0.0 Safari/537.36
    echo X_SUPER_PROPERTIES=eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzE0Ny4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTQ3LjAuMC4wIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjM3MjA1MCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=
) > ".env"

if errorlevel 1 (
    echo.
    echo [ERROR] Failed to create .env
    pause
    exit /b 1
)
echo       Default .env created successfully.
echo.

echo [4/5] Finishing up...
echo       Setup complete.
echo.

echo ============================================================
echo.

node index.js

echo.
echo ============================================================
echo Process exited.
echo ============================================================
pause

endlocal
```
