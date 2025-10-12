@echo off
echo 🏥 Rural Healthcare Kiosk - Setup Script
echo ========================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
    echo.
    echo 🚀 To start the development server, run:
    echo    npm run dev
    echo.
    echo 🌐 The website will be available at: http://localhost:5173
    echo.
    echo 📱 Features included:
    echo    • Multilingual support (English, Hindi, Telugu)
    echo    • WhatsApp integration
    echo    • Google Maps integration
    echo    • Mobile-responsive design
    echo    • Smooth animations
    echo.
    echo 🎉 Setup complete! Happy coding!
) else (
    echo ❌ Failed to install dependencies. Please check your internet connection and try again.
    pause
    exit /b 1
)

pause
