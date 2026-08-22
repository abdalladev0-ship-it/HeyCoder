@echo off
title NEXUS

cd /d "%~dp0\.."

echo.
echo ============================
echo        Starting NEXUS
echo ============================
echo.
echo Project: %CD%
echo.

if not exist "package.json" (
    echo ERROR: package.json was not found!
    echo Expected location:
    echo %CD%\package.json
    echo.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo node_modules was not found.
    echo Installing dependencies...
    echo.
    call npm install

    if errorlevel 1 (
        echo.
        echo npm install failed!
        pause
        exit /b 1
    )
)

echo Starting NEXUS...
echo.

call npm start

echo.
echo NEXUS has stopped.
echo.

pause