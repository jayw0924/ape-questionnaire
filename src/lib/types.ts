export type FormData = {
  childAge: string;
  timeline: string;
  currentCare: string;
  currentCareOther: string;
  mainConcern: string;
  mainConcernOther: string;
  programPrefs: string[];
  schedule: string;
  priceRange: string;
  pricingModel: string;
  interest: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
};

export const initialFormData: FormData = {
  childAge: "",
  timeline: "",
  currentCare: "",
  currentCareOther: "",
  mainConcern: "",
  mainConcernOther: "",
  programPrefs: [],
  schedule: "",
  priceRange: "",
  pricingModel: "",
  interest: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
};
