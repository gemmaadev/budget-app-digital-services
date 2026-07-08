export function calculateWebPrice(pages: number, languages: number): number {
  return (pages + languages) * 30 + 500;
}
