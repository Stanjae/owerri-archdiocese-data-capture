import Image from "next/image";
import Logo from '@/public/cropped-AB-Ugo-Logo-1-removebg-preview.png'
import LoginSignUpLink from "@/components/ui/customBtns/LoginSignUpLink";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid relative w-full grid-cols-2 p-0 h-screen">
      <div className=" z-30 absolute top-10 right-10">
          <LoginSignUpLink/>
      </div>
      <div className=" hidden md:flex flex-col justify-between bg-zinc-900 p-10">
        <div>
          <Image src={Logo} alt="logo" width={64} height={64} className=" object-contain h-14 w-14"/>
        </div>
        <div className=" mt-auto ">
          <p className=" text-lg text-white">“This software has saved me countless hours of work and helped me deliver 
              stunning designs to my clients faster than ever before.”
          </p>
          <p className=" text-sm text-white">– Stanjhae</p>
        </div>
      </div>
      <div className=" flex justify-center flex-col items-center relative p-10">
      <Image src={Logo} alt="logo" width={64} height={64} className=" md:hidden top-10 block left-10 absolute object-contain h-14 w-14"/>
        {children}
      </div>
    </section>
  );
}
