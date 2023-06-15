import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './contact.scss'
export const Contact = ()=>
{
    return(
        <>
        <div className="contact">
            <div className="number"><LocalPhoneOutlinedIcon/><p>+7 (926) 223-10-11</p></div>
            <div className="location"><PlaceOutlinedIcon/><p>Москва, ул. Юных Ленинцев, д.99</p></div>
            <div className="socialNetwork">
                <span className="fasebok"><FacebookOutlinedIcon/><p>fasebok</p> </span>
                <span className="instagram"><InstagramIcon/><p>instagram</p></span>
            </div>
        </div>
        </>
    )
}