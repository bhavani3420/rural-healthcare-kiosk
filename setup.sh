# Rural Healthcare Kiosk - Installation Script

echo "🏥 Rural Healthcare Kiosk - Setup Script"
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 To start the development server, run:"
    echo "   npm run dev"
    echo ""
    echo "🌐 The website will be available at: http://localhost:5173"
    echo ""
    echo "📱 Features included:"
    echo "   • Multilingual support (English, Hindi, Telugu)"
    echo "   • WhatsApp integration"
    echo "   • Google Maps integration"
    echo "   • Mobile-responsive design"
    echo "   • Smooth animations"
    echo ""
    echo "🎉 Setup complete! Happy coding!"
else
    echo "❌ Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi
