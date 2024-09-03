'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { text, curve, translate } from '../transition/animations';

interface RouteMap {
    [key: string]: string;
}

const routes: RouteMap = {
    "/members/mick": "Mick",
    "/": "Gather! Strawberry Forest",
    "/about": "About the 54th term"
};

const anim = (variants: any) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    };
};

interface CurveProps {
    children: React.ReactNode;
}

interface Dimensions {
    width: number | null;
    height: number | null;
}

export default function Curve({ children }: CurveProps) {
    const router = useRouter();
    const [dimensions, setDimensions] = useState<Dimensions>({
        width: null,
        height: null
    });

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className='page curve'>
            <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className='background' />
            <motion.p className='route' {...anim(text)}>
                {routes[router.route]}
            </motion.p>
            {dimensions.width != null && dimensions.height != null && (
                <SVG width={dimensions.width} height={dimensions.height} />
            )}
            {children}
        </div>
    );
}

interface SVGProps {
    height: number;
    width: number;
}

const SVG = ({ height, width }: SVGProps) => {
    const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    );
};
