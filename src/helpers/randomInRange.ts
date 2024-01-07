function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export default randomInRange;
