import Link from 'next/link';
export default function Footer() {
    return (
        <footer className='flex justify-between items-center p-4 bg-gray-800 text-white'>
            <div className='text-sm'>© 2023 Ajit Adhikari</div>
            <nav className='space-x-4'>
                <Link href='/privacy' className='hover:text-gray-400'>Privacy Policy</Link>
                <Link href='/terms' className='hover:text-gray-400'>Terms of Service</Link>
            </nav>
        </footer>
    )
}