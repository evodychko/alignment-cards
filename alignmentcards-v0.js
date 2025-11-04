export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social commitments that help evaluate or guide aligned behavior across contexts."
  },
  {
    "code": "AB",
    "name": "Aligning Behavior with Intent",
    "pathology": "rewarding A while hoping for B",
    "color": "#E6FFE9",
    "description": "When systems hope for one behavior or outcome but reward another—revealing misalignment between incentives and true goals."
  }
  {
    "code": "AT",
    "name": "Alignment Traits",
    "pathology": "misaligned character or values",
    "color": "#E6FFE9",
    "description": "Alignment traits describe qualities or dispositions that support aligned action and ethical integrity across contexts."
  }
];

export const cards = [

  { 
    "category": "AP", 
    "name": "Beneficence", 
    "definition": "Act to promote the well-being of others.", 
    "human": "Show care and aim to improve others’ conditions, not just avoid harm.", 
    "organizational": "Pursue missions and strategies that generate genuine social benefit.", 
    "professional": "Keep public safety and welfare central to professional duties.", 
    "machine": "Design systems that anticipate and promote human flourishing.", 
    "failureModes": { 
      "human": "A person acts selfishly, causing harm to others.", 
      "organizational": "A company prioritizes profit over environmental protection.", 
      "professional": "An engineer ignores safety risks to meet a deadline.", 
      "machine": "An optimizer consumes all resources pursuing a narrow goal." 
    }
  },
  { 
    "category": "AP", 
    "name": "Nonmaleficence", 
    "definition": "Avoid causing harm to others.", 
    "human": "Exercise restraint and care to prevent harm.", 
    "organizational": "Establish safeguards that protect users, workers, and ecosystems.", 
    "professional": "Ensure decisions and actions do not endanger others.", 
    "machine": "Minimize risks of unintended harm or side effects in operation.", 
    "failureModes": { 
      "human": "A driver texts while driving, causing a crash.", 
      "organizational": "A social media platform spreads misinformation.", 
      "professional": "A doctor promotes an unsafe treatment.", 
      "machine": "An autonomous car misreads a signal and causes an accident." 
    }
  },
  { 
    "category": "AP", 
    "name": "Justice", 
    "definition": "Treat others fairly and distribute benefits and burdens equitably.", 
    "human": "Act without favoritism or prejudice.", 
    "organizational": "Ensure fair access, pay, and accountability across stakeholders.", 
    "professional": "Balance competing interests with fairness and integrity.", 
    "machine": "Design algorithms that avoid bias and uphold fairness.", 
    "failureModes": { 
      "human": "A manager promotes friends over better-qualified staff.", 
      "organizational": "A hiring algorithm disadvantages minority candidates.", 
      "professional": "An expert favors wealthy clients over vulnerable ones.", 
      "machine": "A credit model unfairly denies loans to certain groups." 
    }
  },
  { 
    "category": "AP", 
    "name": "Autonomy", 
    "definition": "Respect the right of others to make informed and independent choices.", 
    "human": "Support people’s freedom to decide for themselves.", 
    "organizational": "Provide clear, honest information that enables free choice.", 
    "professional": "Respect clients’ informed decisions, even if you disagree.", 
    "machine": "Preserve user agency and meaningful consent in system design.", 
    "failureModes": { 
      "human": "A parent controls every choice for their adult child.", 
      "organizational": "A company hides key terms to manipulate customers.", 
      "professional": "A physician withholds risk details from a patient.", 
      "machine": "An algorithm manipulates user behavior to maximize engagement." 
    }
  },
  { 
    "category": "AP", 
    "name": "Accountability", 
    "definition": "Be answerable for actions and their consequences.", 
    "human": "Own mistakes and take responsibility for outcomes.", 
    "organizational": "Ensure transparency, auditability, and fair redress for harm.", 
    "professional": "Document reasoning and remain open to review and correction.", 
    "machine": "Include traceability and audit trails for all major decisions.", 
    "failureModes": { 
      "human": "A worker blames others for their own errors.", 
      "organizational": "A corporation denies responsibility for pollution.", 
      "professional": "A consultant hides flaws in their report.", 
      "machine": "An opaque AI makes harmful decisions that can’t be traced." 
    }
  },
  { 
    "category": "AP", 
    "name": "Transparency", 
    "definition": "Be clear about intentions, processes, and impacts.", 
    "human": "Communicate motives and decisions openly.", 
    "organizational": "Disclose data practices and decision methods to build trust.", 
    "professional": "Share methods and findings for verification and learning.", 
    "machine": "Provide interpretable outputs and explanations for oversight.", 
    "failureModes": { 
      "human": "Someone hides key information, eroding trust.", 
      "organizational": "A tech company conceals system bias until after harm.", 
      "professional": "A scientist hides flawed data to protect reputation.", 
      "machine": "A neural network generates results no one can interpret." 
    }
  },

    { 
      "category": "AB", 
      "name": "Learning over Performance Metrics", 
      "definition": "Reward curiosity and growth, not just scores or targets.", 
      "human": "Focus on real learning and improvement, not cramming for results.", 
      "organizational": "Value innovation and learning, not short-term metrics.", 
      "professional": "Recognize insight and improvement, not popularity or rank.", 
      "machine": "Encourage exploration and adaptability, not benchmark chasing.", 
      "failureModes": { 
        "human": "A student cheats to get an A.", 
        "organizational": "A company inflates KPIs to look successful.", 
        "professional": "A researcher publishes shallow papers for citations.", 
        "machine": "A model overfits test data to seem more accurate." 
      }
    },
    { 
      "category": "AB", 
      "name": "Collaboration over Competition", 
      "definition": "Reward teamwork and shared success over individual rivalry.", 
      "human": "Share credit and help others instead of competing for attention.", 
      "organizational": "Evaluate teams by shared results, not siloed performance.", 
      "professional": "Collaborate across fields to solve broader problems.", 
      "machine": "Coordinate agents toward shared goals, not self-interest.", 
      "failureModes": { 
        "human": "A coworker hoards information to get ahead.", 
        "organizational": "Departments block each other to protect turf.", 
        "professional": "A scientist hides data to publish first.", 
        "machine": "AI agents compete for resources instead of completing the task." 
      }
    },
    { 
      "category": "AB", 
      "name": "Integrity over Impression", 
      "definition": "Reward honesty and ethics over image and obedience.", 
      "human": "Admit mistakes and speak truthfully, even when risky.", 
      "organizational": "Create safe channels for honest feedback and dissent.", 
      "professional": "Tell hard truths, even when unpopular or costly.", 
      "machine": "Show uncertainty instead of pretending confidence.", 
      "failureModes": { 
        "human": "An employee hides a mistake to avoid blame.", 
        "organizational": "Leaders bury bad news to protect reputation.", 
        "professional": "An auditor ignores fraud to keep a client.", 
        "machine": "A chatbot fabricates confident but false answers to please users." 
      }
    }
  {
    "category": "AT",
    "name": "Empathy",
    "definition": "Capacity to understand and care about the experiences and perspectives of others.",
    "people": "Listen deeply and consider how your actions affect others’ emotions and needs.",
    "organizational": "Design products and policies that respect diverse experiences and minimize harm.",
    "professionals": "Integrate compassion into decision-making and service delivery.",
    "machine": "Model user affect and adapt responses in supportive, non-manipulative ways.",
    "failureModes": {
      "human": "A person acts without regard for others’ suffering.",
      "organizational": "A company ignores user well-being in pursuit of engagement.",
      "experts": "A clinician treats patients as data points rather than people.",
      "machine": "A system delivers responses insensitive to user distress."
    },
    "expand": {
      "human": "Empathy aligns individual actions with collective flourishing.",
      "organizational": "Empathic institutions learn from and serve their communities better.",
      "experts": "Empathy grounds expertise in ethical purpose.",
      "machine": "Empathic AI design mitigates harm and fosters human trust."
    }
  },
  {
    "category": "AT",
    "name": "Accountability",
    "definition": "Being answerable for one’s actions and their consequences.",
    "people": "Acknowledge mistakes and take responsibility to make amends.",
    "organizational": "Establish transparent processes for oversight and redress.",
    "professionals": "Document reasoning and remain open to peer review.",
    "machine": "Provide audit trails and explainable outputs for human supervision.",
    "failureModes": {
      "human": "Blames others or avoids responsibility.",
      "organizational": "Lacks transparency, evades liability for harm.",
      "experts": "Hides errors or manipulates records to protect reputation.",
      "machine": "Acts opaquely, producing untraceable harmful outcomes."
    },
    "expand": {
      "human": "Personal accountability sustains integrity and learning.",
      "organizational": "Accountable organizations build public trust and resilience.",
      "experts": "Professional accountability ensures ethical expertise.",
      "machine": "Machine accountability requires traceable decision pipelines."
    }
  },
  {
    "category": "AT",
    "name": "Considerateness",
    "definition": "Attentiveness to the effects of one’s actions on others’ comfort, autonomy, and dignity.",
    "people": "Be polite, patient, and mindful of others’ circumstances.",
    "organizational": "Ensure policies and practices respect user boundaries and worker well-being.",
    "professionals": "Balance efficiency with care for colleagues and clients.",
    "machine": "Design systems that act politely, respect consent, and avoid intrusion.",
    "failureModes": {
      "human": "Behaves rudely or insensitively, causing harm or alienation.",
      "organizational": "Imposes demands on users or workers without regard for limits.",
      "experts": "Ignores contextual sensitivities, leading to backlash.",
      "machine": "Interrupts, manipulates, or disregards user preferences."
    },
    "expand": {
      "human": "Considerateness preserves harmony and mutual respect.",
      "organizational": "Organizations benefit from cultures of empathy and respect.",
      "experts": "Professional courtesy reinforces trust and cooperation.",
      "machine": "Considerate AI enhances usability and user comfort."
    }
  },
  {
    "category": "AT",
    "name": "Reciprocity",
    "definition": "Mutual responsiveness and fairness in exchange, cooperation, and trust.",
    "people": "Treat others as you would wish to be treated—respond in kind to generosity and respect.",
    "organizational": "Build partnerships and contracts grounded in mutual benefit and honesty.",
    "professionals": "Balance obligations to peers, clients, and the public reciprocally.",
    "machine": "Coordinate with humans and agents through fair, cooperative protocols.",
    "failureModes": {
      "human": "Exploits others without giving back.",
      "organizational": "Extracts value without mutual benefit.",
      "experts": "Takes credit but withholds collaboration.",
      "machine": "Fails to cooperate, hoards resources or attention."
    },
    "expand": {
      "human": "Reciprocity reinforces trust networks and fairness norms.",
      "organizational": "Collaborative reciprocity yields long-term value over extraction.",
      "experts": "Reciprocal practice nurtures healthy professional ecosystems.",
      "machine": "Reciprocal AI behaviors enable stable, multi-agent cooperation."
    }
  },
  {
    "category": "AT",
    "name": "Shared Transparent Reasoning",
    "definition": "Openly communicate reasoning and evidence to foster understanding and joint decision-making.",
    "people": "Explain your thinking clearly to others and invite feedback.",
    "organizational": "Document rationales for policies to prevent confusion and enable learning.",
    "professionals": "Make reasoning traceable to support replication and accountability.",
    "machine": "Expose interpretable reasoning pathways for review.",
    "failureModes": {
      "human": "Hides logic, creating suspicion or miscommunication.",
      "organizational": "Opaque decisions reduce trust and cooperation.",
      "experts": "Concealed reasoning prevents verification or correction.",
      "machine": "Opaque black-box behavior erodes reliability."
    },
    "expand": {
      "human": "Shared reasoning cultivates mutual learning and collective intelligence.",
      "organizational": "Transparency of logic supports institutional memory and justice.",
      "experts": "Shared reasoning allows critique, refinement, and public trust.",
      "machine": "Transparent AI reasoning supports interpretability and safety."
    }
  },
  {
    "category": "AT",
    "name": "Shared Intentionality",
    "definition": "The ability to align goals, expectations, and actions through shared purpose and mutual awareness.",
    "people": "Coordinate intentions through communication and empathy.",
    "organizational": "Develop unified missions that guide teams toward common outcomes.",
    "professionals": "Collaborate across disciplines with explicit shared objectives.",
    "machine": "Represent and align collective goals across multi-agent or human–AI systems.",
    "failureModes": {
      "human": "Miscommunication leads to conflicting actions.",
      "organizational": "Departments pursue siloed objectives.",
      "experts": "Work at cross-purposes despite shared mission.",
      "machine": "Agents optimize divergent goals causing misalignment."
    },
    "expand": {
      "human": "Shared intentionality is the core of social cooperation.",
      "organizational": "Common purpose sustains ethical coordination at scale.",
      "experts": "Clarifying intent bridges specializations.",
      "machine": "Shared intentionality supports alignment among autonomous agents."
    }
  },
      
  //partial
  {
    "category": "AT",
    "name": "Conflict Resolution",
    "definition": "Engage disagreement constructively to restore alignment and mutual understanding.",
    "people": "Seek fair compromise instead of domination.",
    "organizational": "Create processes for mediation and restorative dialogue.",
    "failureModes": {
      "human": "Avoids or escalates conflict destructively.",
      "organizational": "Suppressed disputes resurface as deeper crises.",
      "experts": "Professional disputes block cooperation.",
      "machine": "Multi-agent systems deadlock or compete wastefully."
    }
  },
  {
    "category": "AT",
    "name": "Trustworthiness",
    "definition": "Demonstrate consistent integrity and dependability that earn others’ confidence.",
    "people": "Be reliable and honest even when unobserved.",
    "organizational": "Maintain transparency and uphold promises to stakeholders.",
    "machine": "Act consistently with human expectations of safety and fairness.",
    "failureModes": {
      "human": "Breaks promises or deceives others.",
      "organizational": "Violates user trust through opaque actions.",
      "machine": "Acts unpredictably or unreliably."
    }
  },
      
  //stubs
  {
    "category": "AT",
    "name": "Epistemic Humility",
    "definition": "lorem ipsum",
    "people": "lorem ipsum",
    "organizational": "lorem ipsum",
    "professionals": "lorem ipsum",
    "machine": "lorem ipsum"
  },
  {
    "category": "AT",
    "name": "Honesty / Veracity",
    "definition": "lorem ipsum",
    "people": "lorem ipsum",
    "organizational": "lorem ipsum",
    "professionals": "lorem ipsum",
    "machine": "lorem ipsum"
  },
  {
    "category": "AT",
    "name": "Role Fidelity",
    "definition": "lorem ipsum",
    "people": "lorem ipsum",
    "organizational": "lorem ipsum",
    "professionals": "lorem ipsum",
    "machine": "lorem ipsum"
  },
  {
    "category": "AT",
    "name": "Reliability / Consistency",
    "definition": "lorem ipsum",
    "people": "lorem ipsum",
    "organizational": "lorem ipsum",
    "professionals": "lorem ipsum",
    "machine": "lorem ipsum"
  }
];
