

export default function Footer() {
    return (
        <footer className='container mx-auto flex justify-center items-center'>
            <p className='py-8 text-white/60'>© {new Date().getFullYear()} amagami. All rights reserved.</p>
        </footer>
    );
}