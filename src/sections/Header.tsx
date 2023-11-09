import { useCallback, useState, useEffect } from 'react'
import Logo from "../components/Header/Logo";
import {useTheme} from "next-themes";
import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'
import Nav from "@/components/Header/Nav";


const Header = () => {

    return (
        <header className="shadow-xl relative p-2 sm:p-5  bg-ikeaBlue flex justify-between items-center">
            <Logo />
            <Nav/>
        </header>
    );
};

export default Header;