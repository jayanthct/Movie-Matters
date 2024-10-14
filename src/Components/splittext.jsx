import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';
import './splittext.css';

export const SplitText = ({ text, className = '', delay = 100 }) => {
  const letters = text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Unobserve after triggering the animation
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
      to: inView
        ? async (next) => {
          await next({ opacity: 1, transform: 'translate3d(0,-10px,0)' });
          await next({ opacity: 1, transform: 'translate3d(0,0,0)' });
        }
        : { opacity: 0, transform: 'translate3d(0,40px,0)' },
      delay: i * delay,
    }))
  );

  const letterStyle = {
    color: '#FF1A1A',
    fontFamily: '"Marvin Visions", sans-serif',
    fontSize: '98px !important',
    fontWeight: '800',
    lineHeight: '100%',
    letterSpacing: '3.92px',
 
  };

  return (
    <p className={`split-parent ${className}`} ref={ref}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{ ...props, ...letterStyle }} // Merge animation props with your custom styles
          className="letter"
        >
          {letters[index] === ' ' ? ' ' : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};
