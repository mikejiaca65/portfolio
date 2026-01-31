
import { Resume } from './types';

export const resumeData: Resume = {
  name: "Mike Jia",
  title: "Senior Software Engineer & .NET Specialist",
  location: "Toronto, ON",
  phone: "(647) 967-8456",
  email: "mikejiaca@yahoo.ca",
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["C#", ".NET Core / .NET 6+", "ASP.NET", "Blazor", "WinForms", "WCF", "Web API", "ADO.NET", "LINQ"]
    },
    {
      category: "Web & API Development",
      items: ["RESTful APIs", "Web Services", "JavaScript", "HTML5", "CSS", "jQuery", "Bootstrap", "Blazor"]
    },
    {
      category: "Databases",
      items: ["SQL Server 2005/2019", "T-SQL", "Database Design", "Stored Procedures", "Triggers", "Query Optimization", "MongoDB"]
    },
    {
      category: "Mobile & Tools",
      items: ["Xamarin (iOS & Android)", "MVVM", "Visual Studio 2022", "Git", "Continua CI", "Vault", "FinalBuilder"]
    }
  ],
  experience: [
    {
      role: "Senior Programmer",
      company: "Loris Technologies Inc",
      companyUrl: "http://www.loristech.com",
      location: "Toronto, ON",
      period: "Oct 2013 – Nov 2025",
      highlights: [
        "Designed and maintained enterprise-level document management applications using C#, .NET Core, Blazor, and SQL Server.",
        "Developed and optimized backend APIs and services using modern C# paradigms.",
        "Improved SQL Server performance by up to 40% through query optimization and stored procedure redesign.",
        "Leveraged AI coding assistants like GitHub Copilot to streamline development workflows, accelerate feature implementation, and ensure best practices in code generation.",
        "Mentored junior developers and enforced clean code practices across the engineering team.",
        "Integrated mobile document management solutions for Android and iOS using Xamarin."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Shenzhen Institutes of Advanced Technology",
      companyUrl: "https://english.siat.cas.cn/",
      location: "Shenzhen, China",
      period: "Mar 2010 – Jun 2013",
      highlights: [
        "Directed development of a parallel-processing e-commerce visual search platform with high throughput.",
        "Led a 10-member development team through the full SDLC including code reviews and task assignments.",
        "Designed optimized SQL Server database structures for large-scale transaction processing."
      ]
    },
    {
      role: "Senior Software Consultant",
      company: "1000Eyes Inc.",
      location: "Dallas, TX",
      period: "May 2009 – Mar 2010",
      highlights: [
        "Designed large-scale e-commerce and search applications using multi-tier architecture.",
        "Integrated Amazon APIs for high-performance product ingestion systems.",
        "Filed two U.S. patent applications in e-commerce visual search and video advertising."
      ]
    },
    {
      role: "Senior Software Consultant",
      company: "Soarspace Inc.",
      location: "San Diego, CA",
      period: "Mar 2007 – Apr 2009",
      highlights: [
        "Delivered core systems for ML-based image/video moderation and content classification.",
        "Oversaw system design and database architecture in a fast-paced startup environment.",
        "Managed SSRS report development and production support documentation."
      ]
    },
    {
      role: "Project Manager / Staff Software Engineer",
      company: "Shenzhen Dincom Information Tech. Co., Ltd.",
      location: "Shenzhen, China",
      period: "Oct 2002 – Dec 2006",
      highlights: [
        "Defined company technology roadmap, analyzed customer requirements, and provided end-to-end technical solutions.",
        "Designed complex database architectures including optimized tables, stored procedures, and views.",
        "Programmed core modules for system administration, maintenance, and reporting.",
        "Trained and mentored new hires, prepared project proposals, and monitored progress to meet schedule and cost targets.",
        "Successfully delivered 4 major systems: SMS enterprise service, Unified Number (Follow Me) call forwarding, PHS enhanced services (10M+ subscribers), and Coloring ring-back tone system."
      ]
    }
  ],
  education: [
    {
      degree: "M.Sc., Physics",
      institution: "Sichuan University",
      institutionUrl: "https://en.scu.edu.cn/",
      location: "China",
      year: "1990",
      details: "Thesis: 3-D Photogrammetry"
    },
    {
      degree: "B.Sc., Physics",
      institution: "Sichuan University",
      institutionUrl: "https://en.scu.edu.cn/",
      location: "China",
      year: "1987"
    },
    {
      degree: "MCP / MCSE / MCDBA Certifications",
      institution: "Microsoft Professional Program",
      year: "2000"
    }
  ],
  awards: [
    {
      title: "“3-D measurement of turbine blade profile by light knife”, Chinese Journal of Lasers in Vol.19 No.4, Apr., 1992"
    },
    {
      title: "“A Method for the Generation of Light Knife and Its Application in 3-D sensing”, ICO-15, West Germany, 1990"
    },
    {
      title: "Science and Technology Award of Sichuan Province – 1989"
    }
  ]
};
