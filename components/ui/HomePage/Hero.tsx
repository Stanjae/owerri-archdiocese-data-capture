import Link from "next/link"
import GradientWrapper from "../Clientwrappers/GradientWrapper"
import { HoverBorderGradientDemo } from "../customBtns/CustomGradientBorderBtn"
import NavLink from "../navigation/CustomNavlink"


const Hero = () => (
    <section>
        <GradientWrapper wrapperclassname="inset-0" className="custom-screen text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-foreground font-extrabold mx-auto sm:text-6xl">
                    Simplify & Transform Your <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0]
                     to-[#ED4E50]">Data Collection</span>
                </h1>
                <p className="max-w-xl mx-auto">
                    Our intuitive web application makes collecting & managing data effortlessly.
                </p>
                <div className="flex items-center justify-center mt-5 gap-x-3 font-medium text-sm">
                    
                    <NavLink
                        href="#pricing"
                        className="flex items-center gap-x-2 text-white bg-owarchGreen hover:bg-green-500 active:bg-green-700 "
                    >
                        Get free trial
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                    <Link
                        href="/sign-in"
                        scroll={false}
                    >
                    <HoverBorderGradientDemo/>
                    </Link>
                </div>
            </div>
        </GradientWrapper>
    </section>
)

export default Hero