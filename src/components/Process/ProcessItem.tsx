import {IProcess} from "@/@types";

type Props = IProcess

export default function ProcessItem({title, icon, top}:IProcess) {
    return(
        <div className={`absolute top-${top} flex items-center`}>
            <div className='rounded-full p-2 bg-white shadow-2xl'>{icon}</div>
            <span className='inline-block ml-5'>{title}</span>
        </div>
    )
}