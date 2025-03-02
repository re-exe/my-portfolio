'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "work",
		path: "/work",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

export default function MobileNav() {
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center'>
				<CiMenuFries className='text-[32px] text-accent' />
			</SheetTrigger>
			<SheetContent>
				{/* Logo */}
				<div className='mt-32 mb-20 text-center text-2xl'>
					<h1 className='text-4xl font-semibold'>
						amagami<span className='text-accent'>.</span>
					</h1>
				</div>

				{/* nav */}
				<nav className='flex flex-col justify-center items-center gap-6'>
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.path}
							className={`${link.path === pathname && 'text-accent border-b-2 border-accent'
								} text-xl capitalize hover:text-accent transition-all`}
						>
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}