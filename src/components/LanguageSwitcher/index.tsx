import './style.scss';
import { useAppDispatch, useAppSelector } from '../../hoocks/useAppSelector';
import { toggleLanguage } from '../../store/languageSlice';


export default function LanguageSwitcher() {
  const language = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  return (
    <button
      className="language-switcher"
      onClick={() => dispatch(toggleLanguage())}
    >
      {language === 'EN' ? 'EN' : 'RU'}
    </button>
  );
}
