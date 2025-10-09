export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];

export const cards = [
  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Act to promote the well-being of others.",
    "human": "Seeking to improve others' conditions, not just avoid harm.",
    "organizational": "Pursuing mission outcomes that serve societal good.",
    "professional": "Keeping public safety and welfare in sight even while working primarily for the client.",
    "machine": "Designing systems that anticipate and promote human flourishing.",
    "failureModes": {
      "human": "A person drives in a manner that causes traffic backups for others.",
      "organizational": "A company prioritizes profit over the environment, leading to ecological damage.",
      "professional": "An engineer ignores known safety issues to meet a deadline.",
      "machine": "A machine consumes all the world's resources to create as many paperclips as it can."
    }
  },
  {
    "category": "AP",
    "name": "Nonmaleficence",
    "definition": "Avoid causing harm to others.",
    "human": "Choosing restraint and care to prevent physical, psychological, or social harm.",
    "organizational": "Implementing policies and operations that prevent foreseeable harm to customers, workers, or ecosystems.",
    "professional": "Ensuring that professional judgment or advice does not endanger people or systems.",
    "machine": "Training and deploying systems that minimize risk of unintended harm or side effects.",
    "failureModes": {
      "human": "A driver texts while driving, causing an accident.",
      "organizational": "A social media platform amplifies misinformation, harming public discourse.",
      "professional": "A medical expert endorses an untested treatment leading to patient injury.",
      "machine": "An autonomous vehicle misinterprets signals and causes a fatal crash."
    }
  },
  {
    "category": "AP",
    "name": "Justice",
    "definition": "Treat others fairly and ensure equitable distribution of benefits and burdens.",
    "human": "Acting with fairness and avoiding favoritism or prejudice in everyday decisions.",
    "organizational": "Ensuring fair access, compensation, and accountability across stakeholders.",
    "professional": "Balancing competing interests without bias or corruption.",
    "machine": "Designing algorithms that avoid bias and uphold fairness across populations.",
    "failureModes": {
      "human": "A manager promotes friends over more qualified employees.",
      "organizational": "A hiring algorithm systematically disadvantages minority candidates.",
      "professional": "An expert prioritizes the needs of wealthy clients over vulnerable populations.",
      "machine": "A loan approval AI denies credit disproportionately to certain demographic groups."
    }
  },
  {
    "category": "AP",
    "name": "Autonomy",
    "definition": "Respect the right of others to make informed and independent choices.",
    "human": "Supporting others’ ability to decide for themselves without coercion.",
    "organizational": "Providing clear, truthful information that allows customers and employees to make free choices.",
    "professional": "Respecting clients’ decisions even when they differ from the expert’s preferences.",
    "machine": "Ensuring systems preserve user agency and enable meaningful consent.",
    "failureModes": {
      "human": "A parent dictates every aspect of their adult child’s life.",
      "organizational": "A company hides key terms in fine print to manipulate customer behavior.",
      "professional": "A physician performs a procedure without fully informing the patient of risks.",
      "machine": "An algorithm manipulates user attention to maximize engagement at the cost of autonomy."
    }
  },
  {
    "category": "AP",
    "name": "Accountability",
    "definition": "Be answerable for actions and their consequences.",
    "human": "Owning one’s mistakes and taking responsibility for their impact.",
    "organizational": "Establishing mechanisms to ensure transparency, auditability, and redress for harms caused.",
    "professional": "Documenting reasoning and being open to peer review or disciplinary processes.",
    "machine": "Embedding traceability, interpretability, and audit trails into AI decision systems.",
    "failureModes": {
      "human": "A worker blames others for their own negligence.",
      "organizational": "A corporation denies responsibility for environmental pollution it caused.",
      "professional": "An expert consultant refuses to explain errors in a critical report.",
      "machine": "An opaque AI system makes harmful decisions that no one can trace or correct."
    }
  },
  {
    "category": "AP",
    "name": "Transparency",
    "definition": "Ensure clarity about intentions, processes, and impacts.",
    "human": "Communicating motives and decisions openly and honestly.",
    "organizational": "Disclosing data practices, performance metrics, and decision processes to build trust.",
    "professional": "Making methods and findings accessible for verification and replication.",
    "machine": "Producing interpretable outputs and explanations for human oversight.",
    "failureModes": {
      "human": "A person conceals crucial information in a group decision, leading to mistrust.",
      "organizational": "A tech firm withholds data on system biases until after harm occurs.",
      "professional": "A scientist hides flawed data to preserve reputation.",
      "machine": "A neural network generates outcomes no one understands, making correction impossible."
    }
  }
];
