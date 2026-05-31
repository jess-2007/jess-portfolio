import SkillBadge from "@/components/ui/SkillBadge";

const skills = [
  "Java",
  "Spring Boot",
  "MySQL",
  "HTML",
  "CSS",
  "Python",
  "Machine Learning"
];

const tools = [
  "Git & GitHub",
  "VS Code",
  "Jupyter Notebook",
  "Google Colab",
  "Postman",
  "Docker",
  "Kaggle",
  "Linux",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Who I Am
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-500" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">My Story</h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
              I'm a passionate AIML student who loves exploring technology and building meaningful projects. 
              From working with machine learning models to developing applications, I enjoy learning new things
               and turning ideas into real-world solutions😊 .
              </p>
              <p>
              Currently working on AI and machine learning projects, experimenting with new tools, and improving my 
              development skills. Always curious, always learning, and always looking for opportunities to build 
              something useful!!
              </p>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Technical Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Tools &amp; Platforms
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
