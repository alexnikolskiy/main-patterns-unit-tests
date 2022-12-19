export default function solve(a: number, b: number, c: number, e: number = 1e-5): number[] {
  if (Math.abs(a) < e) {
    throw new Error('a не равно 0')
  }

  const d = b * b - 4 * a * c;

  if (d < 0) {
    return [];
  }

  if (Math.abs(d) < e) {
    return [-b / (2 * a)];
  }

  return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
}