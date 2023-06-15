import { Contact } from "../../contact";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './account.scss'
export const Account = () => (
  <>
    <div className="account">
       <section  className="accountSection"> <a href='#'className="myAccount">
            {/* <img src={} alt="" /> */}
            <PersonOutlineOutlinedIcon/>
            <b>Войти в аккаунт</b>
        </a>
            <ul className="sideMenu">
               
                <li><a href="#">Акции</a></li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Пользовательское соглашение</a></li>
                <li><a href="#">Условия гарантии</a></li>
                <li><a href="#">Ресторан</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Поддержка</a></li>
                <li><a href="#">Отследить заказ</a></li>
            </ul>
        <Contact/></section>
    </div>
  </>
);
