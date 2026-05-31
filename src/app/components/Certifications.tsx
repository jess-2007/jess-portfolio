interface Certification {
  id: string;
  title: string;
  organization: string;
  dateEarned: string;
  certificateUrl: string;
}

const certifications: Certification[] = [
  {
    id: "1",
    title: "Python Essentials",
    organization: "Cisco Networking Academy",
    dateEarned: "October 2024",
    certificateUrl: "https://www.credly.com/badges/3177df00-fed0-4dd9-89bd-de0b51c5fbed",
  },
  {
    id: "2",
    title: "Networking Basics",
    organization: "Cisco Networking Academy",
    dateEarned: "December 2024",
    certificateUrl: "https://www.credly.com/badges/8a0be215-af89-4e04-8a1f-8dc6c538b4f4",
  },
  {
    id: "5",
  title: "Intro to Machine Learning",
  organization: "Kaggle",
  dateEarned: "January 2025",
  certificateUrl: "https://www.kaggle.com/learn/certification/johnjessicajebaj/intro-to-machine-learning",
},
  {
    id: "3",
    title: "Security and Connectivity Support",
    organization: "Cisco Networking Academy",
    dateEarned: "December 2025",
    certificateUrl: "https://www.credly.com/badges/f192989e-5432-4709-80b3-046314c28dd9",
  },
  {
    id: "4",
    title: "Introduction to Modern AI",
    organization: "Cisco Networking Academy",
    dateEarned: "December 2025",
    certificateUrl: "https://www.credly.com/badges/bec486f3-70ad-45c6-96ac-dd9c405bb450",
  },
    
  {
    id: "6",
    title: "Privacy and Security in Online Social Media",
    organization: "NPTEL (IIT Madras)",
    dateEarned: "December 2025 ",
    certificateUrl: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc25-cs117",
  },
  {
    id: "7",
    title: "Industry 4.0 and Internet of Things",
    organization: "NPTEL (IIT Madras)",
    dateEarned: "April 2026",
    certificateUrl: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc26-cs38",

  },
  {
    id: "8",
    title: "Human Computer Interaction",
    organization: "NPTEL (IIT Madras)",
    dateEarned: "April 2026",
    certificateUrl: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc26-cs70",
  },
  {
    id: "9",
    title: "Apply AI: Analyze Customer Reviews",
    organization: "Cisco Networking Academy",
    dateEarned: "May 2026",
    certificateUrl: "https://www.credly.com/badges/b1de0fba-c53a-4c4d-984b-a972a85f84fb",
  },
  
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Certifications
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-500" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Professional certifications and courses that validate my skills and
            commitment to continuous learning.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
                <svg
                  className="h-6 w-6 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-600">
                {cert.title}
              </h3>

              <dl className="mt-4 flex flex-1 flex-col gap-3 text-sm">
                <div>
                  <dt className="font-medium text-slate-500">
                    Issuing Organization
                  </dt>
                  <dd className="mt-0.5 text-slate-700">{cert.organization}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Date Earned</dt>
                  <dd className="mt-0.5 text-slate-700">{cert.dateEarned}</dd>
                </div>
              </dl>

              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-500"
              >
                View Certificate
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
