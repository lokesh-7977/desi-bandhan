
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'te' | 'kn' | 'ta' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type TranslationStrings = {
  [key: string]: string;
};

const translations: Record<Language, TranslationStrings> = {
  en: {
    'hero.tagline': 'Connect • Chat • Explore',
    'hero.headline': 'Where Intentional Connections Begin',
    'hero.subtext': 'For open-minded singles, loving couples, and the LGBTQ+ community — explore fantasies, share desires, build trust.',
    'hero.getStarted': 'Get Started for Free',
    'hero.watchDemo': 'Watch Demo',
    'hero.trustIndicator': 'Join thousands of verified members • No credit card required • Free forever plan',
    'hero.verifiedCouples': 'Verified Couples',
    'hero.verifiedCouplesDesc': 'Photo verification ensures authentic connections',
    'hero.lgbtqFriendly': 'LGBTQ+ Friendly',
    'hero.lgbtqFriendlyDesc': 'Welcoming all orientations and relationship styles',
    'hero.consentFirst': 'Consent First',
    'hero.consentFirstDesc': 'Every interaction prioritizes mutual respect',
    'nav.howItWorks': 'How it Works',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.login': 'Login',
    'usp.title': 'Why Choose Our Platform?',
    'usp.subtitle': 'Built on trust, designed for everyone, focused on meaningful connections',
    'usp.verifiedTitle': 'Verified Couples, Real Connections',
    'usp.verifiedDesc': 'Couples undergo photo verification ensuring authentic interactions and building trust within our community.',
    'usp.consentTitle': 'Consent-First Chat Experience',
    'usp.consentDesc': 'Every interaction prioritizes mutual respect and clear consent, creating a safe space for exploration.',
    'usp.safeTitle': 'Safe & Inclusive for LGBTQ+',
    'usp.safeDesc': 'Proudly welcoming all orientations and relationship styles in a judgment-free, supportive environment.',
    'footer.copyright': '© 2024 DesiBandhan. All rights reserved.',
    'footer.tagline': 'Built with love for meaningful connections in a safe, inclusive environment.'
  },
  hi: {
    'hero.tagline': 'जुड़ें • चैट करें • खोजें',
    'hero.headline': 'जहाँ सच्चे रिश्ते शुरू होते हैं',
    'hero.subtext': 'खुले विचारों वाले सिंगल्स, प्रेमी जोड़ों, और LGBTQ+ समुदाय के लिए — कल्पनाओं को साझा करें, इच्छाओं को व्यक्त करें, विश्वास बनाएं।',
    'hero.getStarted': 'मुफ्त में शुरू करें',
    'hero.watchDemo': 'डेमो देखें',
    'hero.trustIndicator': 'हजारों सत्यापित सदस्यों से जुड़ें • कोई क्रेडिट कार्ड आवश्यक नहीं • हमेशा के लिए मुफ्त प्लान',
    'hero.verifiedCouples': 'सत्यापित जोड़े',
    'hero.verifiedCouplesDesc': 'फोटो सत्यापन प्रामाणिक कनेक्शन सुनिश्चित करता है',
    'hero.lgbtqFriendly': 'LGBTQ+ अनुकूल',
    'hero.lgbtqFriendlyDesc': 'सभी झुकाव और रिश्ते की शैलियों का स्वागत',
    'hero.consentFirst': 'सहमति पहले',
    'hero.consentFirstDesc': 'हर बातचीत पारस्परिक सम्मान को प्राथमिकता देती है',
    'nav.howItWorks': 'यह कैसे काम करता है',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.about': 'हमारे बारे में',
    'nav.login': 'लॉगिन',
    'usp.title': 'हमारा प्लेटफॉर्म क्यों चुनें?',
    'usp.subtitle': 'विश्वास पर बना, सभी के लिए डिज़ाइन किया गया, सार्थक कनेक्शन पर केंद्रित',
    'usp.verifiedTitle': 'सत्यापित जोड़े, वास्तविक कनेक्शन',
    'usp.verifiedDesc': 'जोड़े फोटो सत्यापन से गुजरते हैं जो प्रामाणिक बातचीत सुनिश्चित करता है और हमारे समुदाय में विश्वास बनाता है।',
    'usp.consentTitle': 'सहमति-पहले चैट अनुभव',
    'usp.consentDesc': 'हर बातचीत पारस्परिक सम्मान और स्पष्ट सहमति को प्राथमिकता देती है, खोज के लिए एक सुरक्षित स्थान बनाती है।',
    'usp.safeTitle': 'LGBTQ+ के लिए सुरक्षित और समावेशी',
    'usp.safeDesc': 'बिना किसी जजमेंट के, सहायक वातावरण में सभी झुकाव और रिश्ते की शैलियों का गर्व से स्वागत करते हैं।',
    'footer.copyright': '© 2024 DesiBandhan। सभी अधिकार सुरक्षित।',
    'footer.tagline': 'सुरक्षित, समावेशी वातावरण में सार्थक कनेक्शन के लिए प्रेम से बनाया गया।'
  },
  te: {
    'hero.tagline': 'కనెక్ట్ • చాట్ • అన్వేషించండి',
    'hero.headline': 'ఉద్దేశపూర్వక కనెక్షన్లు ప్రారంభమయ్యే చోటు',
    'hero.subtext': 'ఓపెన్ మైండెడ్ సింగిల్స్, ప్రేమగల జంటలు, మరియు LGBTQ+ కమ్యూనిటీ కోసం — ఫాంటసీలను అన్వేషించండి, కోరికలను పంచుకోండి, నమ్మకాన్ని నిర్మించండి।',
    'hero.getStarted': 'ఉచితంగా ప్రారంభించండి',
    'hero.watchDemo': 'డెమో చూడండి',
    'hero.trustIndicator': 'వేలాది ధృవీకరించబడిన సభ్యులతో చేరండి • క్రెడిట్ కార్డ్ అవసరం లేదు • ఎల్లప్పుడూ ఉచిత ప్లాన్',
    'hero.verifiedCouples': 'ధృవీకరించబడిన జంటలు',
    'hero.verifiedCouplesDesc': 'ఫోటో ధృవీకరణ ప్రామాణిక కనెక్షన్లను నిర్ధారిస్తుంది',
    'hero.lgbtqFriendly': 'LGBTQ+ స్నేహపూర్వక',
    'hero.lgbtqFriendlyDesc': 'అన్ని ధోరణులు మరియు సంబంధ శైలులను స్వాగతించడం',
    'hero.consentFirst': 'సమ్మతి మొదట',
    'hero.consentFirstDesc': 'ప్రతి పరస్పర చర్య పరస్పర గౌరవానికి ప్రాధాన్యత ఇస్తుంది',
    'nav.howItWorks': 'ఇది ఎలా పనిచేస్తుంది',
    'nav.pricing': 'ధర',
    'nav.about': 'గురించి',
    'nav.login': 'లాగిన్',
    'usp.title': 'మా ప్లాట్‌ఫారమ్‌ను ఎందుకు ఎంచుకోవాలి?',
    'usp.subtitle': 'నమ్మకంపై నిర్మించబడింది, అందరికీ రూపొందించబడింది, అర్థవంతమైన కనెక్షన్లపై దృష్టి సారించింది',
    'usp.verifiedTitle': 'ధృవీకరించబడిన జంటలు, నిజమైన కనెక్షన్లు',
    'usp.verifiedDesc': 'జంటలు ఫోటో ధృవీకరణకు లోనవుతారు, ఇది ప్రామాణిక పరస్పర చర్యలను నిర్ధారిస్తుంది మరియు మా కమ్యూనిటీలో నమ్మకాన్ని నిర్మిస్తుంది।',
    'usp.consentTitle': 'సమ్మతి-మొదట చాట్ అనుభవం',
    'usp.consentDesc': 'ప్రతి పరస్పర చర్య పరస్పర గౌరవం మరియు స్పష్టమైన సమ్మతికి ప్రాధాన్యత ఇస్తుంది, అన్వేషణ కోసం సురక్షిత స్థలాన్ని సృష్టిస్తుంది।',
    'usp.safeTitle': 'LGBTQ+ కోసం సురక్షితం & సమ్మిళితం',
    'usp.safeDesc': 'తీర్పు లేని, సహాయక వాతావరణంలో అన్ని ధోరణులు మరియు సంబంధ శైలులను గర్వంగా స్వాగతించడం।',
    'footer.copyright': '© 2024 DesiBandhan. అన్ని హక్కులు రక్షించబడ్డాయి.',
    'footer.tagline': 'సురక్షిత, సమ్మిళిత వాతావరణంలో అర్థవంతమైన కనెక్షన్ల కోసం ప్రేమతో నిర్మించబడింది।'
  },
  kn: {
    'hero.tagline': 'ಸಂಪರ್ಕಿಸಿ • ಚಾಟ್ ಮಾಡಿ • ಅನ್ವೇಷಿಸಿ',
    'hero.headline': 'ಉದ್ದೇಶಪೂರ್ವಕ ಸಂಪರ್ಕಗಳು ಪ್ರಾರಂಭವಾಗುವ ಸ್ಥಳ',
    'hero.subtext': 'ಮುಕ್ತ ಮನಸ್ಸಿನ ಸಿಂಗಲ್‌ಗಳು, ಪ್ರೀತಿಯ ಜೋಡಿಗಳು ಮತ್ತು LGBTQ+ ಸಮುದಾಯಕ್ಕಾಗಿ — ಕಲ್ಪನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಆಸೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ, ನಂಬಿಕೆಯನ್ನು ನಿರ್ಮಿಸಿ।',
    'hero.getStarted': 'ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ',
    'hero.watchDemo': 'ಡೆಮೊ ವೀಕ್ಷಿಸಿ',
    'hero.trustIndicator': 'ಸಾವಿರಾರು ಪರಿಶೀಲಿತ ಸದಸ್ಯರೊಂದಿಗೆ ಸೇರಿ • ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಅಗತ್ಯವಿಲ್ಲ • ಶಾಶ್ವತವಾಗಿ ಉಚಿತ ಯೋಜನೆ',
    'hero.verifiedCouples': 'ಪರಿಶೀಲಿತ ಜೋಡಿಗಳು',
    'hero.verifiedCouplesDesc': 'ಫೋಟೋ ಪರಿಶೀಲನೆಯು ಅಧಿಕೃತ ಸಂಪರ್ಕಗಳನ್ನು ಖಚಿತಗೊಳಿಸುತ್ತದೆ',
    'hero.lgbtqFriendly': 'LGBTQ+ ಸ್ನೇಹಪರ',
    'hero.lgbtqFriendlyDesc': 'ಎಲ್ಲಾ ಕೋನಗಳು ಮತ್ತು ಸಂಬಂಧ ಶೈಲಿಗಳನ್ನು ಸ್ವಾಗತಿಸುವುದು',
    'hero.consentFirst': 'ಸಮ್ಮತಿ ಮೊದಲು',
    'hero.consentFirstDesc': 'ಪ್ರತಿ ಸಂವಹನವು ಪರಸ್ಪರ ಗೌರವಕ್ಕೆ ಆದ್ಯತೆ ನೀಡುತ್ತದೆ',
    'nav.howItWorks': 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    'nav.pricing': 'ಬೆಲೆ',
    'nav.about': 'ಬಗ್ಗೆ',
    'nav.login': 'ಲಾಗಿನ್',
    'usp.title': 'ನಮ್ಮ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?',
    'usp.subtitle': 'ನಂಬಿಕೆಯ ಮೇಲೆ ನಿರ್ಮಿತ, ಎಲ್ಲರಿಗೂ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ, ಅರ್ಥಪೂರ್ಣ ಸಂಪರ್ಕಗಳ ಮೇಲೆ ಗಮನಿಸಿದೆ',
    'usp.verifiedTitle': 'ಪರಿಶೀಲಿತ ಜೋಡಿಗಳು, ನಿಜವಾದ ಸಂಪರ್ಕಗಳು',
    'usp.verifiedDesc': 'ಜೋಡಿಗಳು ಫೋಟೋ ಪರಿಶೀಲನೆಗೆ ಒಳಗಾಗುತ್ತಾರೆ, ಇದು ಅಧಿಕೃತ ಸಂವಹನಗಳನ್ನು ಖಚಿತಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ನಮ್ಮ ಸಮುದಾಯದಲ್ಲಿ ನಂಬಿಕೆಯನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ।',
    'usp.consentTitle': 'ಸಮ್ಮತಿ-ಮೊದಲ ಚಾಟ್ ಅನುಭವ',
    'usp.consentDesc': 'ಪ್ರತಿ ಸಂವಹನವು ಪರಸ್ಪರ ಗೌರವ ಮತ್ತು ಸ್ಪಷ್ಟ ಸಮ್ಮತಿಗೆ ಆದ್ಯತೆ ನೀಡುತ್ತದೆ, ಅನ್ವೇಷಣೆಗಾಗಿ ಸುರಕ್ಷಿತ ಸ್ಥಳವನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ।',
    'usp.safeTitle': 'LGBTQ+ ಗಾಗಿ ಸುರಕ್ಷಿತ ಮತ್ತು ಸಮಾವೇಶಕ',
    'usp.safeDesc': 'ತೀರ್ಪು-ಮುಕ್ತ, ಸಹಾಯಕ ವಾತಾವರಣದಲ್ಲಿ ಎಲ್ಲಾ ಕೋನಗಳು ಮತ್ತು ಸಂಬಂಧ ಶೈಲಿಗಳನ್ನು ಹೆಮ್ಮೆಯಿಂದ ಸ್ವಾಗತಿಸುತ್ತೇವೆ।',
    'footer.copyright': '© 2024 DesiBandhan. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    'footer.tagline': 'ಸುರಕ್ಷಿತ, ಸಮಾವೇಶಕ ವಾತಾವರಣದಲ್ಲಿ ಅರ್ಥಪೂರ್ಣ ಸಂಪರ್ಕಗಳಿಗಾಗಿ ಪ್ರೀತಿಯಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ।'
  },
  ta: {
    'hero.tagline': 'இணைக்க • அரட்டை • ஆராய்',
    'hero.headline': 'நோக்கமுள்ள இணைப்புகள் தொடங்கும் இடம்',
    'hero.subtext': 'திறந்த மனப்பான்மையுள்ள ஒற்றையர்கள், அன்பான ஜோடிகள் மற்றும் LGBTQ+ சமூகத்திற்காக — கற்பனைகளை ஆராயுங்கள், ஆசைகளைப் பகிருங்கள், நம்பிக்கையை உருவாக்குங்கள்.',
    'hero.getStarted': 'இலவசமாக தொடங்கவும்',
    'hero.watchDemo': 'டெமோ பார்க்கவும்',
    'hero.trustIndicator': 'ஆயிரக்கணக்கான சரிபார்க்கப்பட்ட உறுப்பினர்களுடன் சேருங்கள் • கிரெடிட் கார்டு தேவையில்லை • எப்போதும் இலவச திட்டம்',
    'hero.verifiedCouples': 'சரிபார்க்கப்பட்ட ஜோடிகள்',
    'hero.verifiedCouplesDesc': 'புகைப்பட சரிபார்ப்பு உண்மையான இணைப்புகளை உறுதி செய்கிறது',
    'hero.lgbtqFriendly': 'LGBTQ+ நட்பு',
    'hero.lgbtqFriendlyDesc': 'அனைத்து நோக்குநிலைகள் மற்றும் உறவு பாணிகளை வரவேற்கிறது',
    'hero.consentFirst': 'ஒப்புதல் முதலில்',
    'hero.consentFirstDesc': 'ஒவ்வொரு தொடர்பும் பரஸ்பர மரியாதைக்கு முன்னுரிமை அளிக்கிறது',
    'nav.howItWorks': 'இது எப்படி வேலை செய்கிறது',
    'nav.pricing': 'விலை',
    'nav.about': 'பற்றி',
    'nav.login': 'உள்நுழைவு',
    'usp.title': 'எங்கள் தளத்தை ஏன் தேர்வு செய்ய வேண்டும்?',
    'usp.subtitle': 'நம்பிக்கையின் அடிப்படையில் உருவாக்கப்பட்டது, அனைவருக்கும் வடிவமைக்கப்பட்டது, அர்த்தமுள்ள இணைப்புகளில் கவனம் செலுத்துகிறது',
    'usp.verifiedTitle': 'சரிபார்க்கப்பட்ட ஜோடிகள், உண்மையான இணைப்புகள்',
    'usp.verifiedDesc': 'ஜோடிகள் புகைப்பட சரிபார்ப்புக்கு உட்படுகின்றனர், இது உண்மையான தொடர்புகளை உறுதி செய்கிறது மற்றும் எங்கள் சமூகத்தில் நம்பிக்கையை உருவாக்குகிறது.',
    'usp.consentTitle': 'ஒப்புதல்-முதல் அரட்டை அனுபவம்',
    'usp.consentDesc': 'ஒவ்வொரு தொடர்பும் பரஸ்பர மரியாதை மற்றும் தெளிவான ஒப்புதலுக்கு முன்னுரிமை அளிக்கிறது, ஆராய்ச்சிக்கு பாதுகாப்பான இடத்தை உருவாக்குகிறது.',
    'usp.safeTitle': 'LGBTQ+ க்கு பாதுகாப்பான மற்றும் உள்ளடக்கிய',
    'usp.safeDesc': 'தீர்ப்பு இல்லாத, ஆதரவான சூழலில் அனைத்து நோக்குநிலைகள் மற்றும் உறவு பாணிகளை பெருமையுடன் வரவேற்கிறோம்.',
    'footer.copyright': '© 2024 DesiBandhan. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'footer.tagline': 'பாதுகாப்பான, உள்ளடக்கிய சூழலில் அர்த்தமுள்ள இணைப்புகளுக்காக அன்புடன் உருவாக்கப்பட்டது.'
  },
  ml: {
    'hero.tagline': 'കണക്റ്റ് ചെയ്യുക • ചാറ്റ് ചെയ്യുക • പര്യവേക്ഷണം ചെയ്യുക',
    'hero.headline': 'ഉദ്ദേശ്യപരമായ കണക്ഷനുകൾ ആരംഭിക്കുന്ന സ്ഥലം',
    'hero.subtext': 'തുറന്ന മനസ്സുള്ള സിംഗിൾസ്, സ്നേഹനിധി ദമ്പതികൾ, LGBTQ+ കമ്മ്യൂണിറ്റിക്കായി — സങ്കൽപ്പങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക, ആഗ്രഹങ്ങൾ പങ്കിടുക, വിശ്വാസം കെട്ടിപ്പടുക്കുക.',
    'hero.getStarted': 'സൗജന്യമായി ആരംഭിക്കുക',
    'hero.watchDemo': 'ഡെമോ കാണുക',
    'hero.trustIndicator': 'ആയിരക്കണക്കിന് പരിശോധിച്ച അംഗങ്ങളുമായി ചേരുക • ക്രെഡിറ്റ് കാർഡ് ആവശ്യമില്ല • എന്നെന്നേക്കുമായി സൗജന്യ പ്ലാൻ',
    'hero.verifiedCouples': 'പരിശോധിച്ച ദമ്പതികൾ',
    'hero.verifiedCouplesDesc': 'ഫോട്ടോ പരിശോധന യഥാർത്ഥ കണക്ഷനുകൾ ഉറപ്പുനൽകുന്നു',
    'hero.lgbtqFriendly': 'LGBTQ+ സൗഹൃദപരം',
    'hero.lgbtqFriendlyDesc': 'എല്ലാ ആഭിമുഖ്യങ്ങളും ബന്ധ ശൈലികളും സ്വാഗതം ചെയ്യുന്നു',
    'hero.consentFirst': 'സമ്മതി ആദ്യം',
    'hero.consentFirstDesc': 'ഓ��ോ സംവഹനവും പരസ്പര ബഹുമാനത്തിന് മുൻഗണന നൽകുന്നു',
    'nav.howItWorks': 'ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു',
    'nav.pricing': 'വില',
    'nav.about': 'കുറിച്ച്',
    'nav.login': 'ലോഗിൻ',
    'usp.title': 'ഞങ്ങളുടെ പ്ലാറ്റ്ഫോം എന്തുകൊണ്ട് തിരഞ്ഞെടുക്കണം?',
    'usp.subtitle': 'വിശ്വാസത്തിന്റെ അടിസ്ഥാനത്തിൽ നിർമ്മിച്ചത്, എല്ലാവർക്കുമായി രൂപകൽപ്പന ചെയ്തത്, അർത്ഥവത്തായ കണക്ഷനുകളിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ചത്',
    'usp.verifiedTitle': 'പരിശോധിച്ച ദമ്പതികൾ, യഥാർത്ഥ കണക്ഷനുകൾ',
    'usp.verifiedDesc': 'ദമ്പതികൾ ഫോട്ടോ പരിശോധനയ്ക്ക് വിധേയരാകുന്നു, ഇത് യഥാർത്ഥ സംവാദങ്ങൾ ഉറപ്പുനൽകുകയും ഞങ്ങളുടെ കമ്മ്യൂണിറ്റിയിൽ വിശ്വാസം കെട്ടിപ്പടുക്കുകയും ചെയ്യുന്നു.',
    'usp.consentTitle': 'സമ്മതി-ആദ്യം ചാറ്റ് അനുഭവം',
    'usp.consentDesc': 'ഓരോ സംവാദവും പരസ്പര ബഹുമാനത്തിനും വ്യക്തമായ സമ്മതത്തിനും മുൻഗണന നൽകുന്നു, പര്യവേക്ഷണത്തിനായി സുരക്ഷിതമായ ഇടം സൃഷ്ടിക്കുന്നു.',
    'usp.safeTitle': 'LGBTQ+ യ്ക്ക് സുരക്ഷിതവും ഉൾക്കൊള്ളുന്നതും',
    'usp.safeDesc': 'വിധിയില്ലാത്ത, പിന്തുണയുള്ള അന്തരീക്ഷത്തിൽ എല്ലാ ആഭിമുഖ്യങ്ങളെയും ബന്ധ ശൈലികളെയും അഭിമാനത്തോടെ സ്വാഗതം ചെയ്യുന്നു.',
    'footer.copyright': '© 2024 DesiBandhan. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.',
    'footer.tagline': 'സുരക്ഷിതവും ഉൾക്കൊള്ളുന്നതുമായ അന്തരീക്ഷത്തിൽ അർത്ഥവത്തായ കണക്ഷനുകൾക്കായി സ്നേഹത്തോടെ നിർമ്മിച്ചത്.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('desibandhan-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('desibandhan-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};