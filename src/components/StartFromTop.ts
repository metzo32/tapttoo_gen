import { useEffect } from 'react'

export default function StartFromTop () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return null;
};
