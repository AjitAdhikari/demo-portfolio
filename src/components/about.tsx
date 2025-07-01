import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className='p-10 text-center bg-gray-500 text-white'>
            <h2 className='text-2xl font-bold mb-4'> About Me</h2>
            <p className='mb-4'>Welcome to my digital playground! I am Ajit Adhikari, a versatile professional with expertise in Software Development, Quality Assurance, and Design. With a passion for building seamless digital solutions and ensuring high-quality user experiences, I thrive at the intersection of creativity and technology.</p>
            <div className='flex justify-center'>
                <Image
                    src="/images/portfolio.png"
                    alt ="Ajit"
                    width={2000}
                    height= {2000}
                    className='border-2 border-white  '
                />
            </div>
        </section>
    )
}