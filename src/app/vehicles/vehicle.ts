interface financeOption {
  price: number,
  period: string,
}

export type vehicleImagesType = Array <string | object>;

type salesPerson = {
  name: string;
  mobile: string;
}

export interface Vehicle {
  id: number;
  images?: vehicleImagesType;
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
  salesPerson:salesPerson;
}

export interface make {
  key: string;
  value: string;
}

export interface VehicleMake extends Array<make>{};
