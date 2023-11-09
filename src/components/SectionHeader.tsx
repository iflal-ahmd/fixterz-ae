
interface SectionHeaderProps {
    title: string
}
export default function SectionHeader({title}:SectionHeaderProps){
    return (
        <h2 className='text-2xl font-bold mb-6 text-slate-800 dark:text-slate-50'>
            {title}
        </h2>
    )
}