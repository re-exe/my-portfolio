'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MousePointer = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const pointerX = useSpring(0, { stiffness: 600, damping: 30 });
    const pointerY = useSpring(0, { stiffness: 600, damping: 30 });
    const circleX = useSpring(0, { stiffness: 400, damping: 30 });
    const circleY = useSpring(0, { stiffness: 400, damping: 30 });

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
            setIsSmallScreen(window.innerWidth < 1200);
            }
        };
    
        const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
            if (typeof window !== 'undefined' && !isSmallScreen) {
                pointerX.set(event.clientX - 5);
                pointerY.set(event.clientY - 5);
                circleX.set(event.clientX - 15);
                circleY.set(event.clientY - 15);
            }
        };
    
        const handleMouseUp = () => {
            if (typeof window !== 'undefined' && !isSmallScreen) {
                circleX.set(pointerX.get() - 10);
                circleY.set(pointerY.get() - 10);
            }
        };

        if (typeof window !== 'undefined') {
            setIsSmallScreen(window.innerWidth < 1200);
            window.addEventListener('resize', handleResize);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            }
        };
    }, [pointerX, pointerY, circleX, circleY, isSmallScreen]);

    return (
        <>
            <motion.div
                style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#00c8ff',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: pointerY,
                    left: pointerX,
                    pointerEvents: 'none',
                    zIndex: 9999,
                    display: isSmallScreen ? 'none' : 'block',
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    top: circleY,
                    left: circleX,
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0, 191, 255, 0.5)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    display: isSmallScreen ? 'none' : 'block',
                }}
            />
        </>
    );
};

export default MousePointer;