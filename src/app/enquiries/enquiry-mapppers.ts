import { Enquiry, EnquiryToApi } from './enquiry';

export const buildEnquiryToApi = (enquiry: Enquiry): EnquiryToApi => {
  const { salesPersonName, salesPersonMobile, vehicleId, ...otherProps } = enquiry;
  return {
    ...otherProps,
    sales_person_name: salesPersonName,
    sales_person_mobile: salesPersonMobile,
    vehicle_id: vehicleId,
  }
}
