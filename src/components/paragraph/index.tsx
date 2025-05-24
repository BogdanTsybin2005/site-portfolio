import './style.scss';
import { useAppSelector } from '../../hoocks/useAppSelector';
import languageData from '../../interface-language-data/data';


interface MainParagraphTextProps {
  text?: string;
}

const MainParagraphText: React.FC<MainParagraphTextProps> = ({ text }) => {
  const language = useAppSelector((state) => state.language);
  const defaultText = languageData[language].home.description;

  return <p className="main__text">{text || defaultText}</p>;
};

export default MainParagraphText;
