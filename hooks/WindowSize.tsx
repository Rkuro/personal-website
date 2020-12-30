// import { useLayoutEffect, useState } from 'react';

export default function useWindowSize(someFunc: () => void): void {
    if (typeof window !== 'undefined' && window) {
        window.addEventListener('resize', () => someFunc());
    }

    // const [size, setSize] = useState([0, 0]);
    // useLayoutEffect(() => {
    //     function updateSize() {
    //         setSize([window.innerWidth, window.innerHeight]);
    //     }
    //     window.addEventListener('resize', updateSize);
    //     updateSize();
    //     return () => window.removeEventListener('resize', updateSize);
    // }, [someFunc]);
    // return size;
}

// function ShowWindowDimensions(props) {
//   const [width, height] = useWindowSize();
//   return <span>Window size: {width} x {height}</span>;
// }
