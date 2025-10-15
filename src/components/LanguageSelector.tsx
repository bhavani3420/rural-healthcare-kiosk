interface LanguageSelectorProps {
  currentLanguage: 'en' | 'hi' | 'te';
  onLanguageChange: (lang: 'en' | 'hi' | 'te') => void;
  translations: any;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLanguage, 
  onLanguageChange, 
  translations 
}) => {
  const languages = [
    { code: 'en', name: translations.en.english, flag: '🇺🇸' },
    { code: 'hi', name: translations.en.hindi, flag: '🇮🇳' },
    { code: 'te', name: translations.en.telugu, flag: '🇮🇳' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-2">
        <div className="flex space-x-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code as 'en' | 'hi' | 'te')}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                currentLanguage === lang.code
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-1">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;

