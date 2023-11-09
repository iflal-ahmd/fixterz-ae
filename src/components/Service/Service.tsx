import {IService} from "@/@types";
import Carousel from "@/components/Carousel/Carousel";

export default function Service({title, description, src}:IService) {
    return(
        <div className='bg-white dark:bg-slate-900 p-4 rounded-2xl my-4 shadow-xl'>
            <Carousel images={src}/>
            <h3 className='text-xl font-bold mt-4 mt-6 mb-1 text-slate-800 dark:text-slate-50'>{title}</h3>
            <p className='text-gray-800 dark:text-slate-500 text-sm'>{description}</p>
        </div>
    )
}