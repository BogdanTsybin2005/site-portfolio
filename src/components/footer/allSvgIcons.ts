import React, { type SVGProps } from 'react'

import Email from '../../assets/icons/EmailIcon'
import Telegram from '../../assets/icons/TelegramIcon'
import GitHub from '../../assets/icons/GitHub'
import WhatsApp from '../../assets/icons/Whatsapp'



type SVGIconType = {
    id: number,
    icon: React.FC<SVGProps<SVGElement>>,
    url: string,
    isIconRelatedToEmail: boolean,
}

type AllSVGIconsType = {
    icons: SVGIconType[],
}

const allMySVGIcons: AllSVGIconsType = {
    icons: [
        {
            id: 1,
            icon: Email,
            url: 'https://mail.google.com/mail/?view=cm&fs=1&to=tsybinb@gmail.com',
            isIconRelatedToEmail: true,
        },
        {
            id: 2,
            icon: Telegram,
            url: 'https://t.me/bogdan_sest_1025',
            isIconRelatedToEmail: false
        },
        {
            id: 3,
            icon: WhatsApp,
            url: 'https://wa.me/996555576357',
            isIconRelatedToEmail: false
        },
        {
            id: 4,
            icon: GitHub,
            url: 'https://github.com/BogdanSEST2',
            isIconRelatedToEmail: false
        }
    ]
}


export default allMySVGIcons;
