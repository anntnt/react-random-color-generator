// Calculates the next position and velocity for a bouncing screensaver box.
// Also reports whether the box hit a screen edge during this movement.

export function getNextScreensaverPosition(
  position: { x: number; y: number },
  velocity: { dx: number; dy: number },
  boxSize: number,
  screenWidth: number,
  screenHeight: number,
): {
  position: { x: number; y: number };
  velocity: { dx: number; dy: number };
  didBounce: boolean;
} {
  let nextX = position.x + velocity.dx;
  let nextY = position.y + velocity.dy;
  let nextDx = velocity.dx;
  let nextDy = velocity.dy;
  let didBounce = false;

  if (nextX <= 0 || nextX + boxSize >= screenWidth) {
    nextDx *= -1;
    nextX = Math.max(0, Math.min(nextX, screenWidth - boxSize));
    didBounce = true;
  }

  if (nextY <= 0 || nextY + boxSize >= screenHeight) {
    nextDy *= -1;
    nextY = Math.max(0, Math.min(nextY, screenHeight - boxSize));
    didBounce = true;
  }

  return {
    position: { x: nextX, y: nextY },
    velocity: { dx: nextDx, dy: nextDy },
    didBounce,
  };
}