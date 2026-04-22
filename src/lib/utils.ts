export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export type RoadmapStatus = 'done' | 'progress' | 'planned';
