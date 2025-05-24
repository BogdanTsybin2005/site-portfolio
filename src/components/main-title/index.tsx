import './style.scss';
import { useAppSelector } from '../../hoocks/useAppSelector';
import languageData from '../../interface-language-data/data';



export default function MainTitle() {
    const language = useAppSelector((state) => state.language);
    const { firstName, lastName } = languageData[language].home;

    return <h1 className="main__title">{`${firstName} ${lastName}`}</h1>;
}
