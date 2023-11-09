import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <div className='flex flex-row items-center'>
                <WrenchScrewdriverIcon  className="h-8 w-8 flex-shrink-0 mr-1 text-gray-100"/>
                <div>
                    <div>
                        <span className="font-bold text-[28px] tracking-widest whitespace-nowrap text-gray-100">Fixterz</span>
                        <sup className='font-thin text-xs text-gray-300'>.ae</sup>
                    </div>
                    <div className='mt-[-10px]'><span className='text-gray-200 text-[18px] mt-0'>Yes we are</span></div>
                </div>
            </div>
        </Link>
    )
}

export default Logo
