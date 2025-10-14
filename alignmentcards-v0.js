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
    "color": "#FFF6E6",
    "description": "When systems hope for one behavior or outcome but reward another—revealing misalignment between incentives and true goals."
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

];
