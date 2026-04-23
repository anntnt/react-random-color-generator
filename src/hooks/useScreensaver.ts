import { useEffect, useRef, useState } from 'react';
import { getNextScreensaverPosition } from '../lib/getNextScreensaverPosition';
import { getRandomVelocity } from '../lib/getRandomVelocity';

type UseScreensaverProps = {
  enabled: boolean;
  size: number;
  onColorChange: () => void;
};

export function useScreensaver({
  enabled,
  size,
  onColorChange,
}: UseScreensaverProps) {
  const [screensaverPosition, setScreensaverPosition] = useState({
    x: 100,
    y: 100,
  });
  const velocityRef = useRef(getRandomVelocity(3));
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const animate = () => {
      if (Math.random() < 0.01) {
        const currentSpeed = Math.sqrt(
          velocityRef.current.dx ** 2 + velocityRef.current.dy ** 2,
        );

        velocityRef.current = getRandomVelocity(currentSpeed);
        onColorChange();
      }

      setScreensaverPosition((currentPosition) => {
        const result = getNextScreensaverPosition(
          currentPosition,
          velocityRef.current,
          size,
          window.innerWidth,
          window.innerHeight,
        );

        velocityRef.current = result.velocity;

        if (result.didBounce) {
          onColorChange();
        }

        return result.position;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled, size, onColorChange]);

  return screensaverPosition;
}
