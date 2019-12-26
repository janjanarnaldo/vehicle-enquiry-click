interface financeOption {
  price: number,
  period: string,
}

export class Vehicle {
  id: number;
  images?: Array<string>;
  name: string;
  description: string;
  registeredYear: number;
  registration: string;
  mileage: string;
  engineSize: string;
  colour: string;
  keepers: number;
  bodyStyle: string;
  transmission: string;
  fuelType: string;
  insuranceGroup: number;
  twelveMonthsRoadTax: number;
  price: number;
  adminFee: number;
  reservationFee: number;
  financeOptions: Array<financeOption>;
}