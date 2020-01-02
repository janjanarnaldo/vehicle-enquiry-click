import { Enquiry, EnquiryApi } from './enquiry';

export const buildEnquiryToAPI = (enquiry: Enquiry): EnquiryApi => {
  const { salesPersonName, salesPersonMobile, vehicleId, ...otherProps } = enquiry;
  return {
    ...otherProps,
    sales_person_name: salesPersonName,
    sales_person_mobile: salesPersonMobile,
    vehicle_id: vehicleId,
  }
}

export const buildEnquiryToUI = (enquiry: EnquiryApi): Enquiry => {
  const { sales_person_name, sales_person_mobile, vehicle_id, recording_url, ...otherProps } = enquiry;
  const { identifier, name, mobile, email, enquiry: message } = otherProps;

  return {
    identifier,
    name,
    mobile,
    email,
    enquiry: message,
    recordingUrl: recording_url,
    salesPersonName: sales_person_name,
    salesPersonMobile: sales_person_mobile,
    vehicleId: vehicle_id,
  }
}
