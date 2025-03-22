/**
 * Core values data array
 * Each object contains:
 * - id: unique identifier
 * - title: name of the core value
 * - description: explanation of the value
 * - icon: SVG element representing the value
 */
export const coreValues = [
  {
    id: 1,
    title: "",
    description: [
      `Anticipate Risks: Identify compliance hurdles before they derail timelines`,
      `Streamline Processes: Eliminate bottlenecks with pre-emptive planning.`,
      `Cost Savings: Avoid delays that blow budgets.`
    ],
    icon: (
      <svg
        className="w-12 h-12 text-[#00FF85]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "We Don’t Just Meet Standards—We Redefine Them",
    description:
      [
        `Construction Compliance`,
        `Inspections & Expediting`,
        `Risk Mitigation`,
        `Consultation & Owner representation`
      ],
    icon: (
      <svg
        className="w-12 h-12 text-[#00FF85]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },

];

/**
 * Features data array
 * Each object contains:
 * - id: unique identifier
 * - title: name of the feature
 * - description: explanation of the feature
 * - icon: SVG element representing the feature
 */
export const features = [
  {
    id: 1,
    title: "Preventative Solutions",
    tagline: "Proactive Protection for your project",

    description: [
      `Anticipate Risks: Identify compliance hurdles before they derail timelines`,
      `Streamline Processes: Eliminate bottlenecks with pre-emptive planning.`,
      `Cost Savings: Avoid delays that blow budgets.`
    ],
    // icon: (
    //   <svg
    //     className="w-8 h-8 text-[#00FF85]"
    //     fill="none"
    //     stroke="currentColor"
    //     viewBox="0 0 24 24"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    //     />
    //   </svg>
    // ),
  },
  {
    id: 2,
    title: "Total Transparency",

    tagline: "Clarity you can trust, 24/7.",
    description: [
      `Real - Time Client Portal: We prioritize your pet's safety and comfort, providing a nurturing and secure setting for them to thriv.`,
      `Daily Progress Reports: Track inspections, permits, and approvals.`,
      `Open Communication: Weekly check-ins with your dedicated team.`,

    ]
    ,
    // icon: (
    //   <svg
    //     className="w-8 h-8 text-[#00FF85]"
    //     fill="none"
    //     stroke="currentColor"
    //     viewBox="0 0 24 24"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    //     />
    //   </svg>
    // ),
  },
  {
    id: 3,
    title: "Dependability",
    tagline: "Your Project, Our Obsession",
    description: [
      `Meticulous Inspections: Routine checks + hidden risk assessments.`,
      `Emergency Response: 24/7 support for unexpected challenges.`,
      `Trusted Expertise: 15+ years safeguarding NYC projects.`,

    ],
    // icon: (
    //   <svg
    //     className="w-8 h-8 text-[#00FF85]"
    //     fill="none"
    //     stroke="currentColor"
    //     viewBox="0 0 24 24"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    //     />
    //   </svg>
    // ),
  },
  {
    id: 4,
    title: "No-Excuse Accountability",
    tagline: 'Your Project, Our Obsession',
    description: [
      `On-Time Guarantee: Late delivery? We cover penalties`,
      `Rigorous Quality Checks: Triple-verified compliance.`,
      `Budget Discipline: Zero hidden fees.`,

    ],
    // icon: (
    //   <svg
    //     className="w-8 h-8 text-[#00FF85]"
    //     fill="none"
    //     stroke="currentColor"
    //     viewBox="0 0 24 24"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
    //     />
    //   </svg>
    // ),
  },
  {
    id: 5,
    title: "Smarter Connection",
    tagline: 'Tailored to You, Controlled by You.',
    description: [
      `Priority Alerts: Choose updates for inspections, approvals, or emergencies`,
      `Dedicated Liaison: Single point of contact for seamless coordination.`,
      `No Spam, Ever: Only what matters to your project.`,

    ],
    // icon: (
    //   <svg
    //     className="w-8 h-8 text-[#00FF85]"
    //     fill="none"
    //     stroke="currentColor"
    //     viewBox="0 0 24 24"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
    //     />
    //   </svg>
    // ),
  },
  {
    id: 6,
    title: "Precision",
    tagline: 'Accuracy Meets Efficency',
    description: [
      `Laser-Focused Expertise: Cut through complexity with ASME/DOB-certified pros.`,
      `Proactive Streamlining: Accelerate timelines by resolving issues at the source.`,
      `Compliant Solutions: Pass inspections on the first try.`,

    ],
    // icon: (
    //   <svg
    //     className="w-8 h-8 text-[#00FF85]"
    //     fill="none"
    //     stroke="currentColor"
    //     viewBox="0 0 24 24"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
    //     />
    //   </svg>
    // ),
  },
];
