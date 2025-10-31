import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowLeft, ExternalLink, Calendar, User, Target, Lightbulb, Users, TestTube, Smartphone, Eye, Monitor, BarChart, MessageSquare, Database, Brain, Zap, MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const caseStudyImage = "https://images.unsplash.com/photo-1761311984472-fb2e35f645d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE4NzE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const voyagerImage = "https://images.unsplash.com/photo-1759912255512-c5e56b4e5e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODQ3OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const siemensImage = "https://images.unsplash.com/photo-1631557677599-ee5fe0b3440b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGlhZ25vc2lzJTIwZGV2aWNlfGVufDF8fHx8MTc2MTg5NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const bgcaImage = "https://images.unsplash.com/photo-1575985977334-ca65c2d8941a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHViJTIwbWVtYmVyc2hpcCUyMHdvcmtmbG93fGVufDF8fHx8MTc2MTg5NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const bgcaRegistrationImage = "https://images.unsplash.com/photo-1575985977334-ca65c2d8941a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHViJTIwbWVtYmVyc2hpcCUyMHdvcmtmbG93fGVufDF8fHx8MTc2MTg5NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const bgcaSafetyImage = "https://images.unsplash.com/photo-1642873965200-4dd3753336b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBjaGVja2xpc3QlMjBtb2JpbGV8ZW58MXx8fHwxNzYxODk1MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const hooHooMainImage = "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB3ZWF0aGVyJTIwYXBwfGVufDF8fHx8MTc2MTg5NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const hooHooDestinationImage = "https://images.unsplash.com/photo-1761198845268-6d3e7f2262db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE4OTUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const hooHooAIImage = "https://images.unsplash.com/photo-1761198845268-6d3e7f2262db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE4OTUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const wellMonitorDashboard = "https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwbW9uaXRvcmluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE4OTUwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const wellRecordingForm = "https://images.unsplash.com/photo-1641630376356-fb9e646b0ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY29sbGVjdGlvbiUyMGZvcm0lMjB0YWJsZXR8ZW58MXx8fHwxNzYxODk1MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const wellCompletedReadings = "https://images.unsplash.com/photo-1641630376356-fb9e646b0ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY29sbGVjdGlvbiUyMGZvcm0lMjB0YWJsZXR8ZW58MXx8fHwxNzYxODk1MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface DynamicCaseStudyProps {
  projectId: string;
  onBack: () => void;
}

// Case study data for different projects
const caseStudyData = {
  "aecom-well-monitoring": {
    title: "AECOM Well Monitoring",
    subtitle: "Mobile Field Data Collection System",
    duration: "6 months",
    team: "4 designers, 8 developers, 2 environmental engineers",
    role: "Senior UX Designer",
    year: "2024",
    image: wellMonitorDashboard,
    challenge: "Environmental technicians needed a reliable mobile solution to record well readings on-site, with immediate validation of critical parameters and seamless data transmission to supervisors. Paper-based processes were prone to errors and delays in identifying safety issues.",
    solution: "We designed a tablet and mobile app that streamlines field data collection with predefined measurement parameters, real-time validation alerts, and instant data transmission. The system ensures accuracy, safety compliance, and efficient communication between field teams and management.",
    research: [
      { title: "Field Technicians", value: "25+", description: "Across multiple site locations" },
      { title: "Well Sites", value: "150+", description: "Different environmental conditions" },
      { title: "Reading Parameters", value: "5", description: "Critical water quality measures" }
    ],
    features: [
      { title: "Predefined Parameter Tracking", description: "Water level, pH, contamination, salt value, and hardness measurements" },
      { title: "Real-time Validation Alerts", description: "Immediate warnings when readings exceed preset safety thresholds" },
      { title: "Mobile-First Design", description: "Optimized for tablet and mobile use in outdoor field conditions" },
      { title: "Instant Data Transmission", description: "Tag and send readings directly to supervisors and management" }
    ],
    results: [
      { metric: "Data Accuracy", value: "99%", description: "Elimination of manual transcription errors" },
      { metric: "Response Time", value: "-75%", description: "Faster alert notifications to supervisors" },
      { metric: "Site Coverage", value: "125+", description: "Active monitoring locations" }
    ],
    screenshots: [
      { 
        image: wellMonitorDashboard, 
        title: "Well Monitor Dashboard", 
        description: "Main dashboard showing readings today, alerts, and active sites with quick access to start new measurements" 
      },
      { 
        image: wellRecordingForm, 
        title: "Record Readings Interface", 
        description: "Clean data entry form for water level, pH value, contamination, salt value, and hardness measurements" 
      },
      { 
        image: wellCompletedReadings, 
        title: "Completed Reading Validation", 
        description: "Final review screen with all parameters validated and ready for submission to supervisors" 
      }
    ],
    process: [
      { title: "Field Research", description: "Conducted on-site observations with environmental technicians to understand current manual data collection workflows and pain points" },
      { title: "User Journey Mapping", description: "Mapped the complete well monitoring process from site arrival to data transmission to identify optimization opportunities" },
      { title: "Mobile-First Design", description: "Created tablet and mobile-optimized interfaces for outdoor use with large touch targets and clear visual hierarchy" },
      { title: "Validation System Design", description: "Developed real-time parameter validation with preset thresholds and immediate alert mechanisms for safety compliance" },
      { title: "Field Testing", description: "Conducted extensive testing at multiple well sites to ensure reliability in various environmental conditions and network connectivity scenarios" }
    ]
  },
  "ai-chat-assistant": {
    title: "AI Chat Assistant",
    subtitle: "Transforming Customer Support with Intelligent Conversations",
    duration: "5 months",
    team: "4 designers, 8 developers, 2 ML engineers",
    role: "Senior AI UX Designer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzY4NTYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "Customer support teams were overwhelmed with repetitive queries while customers faced long wait times and inconsistent responses. Traditional chatbots provided poor user experiences with limited understanding and rigid response patterns.",
    solution: "We created an AI chat assistant with advanced natural language understanding, context awareness, and seamless human handoff capabilities. The system provides personalized, accurate responses while maintaining conversational flow and emotional intelligence.",
    research: [
      { title: "Support Teams", value: "25", description: "Customer service departments" },
      { title: "Customer Queries", value: "10K+", description: "Analyzed for patterns" },
      { title: "Response Quality", value: "95%", description: "Satisfaction baseline target" }
    ],
    features: [
      { title: "Context-Aware Responses", description: "Maintains conversation context and user history for relevant responses" },
      { title: "Multi-Language Support", description: "Communicates fluently in 15+ languages with cultural sensitivity" },
      { title: "Intelligent Routing", description: "Knows when to escalate to human agents based on complexity" },
      { title: "Enterprise Integration", description: "Connects with CRM, knowledge bases, and business systems" }
    ],
    results: [
      { metric: "Resolution Rate", value: "85%", description: "First-contact problem resolution" },
      { metric: "Response Time", value: "2s", description: "Average response latency" },
      { metric: "User Satisfaction", value: "4.7/5", description: "Customer rating improvement" }
    ],
    screenshots: [
      { 
        image: "https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwbGljYXRpb24lMjBtb2JpbGUlMjBzY3JlZW58ZW58MXx8fHwxNzU3NjgyMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Chat Interface", 
        description: "Intuitive conversational interface with AI-powered suggestions and smart replies" 
      },
      { 
        image: "https://images.unsplash.com/photo-1551302175-952301267d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMHNjcmVlbnxlbnwxfHx8fDE3NTc2ODIxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Analytics Dashboard", 
        description: "Real-time conversation analytics and performance monitoring for customer support teams" 
      }
    ]
  },
  "ai-workflow-automation": {
    title: "AI Workflow Automation",
    subtitle: "Intelligent Process Optimization at Scale",
    duration: "6 months",
    team: "5 designers, 10 developers, 3 process analysts",
    role: "Lead Process Designer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGF1dG9tYXRpb24lMjBzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTc2ODU2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "Business processes were inefficient with manual bottlenecks, unpredictable delays, and limited visibility. Organizations couldn't identify optimization opportunities or predict process failures before they occurred.",
    solution: "We designed an AI-powered workflow orchestration platform that automatically optimizes business processes, predicts bottlenecks, and adapts workflows in real-time based on performance data and changing business conditions.",
    research: [
      { title: "Business Processes", value: "150+", description: "Cross-industry workflows" },
      { title: "Optimization Points", value: "500+", description: "Potential improvements identified" },
      { title: "Performance Data", value: "1TB+", description: "Historical process data analyzed" }
    ],
    features: [
      { title: "Predictive Analytics", description: "Forecasts process bottlenecks and suggests preventive actions" },
      { title: "Auto-Optimization", description: "Dynamically adjusts workflows based on real-time performance" },
      { title: "Visual Process Designer", description: "Intuitive drag-and-drop interface for workflow creation" },
      { title: "Smart Monitoring", description: "AI-powered alerting and anomaly detection system" }
    ],
    results: [
      { metric: "Process Speed", value: "+3x", description: "Average workflow acceleration" },
      { metric: "Cost Savings", value: "40%", description: "Operational cost reduction" },
      { metric: "Error Reduction", value: "-75%", description: "Process error elimination" }
    ],
    screenshots: [
      { 
        image: "https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZSUyMHNjcmVlbnxlbnwxfHx8fDE3NTc2ODIxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Workflow Designer", 
        description: "Visual drag-and-drop interface for creating and optimizing complex business processes" 
      },
      { 
        image: "https://images.unsplash.com/photo-1752524722694-e0976575a993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGludGVyZmFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTc2ODIxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Performance Analytics", 
        description: "Real-time process monitoring with predictive insights and optimization recommendations" 
      }
    ]
  },
  "smart-learning-app": {
    title: "Smart Learning Mobile App",
    subtitle: "Revolutionizing Educational Technology",
    duration: "4 months",
    team: "4 designers, 6 developers",
    role: "Lead UX/UI Designer",
    year: "2024",
    image: caseStudyImage,
    challenge: "Traditional learning platforms often fail to engage students effectively, leading to low completion rates and poor learning outcomes. Students struggle with one-size-fits-all approaches that don't adapt to their individual learning styles and pace.",
    solution: "We designed an intelligent learning platform that adapts to each student's learning style, provides personalized content recommendations, and uses gamification to maintain engagement throughout the learning journey.",
    research: [
      { title: "User Interviews", value: "25+", description: "Students and educators" },
      { title: "Survey Responses", value: "150+", description: "Learning preferences" },
      { title: "Competitor Analysis", value: "12", description: "Leading platforms" }
    ],
    features: [
      { title: "Personalized Learning Paths", description: "AI-driven content adaptation based on learning style and progress" },
      { title: "Interactive Content", description: "Multimedia lessons with quizzes, videos, and hands-on exercises" },
      { title: "Progress Tracking", description: "Real-time analytics and achievement badges to motivate learners" },
      { title: "Community Features", description: "Peer collaboration tools and mentor support system" }
    ],
    results: [
      { metric: "User Engagement", value: "+60%", description: "Increase in daily active users" },
      { metric: "Completion Rate", value: "+45%", description: "Course completion improvement" },
      { metric: "User Satisfaction", value: "4.9/5", description: "Average app store rating" }
    ]
  },
  "enterprise-crm": {
    title: "Enterprise CRM Platform",
    subtitle: "Streamlining Sales Operations at Scale",
    duration: "6 months",
    team: "5 designers, 8 developers, 2 PMs",
    role: "Senior UX/UI Designer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1678166010410-2c1c769712ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlc2ZvcmNlJTIwY3JtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzQyMTgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "Enterprise sales teams struggled with fragmented data across multiple systems, leading to inefficient lead management, poor customer insights, and missed opportunities. Sales reps spent 40% of their time on administrative tasks instead of selling.",
    solution: "We created a unified CRM platform with intelligent lead scoring, automated workflows, and comprehensive analytics dashboards that provide actionable insights to drive sales performance and streamline operations.",
    research: [
      { title: "Sales Teams", value: "15", description: "Across different industries" },
      { title: "Workflow Analysis", value: "50+", description: "Sales processes mapped" },
      { title: "Stakeholder Interviews", value: "30+", description: "Managers and reps" }
    ],
    features: [
      { title: "Intelligent Lead Scoring", description: "AI-powered lead qualification and prioritization system" },
      { title: "Automated Workflows", description: "Custom automation for follow-ups, task assignments, and notifications" },
      { title: "360° Customer View", description: "Unified customer profiles with interaction history and insights" },
      { title: "Advanced Analytics", description: "Sales performance dashboards with predictive forecasting" }
    ],
    results: [
      { metric: "Sales Efficiency", value: "+45%", description: "Reduction in admin time" },
      { metric: "Lead Conversion", value: "+35%", description: "Qualified lead conversion rate" },
      { metric: "Revenue Impact", value: "$50M+", description: "Additional pipeline generated" }
    ]
  },
  "project-management": {
    title: "Project Management Suite",
    subtitle: "Empowering Agile Teams for Success",
    duration: "5 months",
    team: "6 designers, 10 developers, 3 PMs",
    role: "Lead UX Designer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHNvZnR3YXJlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzQyMTgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "Development teams were using multiple disconnected tools for project planning, task tracking, and collaboration, leading to poor visibility, miscommunication, and project delays. Team productivity was hampered by context switching and information silos.",
    solution: "We designed an integrated project management platform that combines kanban boards, sprint planning, time tracking, and team collaboration tools in a unified experience that scales from small teams to enterprise organizations.",
    research: [
      { title: "Development Teams", value: "20", description: "Across various company sizes" },
      { title: "Tool Audit", value: "25+", description: "Existing project tools" },
      { title: "Workflow Sessions", value: "40+", description: "Sprint planning observations" }
    ],
    features: [
      { title: "Agile Boards", description: "Customizable kanban and scrum boards with real-time updates" },
      { title: "Sprint Planning", description: "Comprehensive sprint planning with velocity tracking and burndown charts" },
      { title: "Team Collaboration", description: "Integrated chat, file sharing, and comment system" },
      { title: "Advanced Reporting", description: "Project insights with team performance analytics" }
    ],
    results: [
      { metric: "Team Velocity", value: "+30%", description: "Average sprint velocity increase" },
      { metric: "Project Delivery", value: "+25%", description: "On-time delivery improvement" },
      { metric: "User Adoption", value: "95%", description: "Team adoption rate" }
    ]
  },
  "team-collaboration": {
    title: "Team Collaboration Hub",
    subtitle: "Unifying Remote Work Communication",
    duration: "4 months",
    team: "4 designers, 7 developers, 2 PMs",
    role: "UX/UI Designer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHBsYXRmb3JtfGVufDF8fHx8MTc1NzQyMTgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "Remote teams were struggling with communication fragmentation across multiple platforms, leading to information silos, meeting fatigue, and decreased productivity. Teams needed a unified solution that could replace 5-6 different tools.",
    solution: "We created an all-in-one collaboration platform that seamlessly integrates chat, video conferencing, file sharing, and project coordination in a single, intuitive interface designed for remote-first organizations.",
    research: [
      { title: "Remote Teams", value: "18", description: "Distributed organizations" },
      { title: "Communication Audit", value: "35+", description: "Current tool usage" },
      { title: "User Journeys", value: "60+", description: "Daily workflow mapping" }
    ],
    features: [
      { title: "Unified Messaging", description: "Persistent chat with channels, threads, and smart notifications" },
      { title: "Video Conferencing", description: "HD video calls with screen sharing and recording capabilities" },
      { title: "Smart File Sharing", description: "Version-controlled documents with real-time collaboration" },
      { title: "Integration Hub", description: "Native integrations with 100+ productivity tools" }
    ],
    results: [
      { metric: "Tool Consolidation", value: "-60%", description: "Reduction in tools used" },
      { metric: "Meeting Efficiency", value: "+40%", description: "Meeting time optimization" },
      { metric: "Team Satisfaction", value: "4.8/5", description: "Employee satisfaction score" }
    ]
  },
  "analytics-dashboard": {
    title: "Business Analytics Dashboard",
    subtitle: "Transforming Data into Actionable Insights",
    duration: "7 months",
    team: "3 designers, 12 developers, 2 data scientists",
    role: "Senior Data Designer",
    year: "2023",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTczMjQ1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "Business leaders were overwhelmed by data from multiple sources without clear insights or actionable intelligence. Existing analytics tools were either too complex for non-technical users or too simple for comprehensive analysis.",
    solution: "We designed an intelligent analytics platform that automatically surfaces key insights, provides predictive analytics, and allows for both high-level executive dashboards and detailed drill-down analysis for different user roles.",
    research: [
      { title: "Business Leaders", value: "25", description: "C-level to managers" },
      { title: "Data Sources", value: "50+", description: "Systems integrated" },
      { title: "Use Cases", value: "100+", description: "Analytics scenarios" }
    ],
    features: [
      { title: "Smart Insights", description: "AI-powered automatic insight generation and anomaly detection" },
      { title: "Custom Dashboards", description: "Drag-and-drop dashboard builder with real-time data visualization" },
      { title: "Predictive Analytics", description: "Machine learning models for forecasting and trend analysis" },
      { title: "Collaborative Reporting", description: "Shared reports with commenting and annotation features" }
    ],
    results: [
      { metric: "Decision Speed", value: "+50%", description: "Faster business decisions" },
      { metric: "Data Accuracy", value: "98%", description: "Improved data reliability" },
      { metric: "User Adoption", value: "85%", description: "Cross-department adoption" }
    ]
  },
  "voyager-communication": {
    title: "Voyager Communication Module",
    subtitle: "Revolutionizing Client Communication for Mars Group",
    duration: "4 months",
    team: "3 designers, 5 developers, 1 PM",
    role: "Senior UX Designer",
    year: "2023",
    client: "Mars Group",
    image: voyagerImage,
    challenge: "Mars Group needed a unified communication platform to manage client interactions across multiple channels. Existing solutions were fragmented, leading to communication gaps, missed opportunities, and poor client experience. The team needed video calling, MMS messaging, and sophisticated opt-in/opt-out texting capabilities.",
    solution: "We designed Voyager, a comprehensive communication module that seamlessly integrates video calling, MMS messaging, and intelligent texting workflows. The platform provides real-time communication tools with advanced notification management and client preference controls.",
    research: [
      { title: "Client Interviews", value: "35+", description: "Mars Group clients and staff" },
      { title: "Communication Audit", value: "150+", description: "Existing touchpoints analyzed" },
      { title: "User Journey Maps", value: "12", description: "Different communication scenarios" }
    ],
    features: [
      { title: "HD Video Calling", description: "Crystal-clear video conferences with screen sharing and recording capabilities" },
      { title: "MMS Messaging", description: "Rich media messaging with file attachments, images, and document sharing" },
      { title: "Smart Opt-in/Opt-out", description: "Intelligent texting system with automated preference management and compliance" },
      { title: "Unified Thread Management", description: "Consolidated view of all client communications across channels" }
    ],
    results: [
      { metric: "Video Calls", value: "100K+", description: "Monthly video conferences" },
      { metric: "Message Engagement", value: "+75%", description: "Increase in client responses" },
      { metric: "Communication Efficiency", value: "+60%", description: "Reduction in response time" }
    ],
    screenshots: [
      { 
        image: voyagerImage, 
        title: "Video Calling Interface", 
        description: "HD video calling with screen sharing and recording capabilities" 
      },
      { 
        image: siemensImage, 
        title: "Communication Dashboard", 
        description: "Advanced messaging and collaboration tools for Mars mission teams" 
      }
    ]
  },
  "siemens-diagnosis-ui": {
    title: "Siemens Diagnosis Device UI",
    subtitle: "Precision Medical Interface for Blood Testing",
    duration: "6 months",
    team: "2 designers, 4 developers, 2 medical consultants",
    role: "Medical UX Designer",
    year: "2023",
    client: "Siemens",
    image: siemensImage,
    challenge: "Medical professionals needed an intuitive interface for Siemens blood testing devices that could handle complex diagnostic procedures while maintaining accuracy and speed. The existing interface was complex and required extensive training, leading to user errors and slower test processing.",
    solution: "We created a streamlined touch interface optimized for medical environments. The design prioritizes critical information, uses clear visual hierarchies, and provides step-by-step guidance for blood sample testing procedures with real-time result visualization.",
    research: [
      { title: "Medical Professionals", value: "25+", description: "Doctors, nurses, lab technicians" },
      { title: "Device Testing", value: "100+", description: "Hours of usability testing" },
      { title: "Clinical Workflows", value: "15", description: "Different testing procedures" }
    ],
    features: [
      { title: "Intuitive Touch Controls", description: "Large, accessible touch targets optimized for gloved hands and clinical settings" },
      { title: "Real-time Results Display", description: "Clear visualization of test results with color-coded indicators and alerts" },
      { title: "Patient Data Management", description: "Secure patient information handling with quick access and data privacy controls" },
      { title: "Quality Control Monitoring", description: "Automated quality checks with visual feedback and error prevention" }
    ],
    results: [
      { metric: "Test Accuracy", value: "99.2%", description: "Diagnostic precision improvement" },
      { metric: "Processing Speed", value: "+40%", description: "Faster test completion" },
      { metric: "User Satisfaction", value: "4.8/5", description: "Medical staff approval rating" }
    ]
  },
  "bgca-membership": {
    title: "BGCA Club Membership",
    subtitle: "Streamlining Youth Program Registration",
    duration: "3 months",
    team: "2 designers, 3 developers, 1 BGCA coordinator",
    role: "UX Designer",
    year: "2023",
    client: "BGCA",
    image: bgcaRegistrationImage,
    challenge: "Boys & Girls Clubs of America needed to digitize their membership registration process. The paper-based system was time-consuming, prone to errors, and created barriers for families. Staff spent excessive time on administrative tasks instead of serving youth.",
    solution: "We designed a user-friendly digital registration workflow that guides families through membership enrollment, document verification, and consent management. The system automates administrative tasks while ensuring compliance with youth protection standards.",
    research: [
      { title: "BGCA Staff", value: "15", description: "Club administrators and coordinators" },
      { title: "Parent Interviews", value: "40+", description: "Families using registration system" },
      { title: "Registration Flows", value: "8", description: "Different membership types analyzed" }
    ],
    features: [
      { title: "Multi-step Registration", description: "Guided workflow with progress indicators and save-and-continue functionality" },
      { title: "Document Upload", description: "Secure file upload system for required documents and forms" },
      { title: "Parent Consent Management", description: "Digital consent forms with electronic signatures and legal compliance" },
      { title: "Staff Dashboard", description: "Administrative interface for reviewing and approving membership applications" }
    ],
    results: [
      { metric: "Registrations", value: "15K+", description: "Annual membership enrollments" },
      { metric: "Completion Rate", value: "85%", description: "Registration form completion" },
      { metric: "Processing Time", value: "-50%", description: "Reduction in administrative time" }
    ],
    screenshots: [
      { 
        image: "https://images.unsplash.com/photo-1649508083072-4010347b47f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBzY3JlZW5zaG90fGVufDF8fHx8MTc1NzY4MjExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Registration Profile Form", 
        description: "Multi-step registration workflow with user-friendly form fields and progress indicators" 
      },
      { 
        image: bgcaRegistrationImage, 
        title: "Document Upload Interface", 
        description: "Secure document management system for membership forms and required documents" 
      }
    ]
  },
  "bgca-safety-assessment": {
    title: "BGCA Safety Assessment",
    subtitle: "Comprehensive Youth Protection Program",
    duration: "5 months",
    team: "3 designers, 4 developers, 2 safety consultants",
    role: "UX Designer",
    year: "2023",
    client: "BGCA",
    image: bgcaSafetyImage,
    challenge: "BGCA required a comprehensive digital system for safety assessments and incident reporting across their nationwide network of clubs. The existing paper-based processes were inconsistent, difficult to track, and didn't provide adequate oversight for youth protection.",
    solution: "We created a robust safety assessment platform that standardizes safety protocols, enables real-time incident reporting, and provides comprehensive compliance tracking. The system ensures consistent safety standards across all BGCA locations.",
    research: [
      { title: "Club Locations", value: "50+", description: "BGCA facilities assessed" },
      { title: "Safety Protocols", value: "25", description: "Different assessment categories" },
      { title: "Compliance Requirements", value: "100+", description: "Safety standards and regulations" }
    ],
    features: [
      { title: "Digital Safety Checklists", description: "Comprehensive assessment forms with photo documentation and scoring" },
      { title: "Incident Reporting System", description: "Real-time incident reporting with automatic escalation and notifications" },
      { title: "Compliance Dashboard", description: "Executive overview of safety metrics and compliance status across all clubs" },
      { title: "Training Module Integration", description: "Safety training assignment and tracking for staff certification" }
    ],
    results: [
      { metric: "Safety Assessments", value: "5K+", description: "Annual facility assessments" },
      { metric: "Compliance Rate", value: "98%", description: "Safety standard adherence" },
      { metric: "Incident Reduction", value: "-30%", description: "Decrease in safety incidents" }
    ],
    screenshots: [
      { 
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1NzY4MjEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
        title: "Safety Assessment Dashboard", 
        description: "Comprehensive safety assessment interface with organization tracking and scoring" 
      },
      { 
        image: bgcaSafetyImage, 
        title: "Incident Reporting Interface", 
        description: "Real-time incident reporting system with photo documentation and automatic escalation" 
      }
    ]
  },
  "smart-travel-planner": {
    title: "Hoo Hoo",
    subtitle: "AI-Powered Travel Discovery & Planning Platform",
    duration: "6 months",
    team: "4 designers, 8 developers, 2 data scientists",
    role: "Lead UX/UI Designer",
    year: "2024",
    image: hooHooMainImage,
    challenge: "Travelers often struggle with information overload when planning trips, spending hours researching destinations, weather conditions, costs, and logistics. Traditional travel apps lack intelligent recommendations and don't provide comprehensive trip planning in one unified platform.",
    solution: "We designed an intelligent travel planning app that combines weather-based destination suggestions, AI-powered recommendations, and comprehensive trip details. The platform analyzes user preferences, real-time weather data, and travel patterns to suggest perfect destinations with detailed cost and logistics information.",
    research: [
      { title: "Travelers Interviewed", value: "50+", description: "Frequent and occasional travelers" },
      { title: "Travel Patterns", value: "200+", description: "Journey types analyzed" },
      { title: "Destination Data", value: "500+", description: "Global destinations mapped" }
    ],
    features: [
      { title: "Weather-Based Suggestions", description: "Smart destination recommendations based on current weather patterns and seasonal trends" },
      { title: "AI Travel Assistant", description: "Interactive AI that asks personalized questions to suggest perfect destinations" },
      { title: "Comprehensive Trip Details", description: "Distance, weather, travel time, and costs based on transportation mode" },
      { title: "Local & International Options", description: "Curated suggestions for both domestic and international travel experiences" }
    ],
    results: [
      { metric: "Destination Accuracy", value: "95%", description: "User satisfaction with suggestions" },
      { metric: "Active Users", value: "5K+", description: "Monthly active travelers" },
      { metric: "Trip Planning Time", value: "-70%", description: "Reduction in planning effort" }
    ],
    screenshots: [
      { 
        image: hooHooMainImage, 
        title: "Hoo Hoo Main Dashboard", 
        description: "Main dashboard featuring weather-perfect destinations, AI travel partner, and interest-based picks with local and international options" 
      },
      { 
        image: hooHooDestinationImage, 
        title: "Destination Details View", 
        description: "Comprehensive destination information showing weather conditions, transportation options, travel time, and cost estimates" 
      },
      { 
        image: hooHooAIImage, 
        title: "AI Travel Partner Questionnaire", 
        description: "Interactive AI assistant that gathers travel preferences through personalized questions to suggest perfect destinations" 
      }
    ]
  }
};

export function DynamicCaseStudy({ projectId, onBack }: DynamicCaseStudyProps) {
  const [activeSection, setActiveSection] = useState('overview');
  
  const project = caseStudyData[projectId as keyof typeof caseStudyData];
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-white mb-4">Project not found</h1>
          <Button onClick={onBack} variant="outline" className="bg-white/10 text-white border-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
    { id: 'research', label: 'Research', icon: <TestTube className="w-4 h-4" /> },
    { id: 'design', label: 'Design Process', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'solution', label: 'Solution', icon: getProjectIcon(projectId) },
    ...(project.screenshots && project.screenshots.length > 0 ? [{ id: 'screenshots', label: 'Screenshots', icon: <Monitor className="w-4 h-4" /> }] : []),
    { id: 'results', label: 'Results', icon: <Target className="w-4 h-4" /> }
  ];

  function getProjectIcon(id: string) {
    const icons = {
      "agentic-ai-platform": <Brain className="w-4 h-4" />,
      "ai-chat-assistant": <MessageSquare className="w-4 h-4" />,
      "ai-workflow-automation": <Zap className="w-4 h-4" />,
      "smart-learning-app": <Smartphone className="w-4 h-4" />,
      "smart-travel-planner": <MapPin className="w-4 h-4" />,
      "voyager-communication": <MessageSquare className="w-4 h-4" />,
      "siemens-diagnosis-ui": <Monitor className="w-4 h-4" />,
      "bgca-membership": <Users className="w-4 h-4" />,
      "bgca-safety-assessment": <Target className="w-4 h-4" />,
      "enterprise-crm": <Database className="w-4 h-4" />,
      "project-management": <Monitor className="w-4 h-4" />,
      "team-collaboration": <MessageSquare className="w-4 h-4" />,
      "analytics-dashboard": <BarChart className="w-4 h-4" />
    };
    return icons[id as keyof typeof icons] || <Monitor className="w-4 h-4" />;
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      {/* Header */}
      <motion.header 
        className="fixed top-4 left-4 right-4 z-50 backdrop-blur-xl bg-black/10 border border-white/10 rounded-2xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </motion.button>
            
            <nav className="hidden md:flex items-center gap-1">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    {section.icon}
                    <span>{section.label}</span>
                  </div>
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-6">
              <Badge 
                variant="secondary" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 mb-4"
              >
                Case Study
              </Badge>
              <h1 className="text-5xl lg:text-7xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/70 mb-8">{project.subtitle}</p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { icon: <Calendar className="w-5 h-5" />, label: "Duration", value: project.duration },
                { icon: <User className="w-5 h-5" />, label: "Role", value: project.role },
                { icon: <Users className="w-5 h-5" />, label: "Team", value: project.team }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <div className="text-blue-400">{item.icon}</div>
                  </div>
                  <p className="text-sm text-white/60">{item.label}</p>
                  <p className="text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Case Study Image */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
              <img
                src={project.image}
                alt={`${project.title} Case Study`}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation - Mobile Hidden */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-white mb-4">Navigation</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                          activeSection === section.id
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        {section.icon}
                        <span>{section.label}</span>
                      </motion.button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Overview Section */}
            <motion.section 
              id="overview"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Project Overview</h2>
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl text-white mb-4">The Challenge</h3>
                      <p className="text-white/70 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-4">The Solution</h3>
                      <p className="text-white/70 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Research Section */}
            <motion.section 
              id="research"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Research & Discovery</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.research.map((stat, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl text-blue-400 mb-2">{stat.value}</div>
                      <h4 className="text-white mb-2">{stat.title}</h4>
                      <p className="text-sm text-white/60">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Design Process Section */}
            <motion.section 
              id="design"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Design Process</h2>
              <div className="space-y-6">
                {[
                  { phase: "1. Empathize", description: "Conducted user interviews and created detailed personas based on user needs and goals." },
                  { phase: "2. Define", description: "Synthesized research findings to define core problems and establish design principles." },
                  { phase: "3. Ideate", description: "Generated multiple solution concepts through brainstorming sessions and design workshops." },
                  { phase: "4. Prototype", description: "Created low and high-fidelity prototypes to test key interactions and user flows." },
                  { phase: "5. Test", description: "Conducted usability testing with target users to validate design decisions." }
                ].map((step, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-white mb-2">{step.phase}</h4>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Solution Section */}
            <motion.section 
              id="solution"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Final Solution</h2>
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-xl text-white">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                          <div>
                            <h4 className="text-white mb-1">{feature.title}</h4>
                            <p className="text-sm text-white/70">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Screenshots Section */}
            {project.screenshots && project.screenshots.length > 0 && (
              <motion.section 
                id="screenshots"
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl text-white">Project Screenshots</h2>
                <div className="grid gap-8">
                  {project.screenshots.map((screenshot, index) => (
                    <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-video relative">
                          <ImageWithFallback
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-xl text-white mb-2">{screenshot.title}</h3>
                            <p className="text-white/70">{screenshot.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Results Section */}
            <motion.section 
              id="results"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-8">
                    <h3 className="text-xl text-white mb-6">Metrics</h3>
                    <div className="space-y-4">
                      {project.results.map((result, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <p className="text-white">{result.metric}</p>
                            <p className="text-xs text-white/60">{result.description}</p>
                          </div>
                          <div className="text-2xl text-blue-400 font-bold">{result.value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-8">
                    <h3 className="text-xl text-white mb-6">Key Learnings</h3>
                    <div className="space-y-4 text-white/70">
                      <p>• User-centered design approach significantly improves product adoption</p>
                      <p>• Early stakeholder engagement prevents costly design revisions</p>
                      <p>• Iterative testing validates assumptions and reduces development risk</p>
                      <p>• Accessibility considerations enhance usability for all users</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div 
              className="text-center pt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-white mb-6">Interested in this project?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 rounded-xl px-8"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={onBack}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl px-8"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}