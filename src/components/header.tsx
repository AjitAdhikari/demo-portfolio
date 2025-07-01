import Link from 'next/link';

export default function Header() {
    return (
        <header className='flex justify-between items-content p-4 bg-gray-800 text-white'>
            <div className='text-xl font-bold'>Ajit Adhikari</div>
            <nav className='space-x-4'>
                <Link href='/' className='hover:text-gray-400'>Home</Link>
                <Link href='/about' className='hover:text-gray-400'>About</Link>
                <Link href='/contact' className='hover:text-gray-400'>Contact</Link>
            </nav>
        </header>
    )
}