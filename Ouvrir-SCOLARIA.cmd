@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js est necessaire. Consultez le fichier README.md.
  pause
  exit /b 1
)
node server.cjs --open
pause
