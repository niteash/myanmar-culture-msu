import { useLang } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={() => setLang(lang === "en" ? "mm" : "en")}
        className="glass px-4 py-2 rounded-full text-white"
      >
        {lang === "en" ? "🇲🇲 MM" : "🇬🇧 EN"}
      </button>
    </div>
  );
};

export default LanguageToggle;
