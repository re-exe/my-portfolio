import Link from 'next/link';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
	{ icon: <FaGithub />, path: 'https://github.com/re-exe/' },
	{ icon: <FaXTwitter />, path: 'https://x.com/trrr_te' },
	{ icon: <FaDiscord />, path: 'https://discordapp.com/users/405449908695334914' },
];

interface SocialProps {
	containerStyles: string;
	iconStyles: string;
}

export default function Social({ containerStyles, iconStyles }: SocialProps) {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => (
				<Link
					key={index}
					href={item.path}
					className={iconStyles}
					target='_blank'
				>
					{item.icon}
				</Link>
			))}
		</div>
	);
}