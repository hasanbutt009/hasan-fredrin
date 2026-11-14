export const profile = {
  name: "Hasan Iqbal Butt",
  headline: "Forward-Deployed AI & Cloud Infrastructure Engineer",
  subheadline:
    "6+ years embedding with engineering teams across the US, Europe, and APAC to wire AI agent workflows, multi-cloud infrastructure (AWS & GCP), CI/CD pipelines, and observability into production codebases.",
  location:
    "Lahore, Pakistan (UTC+5) · Async-first written workflow with daily US morning and full EU/UK overlap.",
  links: {
    email: "butthasan65@gmail.com",
    portfolio: "https://hasanbutt.com",
    github: "https://github.com/hasanbutt009",
    linkedin: "https://linkedin.com/in/hasan-butt96",
    phone: "+92-322-6676016",
  },
} as const;

export interface ShippedItem {
  id: string;
  title: string;
  org?: string;
  period?: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
  caseStudies: { label: string; href: string }[];
}

export const shipped: ShippedItem[] = [
  {
    id: "B1",
    title: "Self-Hosted LLM Serving & Agent Loop Guardrails",
    org: "AEITCH",
    period: "Nov 2025 - Present",
    metrics: [
      { value: "−82%", label: "monthly inference spend" },
      { value: "−64%", label: "runaway token burn" },
      { value: "28s", label: "root-cause triage" },
    ],
    bullets: [
      "Cut monthly LLM inference spend by 82% ($18,000 to $3,240/month) serving Llama 3.1 on dedicated NVIDIA A100 GPUs with vLLM and llama.cpp.",
      "Wired OpenTelemetry (gen_ai.* distributed spans) and Redis budget circuit breakers into Python, FastAPI, and PostgreSQL agentic workflows, cutting runaway token burn by 64% and root-cause triage time to 28 seconds.",
    ],
    caseStudies: [
      { label: "LLM GPU deployment", href: "https://hasanbutt.com/projects/llm-gpu-deployment" },
      { label: "Agentic AIOps observability", href: "https://hasanbutt.com/projects/agentic-aiops-observability" },
    ],
  },
  {
    id: "B2",
    title: "Citation-Verified Enterprise RAG Pipeline",
    metrics: [
      { value: "0.72→0.98", label: "answer faithfulness" },
      { value: "3,145", label: "legal PDFs" },
    ],
    bullets: [
      "Built hybrid dense + BM25 retrieval, cross-encoder reranking, and strict span verification in Python, FastAPI, and Docker across 3,145 complex legal PDFs, lifting answer faithfulness from 0.72 to 0.98.",
    ],
    caseStudies: [{ label: "Cloud LLM RAG", href: "https://hasanbutt.com/projects/cloud-llm-rag" }],
  },
  {
    id: "B3",
    title: "Sub-Minute CI/CD Rollbacks & Linux Kernel Tuning",
    org: "Nextbridge",
    period: "2025",
    metrics: [
      { value: "<1 min", label: "rollbacks" },
      { value: "−35%", label: "p95 API latency" },
    ],
    bullets: [
      "Automated Amazon ECS continuous delivery via GitHub Actions, AWS CodePipeline, and Docker, turning multi-hour releases into zero-downtime, sub-minute rollbacks.",
      "Reduced p95 API latency by 35% through Python Locust load testing and Linux kernel socket tuning, alongside ISO 27001 least-privilege IAM and KMS hardening.",
    ],
    caseStudies: [],
  },
  {
    id: "B4",
    title: "Regulated Fintech Scale & 3ms PostgreSQL Latency",
    org: "QisstPay",
    period: "2022 - 2024",
    metrics: [
      { value: "1,200→3ms", label: "checkout query latency" },
      { value: "<8s", label: "cold starts (from 2 min)" },
      { value: "99.9%", label: "uptime" },
    ],
    bullets: [
      "Migrated 17+ microservices (Python, Go, Java) to Google Cloud Run autoscaling, cutting cold starts from 2 minutes to under 8 seconds across 1M+ PCI DSS payment transactions at 99.9% uptime.",
      "Tuned partitioned PostgreSQL + Redis caching to drop checkout query latency from 1,200ms to 3ms.",
    ],
    caseStudies: [{ label: "QisstPay fintech infra", href: "https://hasanbutt.com/projects/qisstpay-fintech-infra" }],
  },
  {
    id: "B5",
    title: "Multi-Cloud Terraform & FinOps Audits",
    org: "AEITCH & VentureDive",
    metrics: [
      { value: "15–53%", label: "cloud bill cut" },
      { value: "<15 min", label: "test-env refresh" },
    ],
    bullets: [
      "Codified drift-free AWS (ECS Fargate, Lambda, EC2, Aurora Serverless v2, VPC Gateway Endpoints) and GCP stacks in modular Terraform and AWS CDK, cutting monthly client cloud bills by 15% to 53% ($6,400 to $2,990/month) and test-environment refresh times below 15 minutes.",
    ],
    caseStudies: [],
  },
];

export const whyFredrin = [
  {
    title: "Customer Repo Readiness",
    body: "Authoring deterministic Project Context (AGENTS.md), typed boundaries, and CI gates so AI Workers merge clean PRs instead of guessing repo conventions.",
  },
  {
    title: "Full-Seam Debugging",
    body: "Comfortable across TypeScript/Python/Go, Git branches/worktrees/rebases, Linux processes/shells/sockets, Docker sandboxes, GitHub Actions CI status, and air-gapped AWS/GCP VPC security.",
  },
  {
    title: "Built With Fredrin",
    body: "This repository was scaffolded, reviewed in a Git worktree, and shipped through Fredrin's Tickets & Review board.",
  },
] as const;
