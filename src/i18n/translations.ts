const translations: Record<string, Record<string, string>> = {
  es: {
    "title": "Encuesta — Academia Panamá Este",
    "subtitle": "Programa de Estimulación Temprana (Early Learning Program)",
    "intro": "Agradecemos su tiempo para completar esta breve encuesta. Sus respuestas nos ayudarán a diseñar un programa que se ajuste a las necesidades de su familia.",
    "required": "* Obligatorio",
    "lang.toggle": "English",

    // Q1
    "q1.title": "¿Tiene actualmente hijos entre las siguientes edades?",
    "q1.opt.0-11m": "0–11 meses",
    "q1.opt.1-2y": "1–2 años",
    "q1.opt.2-3y": "2–3 años",
    "q1.opt.no": "No",

    // Q2
    "q2.title": "¿En cuánto tiempo considera que necesitaría un programa de cuidado/estimulación para su hijo(a)?",
    "q2.opt.now": "Inmediatamente",
    "q2.opt.3m": "En los próximos 3 meses",
    "q2.opt.6m": "En los próximos 6 meses",
    "q2.opt.later": "Más adelante",
    "q2.opt.none": "No lo necesito por ahora",

    // Q3
    "q3.title": "¿Actualmente su hijo(a) asiste a algún tipo de cuidado infantil?",
    "q3.opt.home": "Se queda en casa",
    "q3.opt.nanny": "Niñera",
    "q3.opt.daycare": "Guardería",
    "q3.opt.family": "Familiar",
    "q3.opt.other": "Otro",

    // Q4
    "q4.title": "¿Cuál es su mayor necesidad o preocupación respecto al cuidado de su hijo(a) pequeño?",
    "q4.opt.stimulation": "Falta de estimulación",
    "q4.opt.work": "Horarios laborales",
    "q4.opt.trust": "Confianza y seguridad",
    "q4.opt.language": "Desarrollo del lenguaje",
    "q4.opt.social": "Socialización",
    "q4.opt.other": "Otro",

    // Q5
    "q5.title": "¿Qué aspectos valora más en un programa para niños desde 1 año?",
    "q5.hint": "Seleccione hasta 3",
    "q5.opt.stimulation": "Estimulación temprana",
    "q5.opt.personalized": "Atención personalizada",
    "q5.opt.safe": "Ambiente seguro",
    "q5.opt.english": "Inglés desde temprana edad",
    "q5.opt.routines": "Rutinas estructuradas",
    "q5.opt.flexible": "Flexibilidad de horarios",
    "q5.opt.proximity": "Cercanía al colegio de hermanos mayores",

    // Q6
    "q6.title": "¿Qué horario le sería más conveniente?",
    "q6.opt.am": "Media jornada (mañana)",
    "q6.opt.pm": "Media jornada (tarde)",
    "q6.opt.full": "Jornada completa [6:30 a.m. – 6:00 p.m.]",
    "q6.opt.flexible": "Horario flexible",

    // Q7
    "q7.title": "¿Cuánto estaría dispuesto(a) a pagar mensualmente por un programa de estimulación y cuidado bilingüe para su hijo(a)?",
    "q7.opt.under100": "Menos de $100",
    "q7.opt.100-150": "$100–$150",
    "q7.opt.over150": "Más de $150",

    // Q8
    "q8.title": "¿Preferiría que el precio incluya materiales y actividades o pagar adicionales?",
    "q8.opt.allin": "Todo incluido",
    "q8.opt.extras": "Prefiero pagar algunos adicionales",
    "q8.opt.indifferent": "Me es indiferente",

    // Q9
    "q9.title": "La Academia Panamá Este lanzará un Early Learning Program (2+), ¿le interesaría recibir información prioritaria?",
    "q9.opt.yes": "Sí",
    "q9.opt.maybe": "Tal vez",
    "q9.opt.no": "No",

    // Q10 (conditional)
    "q10.title": "Datos de contacto",
    "q10.name": "Nombre",
    "q10.email": "Correo electrónico",
    "q10.phone": "Teléfono",

    // Other
    "other.placeholder": "Especifique...",

    // Submit
    "submit": "Enviar encuesta",
    "submit.sending": "Enviando...",
    "submit.success.title": "¡Gracias por su participación!",
    "submit.success.message": "Sus respuestas han sido registradas exitosamente.",
    "validation.required": "Por favor responda todas las preguntas obligatorias.",
  },

  en: {
    "title": "Survey — Academia Panamá Este",
    "subtitle": "Early Learning Program",
    "intro": "Thank you for taking the time to complete this brief survey. Your answers will help us design a program that fits your family's needs.",
    "required": "* Required",
    "lang.toggle": "Español",

    // Q1
    "q1.title": "Do you currently have children in the following age ranges?",
    "q1.opt.0-11m": "0–11 months",
    "q1.opt.1-2y": "1–2 years",
    "q1.opt.2-3y": "2–3 years",
    "q1.opt.no": "No",

    // Q2
    "q2.title": "How soon would you need a care/stimulation program for your child?",
    "q2.opt.now": "Immediately",
    "q2.opt.3m": "Within the next 3 months",
    "q2.opt.6m": "Within the next 6 months",
    "q2.opt.later": "Later on",
    "q2.opt.none": "I don't need one right now",

    // Q3
    "q3.title": "Does your child currently attend any type of childcare?",
    "q3.opt.home": "Stays at home",
    "q3.opt.nanny": "Nanny",
    "q3.opt.daycare": "Daycare",
    "q3.opt.family": "Family member",
    "q3.opt.other": "Other",

    // Q4
    "q4.title": "What is your main need or concern regarding your young child's care?",
    "q4.opt.stimulation": "Lack of stimulation",
    "q4.opt.work": "Work schedules",
    "q4.opt.trust": "Trust and safety",
    "q4.opt.language": "Language development",
    "q4.opt.social": "Socialization",
    "q4.opt.other": "Other",

    // Q5
    "q5.title": "What aspects do you value most in a program for children from age 1?",
    "q5.hint": "Select up to 3",
    "q5.opt.stimulation": "Early stimulation",
    "q5.opt.personalized": "Personalized attention",
    "q5.opt.safe": "Safe environment",
    "q5.opt.english": "English from an early age",
    "q5.opt.routines": "Structured routines",
    "q5.opt.flexible": "Schedule flexibility",
    "q5.opt.proximity": "Proximity to older siblings' school",

    // Q6
    "q6.title": "What schedule would be most convenient for you?",
    "q6.opt.am": "Half day (morning)",
    "q6.opt.pm": "Half day (afternoon)",
    "q6.opt.full": "Full day [6:30 a.m. – 6:00 p.m.]",
    "q6.opt.flexible": "Flexible schedule",

    // Q7
    "q7.title": "How much would you be willing to pay monthly for a bilingual stimulation and care program for your child?",
    "q7.opt.under100": "Less than $100",
    "q7.opt.100-150": "$100–$150",
    "q7.opt.over150": "More than $150",

    // Q8
    "q8.title": "Would you prefer the price to include materials and activities, or pay for extras separately?",
    "q8.opt.allin": "All-inclusive",
    "q8.opt.extras": "I prefer to pay for some extras",
    "q8.opt.indifferent": "I don't mind either way",

    // Q9
    "q9.title": "Academia Panamá Este will launch an Early Learning Program (2+). Would you be interested in receiving priority information?",
    "q9.opt.yes": "Yes",
    "q9.opt.maybe": "Maybe",
    "q9.opt.no": "No",

    // Q10 (conditional)
    "q10.title": "Contact Information",
    "q10.name": "Name",
    "q10.email": "Email",
    "q10.phone": "Phone",

    // Other
    "other.placeholder": "Please specify...",

    // Submit
    "submit": "Submit survey",
    "submit.sending": "Sending...",
    "submit.success.title": "Thank you for your participation!",
    "submit.success.message": "Your answers have been recorded successfully.",
    "validation.required": "Please answer all required questions.",
  },
};

export default translations;
