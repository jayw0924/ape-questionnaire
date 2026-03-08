export type FormData = {
  respondentName: string;
  respondentEmail: string;
  respondentPhone: string;

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
  comments: string;
};

export const initialFormData: FormData = {
  respondentName: "",
  respondentEmail: "",
  respondentPhone: "",

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
  comments: "",
};
