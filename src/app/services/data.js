import {
  Building,
  ClipboardList,
  Hammer,
  HelpCircle,
  Scale,
} from "lucide-react";

export const sections = [
  {
    id: 1,
    title: "Web Applications",
    description:
      "Use plugins to extend and connect services across hybrid and multi-cloud environments.",
    image:
      "/PBS%20Assets/better-assets/Icons%20Svgs/Building%20Icon%20(10).svg",
    details: "Additional content for Web Applications...", // Add your details here
  },
  {
    id: 2,
    title: "Mobile Applications",
    description:
      "Use plugins to extend and connect services across hybrid and multi-cloud environments.",
    image:
      "/PBS%20Assets/better-assets/Icons%20Svgs/Building%20Icon%20(11).svg",
    details: "Additional content for Mobile Applications...", // Add your details here
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "Use plugins to extend and connect services across hybrid and multi-cloud environments.",
    image:
      "/PBS%20Assets/better-assets/Icons%20Svgs/Building%20Icon%20(12).svg",
    details: "Additional content for Project Management...", // Add your details here
  },
];

export const mainSections = [
  {
    overview: {
      icon: ClipboardList,
      title: "Service Overview",
      content:
        "Professional foundation repair and structural reinforcement services ensuring long-term stability for NYC buildings. Our certified engineers combine traditional methods with cutting-edge technology for optimal results.",
    },
    whyImportant: {
      icon: Scale,
      title: "Why It's Crucial",
      items: [
        "Mandatory compliance with NYC Building Code §28-301.1",
        "Prevents costly structural failures and safety hazards",
        "Increases property value by 15-20%",
      ],
    },
    process: {
      icon: Hammer,
      title: "Our Process",
      steps: [
        {
          step: 1,
          title: "Site Assessment",
          description: "Detailed structural analysis using 3D imaging",
        },
        {
          step: 2,
          title: "Engineering Plan",
          description: "Customized reinforcement strategy development",
        },
        {
          step: 3,
          title: "Precision Execution",
          description: "Certified technicians implement solutions",
        },
        {
          step: 4,
          title: "Final Inspection",
          description: "DOB-approved compliance verification",
        },
      ],
    },
    regulations: {
      icon: Building,
      title: "NYC Compliance",
      items: [
        "Local Law 11: Facade Inspection & Safety Program",
        "DOB Chapter 33: Safeguards During Construction",
        "2014 NYC Building Code: Structural Integrity Standards",
      ],
    },
    faq: {
      icon: HelpCircle,
      title: "Common Questions",
      items: [
        {
          question: "How long does the process take?",
          answer:
            "Typical projects range from 2-6 weeks depending on scope and approvals.",
        },
        {
          question: "What warranty do you offer?",
          answer:
            "All work comes with a 10-year structural warranty backed by insurance.",
        },
        {
          question: "Do you handle permits?",
          answer: "Yes, we manage all necessary DOB permits and inspections.",
        },
      ],
    },
  },
  {
    overview: {
      icon: ClipboardList,
      title: "Service Overview",
      content:
        "NYC Local Law 126 (2021) mandates comprehensive parking structure inspections every 6 years to prevent structural failures. Our DOB-certified QPSIs conduct condition assessments using advanced techniques like ground penetrating radar and core sampling, ensuring compliance with current Cycle 1B requirements (2024-2025).",
    },
    whyImportant: {
      icon: Scale,
      title: "Why LL126 Compliance Matters",
      items: [
        "Avoid ECB violations up to $25,000 for missed deadlines",
        "Prevent catastrophic failures like 57 Ann St collapse (2023)",
        "Meet 2025 Cycle 1B requirements for Manhattan CD8-12 & Brooklyn",
        "Maintain property occupancy certificates and insurance coverage",
        "Address SREM conditions before automatic upgrade to Unsafe status",
      ],
    },
    process: {
      icon: Hammer,
      title: "LL126 Inspection Process",
      steps: [
        {
          step: 1,
          title: "Initial Condition Assessment",
          description:
            "QPSI conducts hands-on inspection of 10%+ structural elements with corrosion mapping and load testing",
        },
        {
          step: 2,
          title: "Classification & Reporting",
          description:
            "File DOB NOW report within 60 days (Safe/SREM/Unsafe) per 1 RCNY 103-13",
        },
        {
          step: 3,
          title: "Critical Repairs",
          description:
            "Address Unsafe conditions within 90 days with amended report within 2 weeks of completion",
        },
        {
          step: 4,
          title: "Annual Observations",
          description:
            "Implement QPSI-developed checklist for ongoing monitoring between full cycles",
        },
      ],
    },
    regulations: {
      icon: Building,
      title: "Key NYC Compliance Requirements",
      items: [
        "Local Law 126 (2021) - Parking Structure Safety Program",
        "1 RCNY 103-13 Periodic Inspection Rules",
        "FISP LL11 Integration for combined facade/garage structures",
        "DOB Chapter 33 Construction Safeguards",
        "2022 NYC Building Code §28-323.1 Structural Appurtenances",
      ],
    },
    faq: {
      icon: HelpCircle,
      title: "LL126 Compliance FAQs",
      items: [
        {
          question: "What's the penalty for missing Cycle 1B deadlines?",
          answer:
            "$2,500 monthly fines until compliance + possible vacate orders for Unsafe conditions [3][6]",
        },
        {
          question: "Does LL126 apply to residential parking garages?",
          answer:
            "Yes, except private 1-2 family garages or lots with <3 spaces [5][13]",
        },
        {
          question: "How does Cycle 1B affect my property?",
          answer:
            "Mandatory initial observation by 8/1/24 + full assessment by 12/31/25 for CD8-12 Manhattan & Brooklyn [3][14]",
        },
        {
          question: "What's the cost range for LL126 compliance?",
          answer:
            "$5,000-$25,000+ depending on structure size and condition [6][14]",
        },
        {
          question: "How differs from FISP LL11?",
          answer:
            "6-year cycles vs 5-year, focuses on load-bearing elements vs facades, requires QPSI vs QEWI [2][7]",
        },
      ],
    },
  },
  {
    overview: {
      icon: ClipboardList,
      title: "Service Overview",
      content:
        "2025 FISP Cycle 10 compliance services for NYC facades and parapets. Our certified QEWIs provide condition assessments using advanced 3D mapping and AI-assisted deterioration tracking to meet new Cycle 10A-10C sub-cycle requirements (2025-2029).",
    },
    whyImportant: {
      icon: Scale,
      title: "Critical 2025 Updates",
      items: [
        "New $5,000/year penalties for missed Cycle 10 filings [1][5]",
        "Mandatory condition mapping & repair timelines per 1 RCNY 101-07 [1][4]",
        "Block-based sub-cycles: 10A (2025-27) for blocks ending 4,5,6,9 [1][5]",
        "Unsafe conditions now require 48-hour DOB notification [1][3]",
        "25% increase in ECB fines for SREM conditions [1][6]",
      ],
    },
    process: {
      icon: Hammer,
      title: "FISP Cycle 10 Process",
      steps: [
        {
          step: 1,
          title: "Sub-Cycle Determination",
          description:
            "Block number analysis for 10A/10B/10C classification per BC 28-304.1.1",
        },
        {
          step: 2,
          title: "Digital Condition Mapping",
          description:
            "AI-assisted defect tracking with prognostic repair timelines",
        },
        {
          step: 3,
          title: "Tiered Reporting",
          description:
            "File Safe/SREM/Unsafe designations via DOB NOW within 60 days",
        },
        {
          step: 4,
          title: "Critical Repairs",
          description:
            "Address Unsafe conditions within 30 days with follow-up inspection",
        },
      ],
    },
    regulations: {
      icon: Building,
      title: "2025 Compliance Requirements",
      items: [
        "Local Law 11/FISP Cycle 10 (2025-2029)",
        "1 RCNY 101-07 Enhanced Documentation Rules",
        "2022 NYC BC §28-304.1.1 Structural Appurtenances",
        "DOB Bulletin 2025-001 Facade Inspection Protocols",
        "Int. 0904 Predictive Inspection Mandates [7]",
      ],
    },
    faq: {
      icon: HelpCircle,
      title: "FISP Cycle 10 FAQs",
      items: [
        {
          question: "What's new in Cycle 10 vs previous cycles?",
          answer:
            "Mandatory sub-cycles, prognostic repair timelines, and 25% higher fines for SREM conditions [1][5]",
        },
        {
          question: "When is Cycle 10A due?",
          answer:
            "First filings for 10A districts (blocks ending 4,5,6,9) due by 2/21/2027 [1][5]",
        },
        {
          question: "Penalty for late filing?",
          answer:
            "$1,000/month late fees + $5,000 annual non-compliance fine [1][5]",
        },
        {
          question: "Required for buildings under construction?",
          answer:
            "Yes - new 2025 rules require interim inspections every 18 months [1][3]",
        },
      ],
    },
  },
];
