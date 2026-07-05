// Crear tipus Service a src/features/budget-calculator/types/service.ts amb: id, name, price, configurable?

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  configurable: boolean;
}
