@echo off
rem ES Modules tidak bisa dibuka lewat file://, jadi jalankan server lokal dulu.
cd /d "%~dp0"
where python >nul 2>nul
if errorlevel 1 (
  echo Python tidak ditemukan. Pasang Python, lalu jalankan: python -m http.server 5500
  pause
  exit /b 1
)
start "Server TugasKu" /min cmd /c "python -m http.server 5500"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:5500/"
