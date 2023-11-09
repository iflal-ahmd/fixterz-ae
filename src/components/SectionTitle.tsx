interface SectionTitleProps {
    title: string;
}
export default function SectionTitle({title}: SectionTitleProps) {
    return (<h4 className='relative
                                text-ikeaBlue
                                font-bold
                                pl-[70px]
                                before:absolute
                                before:contents[""]
                                before:bg-ikeaBlue
                                before:w-[50px]
                                before:h-[1px]
                                before:top-3
                                before:left-[0px]
                                after:absolute
                                after:contents[""]
                                after:bg-ikeaBlue
                                after:w-[50px]
                                after:h-[1px]
                                after:top-3
                                after:left-[150px]
                                my-4
                                sm:mt-0
                                '>{title}</h4>)
}