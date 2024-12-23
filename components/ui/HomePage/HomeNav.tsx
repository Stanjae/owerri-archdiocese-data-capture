'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavHeader from '../navigation/Navheader'
import { ModeToggle } from "@/components/ui/switchBtn/SwitchBtn";
import { Button } from '../button';



const Navbar = () => {

    const [state, setState] = useState(false)
    const menuBtnEl = useRef<any>()

    const navigation = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQs", href: "#faqs" },
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target:any = e.target;
            if (!menuBtnEl?.current?.contains(target)) setState(false);
        };
    }, [])

    return (
        <header className='relative'>
            <div className="custom-screen md:hidden">
                <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
            </div>
            <nav className={` text-foreground pb-5 md:text-sm md:static md:block ${state ? "absolute z-20 top-2 inset-x-4 shadow-lg rounded-xl border md:shadow-none md:border-none" : "hidden"}`}>
                <div className="custom-screen gap-x-20 items-center md:flex">
                    <NavHeader state={state} onClick={() => setState(!state)} />
                    <div className={`flex-1 items-center mt-8 md:font-medium md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="hover:text-gray-900 text-foreground">
                                            <Link href={item.href} className="block" scroll={false}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        <ModeToggle/>
                            <Link href="/sign-in" className="block hover:text-gray-900">
                                <Button className='text-owarchGreen' variant='ghost'>Sign in</Button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar