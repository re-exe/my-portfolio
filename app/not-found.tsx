import Link from 'next/link';

// components
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='h2'>404 Not found</h2>
                <p className='text-white/60 flex text-center py-4'>Sorry, we were unable to find the page you were looking for.</p>
                <Link href='/'>
                    <Button
                        variant='outline'
                        size='lg'
                    >
                        Back to top page
                    </Button>
                </Link>
            </div>
        </div>
    );
}