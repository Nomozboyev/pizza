import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './navbar.scss'
export const  Navbar = ({props})=>{
    let {account,setaccount}=props
    return (
        <>
        
        <nav>
            <a href="#">
                <img src="/logo.png" alt="Logo" />
                <h2>Куда пицца</h2>
            </a>
            <button onClick={()=>setaccount(!account)}> { account ? <CloseRoundedIcon sx={{fontSize:18}} />:<FormatListBulletedRoundedIcon sx={{fontSize:18}}/> }</button>
        </nav>
        </>
    )
}