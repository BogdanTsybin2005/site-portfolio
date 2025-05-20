import type React from "react";
import './style.scss';



type TextForParagraphType = {
    text: string;
}

const MainParagraphText: React.FC<TextForParagraphType> = ({text}) => {
    return (
        <p className='main__text'>
            {text}
        </p>
    )
}


export default MainParagraphText;
