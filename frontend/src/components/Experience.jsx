export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Resident",
      company: "Headstarter",
      location: "Remote",
      period: "May 2025 - September 2025",
      description: "Completed intensive residency focused on AI, machine learning, automation, and full-stack development with real-world impact.",
      highlights: [
        "Worked on 10 impact-driven projects delivering working solutions under tight deadlines",
        "Researched unfamiliar technical domains independently and iteratively prototyped solutions",
        "Collaborated with cross-functional peers to design, build, and present functional prototypes",
        "Employed AI code generation in development, testing, debugging and documentation"
      ]
    }
  ];

  const education = {
    school: "Grambling State University",
    location: "Grambling, LA",
    degree: "Bachelor of Science, Computer Science",
    gpa: "3.96",
    expected: "December 2027",
    coursework: ["Data Structures & Algorithms", "Discrete Structures", "Calculus", "Linear Algebra", "Probability", "OOP"],
    certification: "Codepath Introduction to Android Development (Aug. 2025)"
  };

  const skills = {
    languages: ["Python", "JavaScript", "C++", "TypeScript", "Kotlin"],
    frontend: ["React", "Next.js", "Tailwind CSS"],
    backend: ["FastAPI", "Flask", "Node.js", "PostgreSQL", "MongoDB"],
    ml: ["Scikit-learn", "NumPy", "Pandas", "Keras", "OpenCV"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebooks", "Linux"]
  };

  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Experience</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Education</span>
            </h2>
          </div>

          <div className="education-card max-w-2xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-xl font-bold text-white">{education.school}</h3>
              <span className="text-cyan-400 text-sm font-medium">{education.location}</span>
            </div>
            <p className="text-slate-300 mb-2">{education.degree}</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
              <span>GPA: <span className="text-cyan-400 font-semibold">{education.gpa}</span></span>
              <span>Expected: {education.expected}</span>
            </div>
            <div className="mb-4">
              <p className="text-slate-500 text-sm mb-2">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full">{course}</span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                <span className="text-purple-400">📜</span> {education.certification}
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-500">Skills</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory title="Languages" skills={skills.languages} />
            <SkillCategory title="Frontend" skills={skills.frontend} />
            <SkillCategory title="Backend & Databases" skills={skills.backend} />
            <SkillCategory title="Machine Learning" skills={skills.ml} />
            <SkillCategory title="Developer Tools" skills={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-card">
      <h3 className="text-lg font-semibold text-white mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ experience, index }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-slate-900 z-10"></div>
      
      {/* Content Card */}
      <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="experience-card">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-cyan-400 text-sm font-medium">{experience.period}</span>
            <span className="text-slate-500 text-sm">{experience.company}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3">{experience.title}</h3>
          <p className="text-slate-400 text-sm mb-4">{experience.description}</p>
          
          <ul className="space-y-2">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <span className="text-purple-400 mt-1">▹</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
