import { useState, useEffect } from 'react';

export const useTypedEffect = (strings, typeSpeed, backSpeed, backDelay) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % strings.length;
            const fullText = strings[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? backSpeed : typeSpeed);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), backDelay);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, strings, typeSpeed, backSpeed, backDelay, typingSpeed]);

    return text;
};

