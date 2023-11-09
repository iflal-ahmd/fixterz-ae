import Image from 'next/image'

type Props = {
    image: string;
    className?: string;
    imgWidth?: number;
    onClick?: (index: number) => void;
    index: number;
}

export default function Hexagon({image, className = 'hex__plumbing', imgWidth = 60, onClick, index }: Props){
    return (
        <div onClick={() => {if(typeof onClick === 'function') onClick(index); }} className={`relative w-[5rem] h-[2.885rem] ${className} mt-[1.44rem]
            mr-[0.25rem]
            mb-[1.44rem]
            ml-0
            flex
            items-center
            justify-center
            scale-1
            cursor-pointer
            before:absolute
            before:contents[""]
            before:w-0
            before:left-0
            before:border-l-[2.5rem]
            before:border-l-transparent
            before:border-r-solid
            before:border-r-[2.5rem]
            before:border-r-transparent
            before:border-solid
            before:bottom-[100%]
            after:absolute
            after:contents[""]
            after:border-l-[2.5rem]
            after:border-l-transparent
            after:border-r-[2.5rem]
            after:border-r-transparent
            after:w-0
            after:left-0
            after:top-[100%]
        `}
        >
            <Image height={imgWidth} width={imgWidth} src={image} alt=""/>
        </div>
    )
}
