import {CalendarDaysIcon, TruckIcon, WrenchScrewdriverIcon} from "@heroicons/react/24/solid";

export default function Process() {
    return (
        <>
            <div className='text-ikeaBlue process relative h-[280px] p-4 sm:hidden'>
                <span className="process--line absolute left-[46px] top-[15px] bottom-[30px] w-[1px] bg-ikeaBlue"/>
                <div className={`absolute top-[0px] flex items-center`}>
                    <div className='rounded-full p-3 dark:bg-black shadow-2xl'>
                        <CalendarDaysIcon className='w-10 h-10'/>
                    </div>
                    <span className='inline-block ml-5'>
                        Book online
                    </span>
                </div>
                <div className={`absolute top-[100px] flex items-center`}>
                    <div className='rounded-full p-3 bg-white dark:bg-black shadow-2xl'>
                        <TruckIcon className='w-10 h-10 '/>
                    </div>
                    <span className='inline-block ml-5'>
                        We Arrive
                    </span>
                </div>
                <div className={`absolute top-[200px] flex items-center`}>
                    <div className='rounded-full p-3 bg-white dark:bg-black shadow-2xl'>
                        <WrenchScrewdriverIcon className='w-10 h-10'/>
                    </div>
                    <span className='inline-block ml-5'>Solve Problem</span>
                </div>
            </div>
            <div className='text-ikeaBlue process relative h-[380px] p-4 hidden sm:block'>
                <span className="process--line absolute left-[70px] right-[70px] top-[50%] h-[1px] bg-ikeaBlue"/>
                <div className={`absolute left-10 top-[135px] flex flex-col items-center`}>
                    <div className='rounded-full p-3 bg-white dark:bg-black shadow-xl'>
                        <CalendarDaysIcon className='w-20 h-20'/>
                    </div>
                    <span className='inline-block mt-4'>
                        Book online
                    </span>
                </div>
                <div className={`absolute left-[45%] top-[135px] flex flex-col items-center`}>
                    <div className='rounded-full p-3 bg-white dark:bg-black shadow-xl'>
                        <TruckIcon className='w-20 h-20 '/>
                    </div>
                    <span className='inline-block mt-4'>
                        We Arrive
                    </span>
                </div>
                <div className={`absolute right-10 top-[135px] flex flex-col items-center`}>
                    <div className='rounded-full p-3 bg-white dark:bg-black shadow-xl'>
                        <WrenchScrewdriverIcon className='w-20 h-20'/>
                    </div>
                    <span className='inline-block mt-4'>
                        Solve Problem
                    </span>
                </div>
            </div>
        </>
    )
}
