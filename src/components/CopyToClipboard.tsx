import React, { useRef } from 'react';

const CopyToClipboard = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    const handleCopy = () => {
        if (elementRef.current) {
            const content = elementRef.current.innerHTML;
            navigator.clipboard.writeText(content).then(() => {
                alert('Copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        }
    };

    return (
        <div>
            <div 
                ref={elementRef} 
                onClick={handleCopy}
            >
                Click me to copy my inner HTML!
            </div>
        </div>
    );
};

export default CopyToClipboard;
