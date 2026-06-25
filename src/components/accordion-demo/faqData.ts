export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "item-1",
    question: "What is Critical Care?",
    answer:
      "Critical Care is specialised care for patients with life-threatening conditions who require continuous monitoring and organ support. Our Critical Care Services are led by experienced critical care doctors who provide round-the-clock, evidence-based treatment.",
  },
  {
    id: "item-2",
    question: "What are the hospital's visiting hours?",
    answer:
      "Visiting hours are from 10:00 AM to 12:00 PM and 5:00 PM to 7:00 PM daily. ICU visiting is restricted to immediate family members only, between 11:00 AM and 11:30 AM. Please carry a valid ID during your visit.",
  },
  {
    id: "item-3",
    question: "Is health insurance accepted?",
    answer:
      "Yes, this hospital is empanelled with all major insurance providers including Mediclaim, TPA, and corporate health plans. Please carry your insurance card and a valid photo ID at the time of admission.",
  },
  {
    id: "item-4",
    question: "How do I book an appointment with a specialist?",
    answer:
      "You can book an appointment online through our website, call our helpline at 1800-XXX-XXXX, or visit the OPD registration desk directly. Appointments are available Monday to Saturday, 9:00 AM to 5:00 PM.",
  },
];
