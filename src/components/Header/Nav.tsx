import { Menu, Transition } from '@headlessui/react'
import {Bars3BottomLeftIcon, MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import {useTheme} from "next-themes";
import {useCallback, useEffect, useState, Fragment} from "react";
import NavLink from "@/components/Header/NavLink";

enum Theme {
    dark = 'dark',
    light = 'light'
}

export default function Nav(){

    const {systemTheme , theme, setTheme} = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
    },[])

    const handleThemeChange = useCallback(() => {
        const currentTheme = theme === "system" ? systemTheme : theme ;
        setTheme(currentTheme === Theme.dark ? Theme.light : Theme.dark)
    }, [setTheme, systemTheme, theme])

    const renderThemeChanger = useCallback(
        () => {
            if(!mounted) return null;
            const currentTheme = theme === "system" ? systemTheme : theme ;
            if(currentTheme === Theme.dark){
                return (
                    <SunIcon className="w-5 h-5 text-ikeaYellow" role="button"/>
                )
            }
            else {
                return (
                    <MoonIcon className="w-5 h-5 text-ikeaYellow" role="button"/>
                )
            }
        },
        [mounted, systemTheme, theme],
    );

    return (
        <>
            <Menu as='nav' className='relative inline-block text-left w-8 h-8 sm:hidden'>
                <Menu.Button className='w-8 h-8 inline-flex w-full justify-center'><Bars3BottomLeftIcon className='text-white w-8 h-8'/></Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className='
                    absolute
                    right-0
                    p-4
                    mt-2
                    w-[280px]
                    origin-top-right
                    bg-white
                    rounded-lg
                    dark:bg-slate-900
                    shadow-2xl'>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`${active && 'text-slate-500'} text-sm block p-2`}
                                    href="#about"
                                >
                                    About us
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`${active && 'text-slate-500'} text-sm block p-2`}
                                    href="#services"
                                >
                                    Services
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item as={'button'} onClick={handleThemeChange} className='block w-[100%] p-2 border-t-[1px] border-slate-100 dark:border-slate-800 mt-4'>
                            {renderThemeChanger()}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
            <nav className='hidden sm:block'>
                <ul className='flex'>
                    <NavLink label={'About us'} href='#about'/>
                    <NavLink label={'Service'} href='#services'/>
                    <NavLink label={'Book online'} href='#book'/>
                    <button className='mx-2' onClick={handleThemeChange}>{renderThemeChanger()}</button>
                </ul>
            </nav>
        </>
    )
}