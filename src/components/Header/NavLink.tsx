type Props = {
    href: string;
    label: string;
}

export default function NavLink({href, label}:Props){
    return (
        <li className='mx-3 text-sm'>
            <a className='text-slate-100' href={href}>{label}</a>
        </li>
    )
}