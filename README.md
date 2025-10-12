# Rural Healthcare Kiosk Website

A comprehensive healthcare website for rural communities featuring multilingual support, telemedicine integration, and modern UI/UX design.

## 🌟 Features

### 🎯 User Experience & Interface
- Responsive, mobile-friendly layout
- Clean, daylight-tone theme (white, green, and blue shades)
- Soft rounded corners and subtle shadows
- Grid-based structured sections
- High readability and accessible color contrast

### 🌍 Multilingual Support
- Three languages: English, हिंदी (Hindi), తెలుగు (Telugu)
- Dynamic language switching
- All content translated automatically
- Localized WhatsApp messages

### 🧭 Key Sections
- **Hero Section**: Showcases UVP with call-to-action buttons
- **Problem Section**: Visual explanation of healthcare challenges
- **Solution Section**: Kiosk technology and remote consultation details
- **Benefits Section**: Key functional benefits
- **Testimonials Section**: Real-user quotes and success stories
- **Impact Gallery**: Real-life photos and community success stories
- **Footer Section**: Contact info and social media links

### ⚙️ Functional Features
- **Dynamic WhatsApp Chat**: Prefilled messages in chosen language
- **Google Maps Integration**: "Find a Kiosk Near You" functionality
- **Tap-to-Call**: Direct phone number links for mobile users
- **Live Language Translation**: Instant page content updates
- **Smooth Animations**: Framer Motion for transitions and effects

### 🖼️ Visual Enhancements
- High-quality stock images
- Rounded, softly shadowed cards
- Lazy-loading for performance
- Balanced composition with alternating sections
- Consistent theme throughout

### 🔐 Accessibility & Usability
- Large readable fonts for rural users
- Proper alt tags on all images
- Descriptive button labels
- Minimal distractions and easy navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the directory
   cd rural-healthcare-kiosk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

## 🛠️ Technical Stack

- **Frontend**: React.js + TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Localization**: Custom React state-based translation system

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Multilingual Support

### Supported Languages
- **English** (en): Default language
- **हिंदी** (hi): Hindi translation
- **తెలుగు** (te): Telugu translation

### Adding New Languages
To add a new language, update the `src/data/translations.ts` file with the new language code and translations.

## 📞 Contact Integration

### WhatsApp Integration
- Prefilled messages in the selected language
- Direct WhatsApp Web/App integration
- Phone number: +91 98765 43210

### Google Maps Integration
- "Find Kiosk" button opens Google Maps
- Searches for "health kiosk near me"

### Phone Integration
- Direct call functionality for mobile devices
- Tap-to-call feature

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades (primary-50 to primary-900)
- Secondary: Green shades (secondary-50 to secondary-900)

### Fonts
- Primary font: Inter (Google Fonts)
- Fallback: System fonts

### Animations
All animations are powered by Framer Motion and can be customized in individual components.

## 📁 Project Structure

```
rural-healthcare-kiosk/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageSelector.tsx
│   ├── data/
│   │   └── translations.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🔮 Future Enhancements

- Integration with ThingSpeak or cloud DB for kiosk data
- Online appointment booking module
- User health record dashboard with secure login
- IoT sensor integration for live diagnostics
- Real-time kiosk availability status
- Payment gateway integration
- SMS notifications
- Push notifications for mobile users

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

Feel free to contribute to this project by:
1. Reporting bugs
2. Suggesting new features
3. Improving translations
4. Enhancing accessibility
5. Optimizing performance

## 📞 Support

For support or questions:
- Email: support@ruralhealthcarekiosk.com
- Phone: +91 98765 43210
- WhatsApp: Available through the website

---

**Made with ❤️ for rural healthcare accessibility**
