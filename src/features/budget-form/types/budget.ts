// Interface Budget

export interface Budget {
  id: string;
  date: string;
  client: { name: string; email: string; phone: string };
  services: string[];
  webConfig?: { pages: number; languages: number };
  total: number;
}
