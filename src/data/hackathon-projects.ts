export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    tags: string[];
    imageUrl: string;
    videoUrl?: string;
    liveUrl: string;
    githubUrl: string;
    achievement: string;
    benchmark: string;
    outcomes: string[];
    modules?: { title: string; content: string; icon?: string }[];
    stack: { category: string; items: string[] }[];
}

export const hackathonProjects: Project[] = [
    {
        id: 101,
        slug: 'physical-ai-humanoid-robotics-textbook',
        title: 'Physical AI & Humanoid Robotics Textbook',
        description: 'A comprehensive digital textbook platform for Physical AI, featuring integrated RAG Chatbot, ROS 2 simulations, and multilingual support.',
        fullDescription: 'The future of work lies in the partnership between humans, intelligent agents, and robots. This project serves as a pioneering educational platform for "Physical AI"—AI systems that function in reality and comprehend physical laws. Built with standard-setting documentation and interactive learning tools, it bridges the gap between digital intelligence and embodied physical systems.',
        challenge: 'Educational resources for Physical AI were either too academic or too superficial, making it difficult for students to bridge the gap between AI code and physical motor control.',
        solution: 'Built a unified intelligence portal using Docusaurus and Claude Code, featuring a real-time RAG chatbot that can explain complex ROS 2 concepts and simulate humanoid kinematics directly in the browser.',
        tags: ['Next.js', 'Docusaurus', 'OpenAI', 'RAG', 'ROS 2'],
        imageUrl: '/physical-ai-textbook.png',
        videoUrl: '/videos/physical-ai-humanoid-robotics-textbook.mp4',
        liveUrl: 'https://frontend-two-psi-45.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Hackathon-I',
        achievement: '1st Place Submission',
        benchmark: 'Architectural Benchmark: 98%',
        outcomes: [
            'Engineered a high-fidelity Docusaurus-based textbook platform.',
            'Implemented a dynamic RAG (Retrieval-Augmented Generation) Chatbot using OpenAI ChatKit.',
            'Integrated multilingual support (English/Urdu) for localized education.',
            'Designed architectural modules for ROS 2, Gazebo, and NVIDIA Isaac Sim.'
        ],
        modules: [
            { title: 'The Robotic Nervous System', content: 'In-depth coverage of ROS 2 Nodes, Topics, Services, and URDF for humanoid control.', icon: 'cpu' },
            { title: 'The Digital Twin', content: 'High-fidelity physics simulation using Gazebo and Unity for sensor-rich environments.', icon: 'layers' },
            { title: 'Vision-Language-Action (VLA)', content: 'Bridging LLMs and Robotics using Whisper for voice commands and cognitive planning.', icon: 'play' }
        ],
        stack: [
            { category: 'Frontend', items: ['Next.js', 'Tailwind', 'Docusaurus'] },
            { category: 'AI Intelligence', items: ['OpenAI SDK', 'FastAPI', 'Qdrant Cloud', 'RAG'] },
            { category: 'Robotics', items: ['ROS 2', 'Gazebo', 'NVIDIA Isaac Sim'] }
        ]
    },
    {
        id: 102,
        slug: 'cloud-native-ai-todo-platform',
        title: 'Cloud-Native AI Todo Platform',
        description: 'An advanced distributed system evolving from CLI to Cloud-Native. Features Spec-Driven Development and Kubernetes deployment.',
        fullDescription: 'This project demonstrates the evolution of software from a simple script to a Kubernetes-managed, event-driven, AI-powered distributed system. It strictly follows Spec-Driven Development (SDD), where every feature is architected through machine-readable specs before implementation. It represents the "Architecture of Intelligence" for high-scale enterprise applications.',
        challenge: 'Migrating legacy CLI logic to a distributed cloud-native architecture often leads to tech debt and inconsistent state management across microservices.',
        solution: 'Leveraged Spec-Driven Development with Claude Code to generate mathematically consistent service boundaries, using Kafka for event streaming and Dapr for robust service invocation.',
        tags: ['FastAPI', 'Kubernetes', 'Next.js', 'PostgreSQL', 'Docker'],
        imageUrl: '/cloud-native-todo.png',
        videoUrl: '/videos/cloud-native-ai-todo-platform.mp4',
        liveUrl: 'https://todo-chi-neon.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Hackathon-II',
        achievement: 'Hackathon II Winner',
        benchmark: 'System Scalability: High-End',
        outcomes: [
            'Developed a 5-phase evolutionary project from Python CLI to full Cloud-Native.',
            'Implemented Spec-Driven Development using Claude Code and Spec-Kit Plus.',
            'Deployed resilient microservices on Minikube and DigitalOcean Kubernetes.',
            'Built an event-driven architecture using Kafka and Dapr sidecars.'
        ],
        modules: [
            { title: 'Spec-Driven Core', content: 'Markdown Constitution and Specs for every feature, enabling autonomous AI code generation.', icon: 'code' },
            { title: 'Agentic Workflows', content: 'Conversational interface managing task rescheduling via natural language orchestration.', icon: 'message' },
            { title: 'Native Infrastructure', content: 'Full containerization with Docker and orchestration via Helm Charts on Kubernetes clusters.', icon: 'cloud' }
        ],
        stack: [
            { category: 'Infrastructure', items: ['Kubernetes', 'Docker', 'Minikube', 'Helm'] },
            { category: 'Backend', items: ['FastAPI', 'SQLModel', 'Neon Serverless DB', 'Kafka'] },
            { category: 'Development', items: ['Claude Code', 'Spec-Kit Plus', 'Dapr'] }
        ]
    },
    {
        id: 103,
        slug: 'learnflow-ai-platform',
        title: 'LearnFlow AI Platform',
        description: 'A reusable intelligence platform for agentic infrastructure using Claude Code and MCP code execution protocols.',
        fullDescription: 'LearnFlow is an AI-powered Python tutoring platform designed to demonstrate modern "Agentic Infrastructure." It moves beyond simple tool-calling to "Code Execution with MCP," enabling AI agents to autonomously build, test, and deploy complex systems. The platform features specialized agents for concept teaching, debugging, and code reviews.',
        challenge: 'AI tutors often hallucinate code solutions or lack the ability to actually run and verify the code they are teaching to students.',
        solution: 'Implemented the "Code Execution with MCP" pattern, allowing the AI to execute Python code in a secure sandbox and verify student submissions against real-world test cases.',
        tags: ['Next.js', 'Claude Code', 'MCP', 'Microservices', 'Kafka'],
        imageUrl: '/learnflow-platform.png',
        videoUrl: '/videos/learnflow-ai-platform.mp4',
        liveUrl: 'https://ai-native-bot.vercel.app/',
        githubUrl: 'https://github.com/muhammadsami987123/Hackathon-III',
        achievement: 'Hackathon III Winner',
        benchmark: 'Inference Efficiency: Opt',
        outcomes: [
            'Created a multi-agent system (Triage, Concepts, Debug, Progress agents).',
            'Implemented token-efficient MCP Code Execution patterns (80-98% reduction).',
            'Built reusable "Skills" that work across Claude Code and Goose agents.',
            'Integrated Monaco Editor for real-world Python execution in a secure sandbox.'
        ],
        modules: [
            { title: 'Agentic Infrastructure', content: 'Modular skills for infrastructure deployment (Kafka, PostgreSQL, Docusaurus).', icon: 'settings' },
            { title: 'Reusable Intelligence', content: 'Teaching AI "Measurable Skills" rather than just writing boilerplate code.', icon: 'zap' },
            { title: 'Struggle Detection', content: 'Adaptive monitoring that alerts teachers when students hit specific code logic blockers.', icon: 'activity' }
        ],
        stack: [
            { category: 'AI Orchestration', items: ['MCP', 'Claude Code Skills', 'OpenAI Agents SDK'] },
            { category: 'Real-time', items: ['Kafka', 'Dapr', 'Monaco Editor'] },
            { category: 'Cloud', items: ['Kubernetes', 'Argo CD', 'Kong API Gateway'] }
        ]
    }
];
