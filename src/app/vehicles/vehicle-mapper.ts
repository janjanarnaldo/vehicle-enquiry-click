import { vehicleImagesType } from './vehicle';

export const vehicleImagesMapperForUI = (images: vehicleImagesType, alt: string) => {
  return images.map((image: string) => ({
    image,
    thumbImage: image,
    alt,
    title: alt,
  }));
}