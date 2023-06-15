import { Navbar } from "./navbar"
import CarouselMenu from "./select.menu/selectMenu"
import './header.scss'
import { useState } from "react";
import { Account } from "./account";
import CarouselIntro from "./intro/intro.component";

export const Header =()=>
{
    const [account, setaccount] = useState(false);
    return (
        <>
       <header>
       <Navbar props={{account, setaccount}}/>
       { account ? <Account/> : <CarouselMenu/> }
       <CarouselIntro/>
       </header>
        </>
    )
}