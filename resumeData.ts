
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
      items: ["RESTful APIs", "Web Services", "JavaScript", "HTML5", "CSS", "jQuery", "Bootstrap"]
    },
    {
      category: "Databases",
      items: ["SQL Server 2005/2019", "T-SQL", "Database Design", "Stored Procedures", "Triggers", "Query Optimization", "MongoDB"]
    },
    {
      category: "Mobile & Tools",
      items: ["Xamarin (iOS & Android)", "MVVM", "Visual Studio 2022", "Git", "Continua CI", "Source Gear Vault", "FinalBuilder"]
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
        "Designed, developed, and maintained enterprise-level document management applications using C#, .NET Core, Blazor, ASP.NET, JavaScript, jQuery, ADO.NET and SQL Server.",
        "Develop and maintain backend APIs and services using C#, .NET Core, and SQL Server.",
        "Enhance Windows applications and integrate with RESTful web services for enterprise clients.",
        "Build and support mobile document management apps for Android and iOS using Xamarin.",
        "Optimize SQL Server queries and stored procedures, improving performance by up to 40%.",
        "Modernizing legacy ASP.NET Web application into Blazor web architectures with RESTful APIs.",
        "Collaborate with cross-functional teams to deliver stable and scalable solutions for municipal and financial clients.",
        "Experienced with Source Gear Vault, FinalBuilder, and Continua CI as CI pipelines.",
        "Leveraged AI coding assistants like GitHub Copilot to streamline development workflows, accelerate feature implementation, and ensure best practices in code generation."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Shenzhen Institutes of Advanced Technology",
      companyUrl: "https://english.siat.cas.cn/",
      location: "Shenzhen, China",
      period: "Mar 2010 – Jun 2013",
      highlights: [
        "Directed development of a parallel-processing e-commerce visual search platform with high throughput and fault-tolerant design.",
        "Designed and optimized SQL Server database structures, replication, jobs, and stored procedures for large-scale transaction processing.",
        "Programmed backend services in C# with ASP.NET, ADO.NET and LINQ.",
        "Led a 10-member development team: assigning tasks, mentoring, code reviews, and ensuring project milestones were met.",
        "Delivered applications integrating mobile, web platforms with complex, interdependent architectures."
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
        "Gathered and analyzed business requirements, designed and delivered high-performance software applications in a startup environment.",
        "Oversaw system design, database architecture, coding, SSRS report development, production support, and project documentation.",
        "Mentored team members and contributed to code reviews and quality assurance.",
        "Delivered 3 core systems: machine-learning-based image/video moderation, content classification, and contextual video advertising."
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
