// Interface Budget

export interface ClientData {
  name: string;
  phone: string;
  email: string;
}

export interface Budget {
  id: string;
  date: string;
  client: ClientData;
  services: string[];
  webConfig?: { pages: number; languages: number };
  total: number;
}
