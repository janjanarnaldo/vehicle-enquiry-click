import { vehicleImagesType, Vehicle, make } from './vehicle';
import { capitalizeEachWord, capitalizeFirstWord } from '../utilities/string';

export const vehicleImagesMapperForUI = (images: vehicleImagesType, alt: string) => {
  return images.map((image: string) => ({
    image,
    thumbImage: image,
    alt,
    title: alt,
  }));
}

export const vehicleMakeMapperForUI = (vehicle: Vehicle) => {
  const keys = [
    'registeredYear',
    'registration',
    'mileage',
    'engineSize',
    'colour',
    'keepers',
    'bodyStyle',
    'transmission',
    'fuelType',
    'insuranceGroup',
    'twelveMonthsRoadTax',
  ];

  const overrideKeys = { twelveMonthsRoadTax: '12 mnths Road Tax' };

  return keys.map((k: string): make => ({
    key: overrideKeys[k] || capitalizeEachWord(capitalizeFirstWord(k)),
    value: vehicle[k],
  }));
}
