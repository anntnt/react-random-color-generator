type Velocity = {
  dx: number;
  dy: number;
};

// Creates a random movement direction while keeping the same speed.
export function getRandomVelocity(speed: number): Velocity {
  const angle = Math.random() * Math.PI * 2;

  return {
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed,
  };
}
