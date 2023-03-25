import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { SocialIconWrapper } from '../styled/Wrappers';



export const Footer = () => {
    return (
        <>
            <span>Adress: Stopvägen 67, 138 35 Bromma</span>
            <span>Öppettider: Ons-Sön 17-24</span>
            <div>
                <SocialIconWrapper>
                    <FaFacebook />
                </SocialIconWrapper>
                <SocialIconWrapper>
                    <FaInstagram />
                </SocialIconWrapper>
                <SocialIconWrapper>
                    <FaLinkedin />
                </SocialIconWrapper>
            </div>
        </>
    )
}