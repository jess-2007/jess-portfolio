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
    certificateUrl: "#",
  },
  {
    id: "7",
    title: "Industry 4.0 and Internet of Things",
    organization: "NPTEL (IIT Madras)",
    dateEarned: "April 2026",
    certificateUrl: "https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs38/NOC26CS38S118581406704570845.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcs-cert-signer%40nptel-exam.iam.gserviceaccount.com%2F20260531%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260531T140316Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=996bdad74d19327e8b2b8684cf741aad1ed4d3e72aabc01a07fab842eeca65e13907f9280c65623415a8bded20871c76435f48c85f100020d653ae0e98002f86c078f8891e9ae91bc346faca82eb565a4eaa08c451c3dcf507fc90650e36cc608480b7336b0d648ee87579df3bd71505364e99cd006295d9c5d4e9c0a29dca49cae45d26860d92c9edf5fbb8d91679fe71e5e0d7ffb5792ffcaecdb52f29280cb934f12fde9c3120d5b559a8ebc3dd3b837d6279b22ce0738f2e7e3855074a9756fcba896053645c8d0fd150cf0192c79f6e6b42f395ff6ceae6bfdca6adb199588c0c429b1ed29b59214d2bd0d7903f123aac667a2043077f6e180221b23a76",
  },
  {
    id: "8",
    title: "Human Computer Interaction",
    organization: "NPTEL (IIT Madras)",
    dateEarned: "April 2026",
    certificateUrl: "https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs70/NOC26CS70S75030663504570845.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcs-cert-signer%40nptel-exam.iam.gserviceaccount.com%2F20260531%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260531T140453Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=d29e5e23133e8b87488f70415bf49ed7cf67601aa8e05e94f713e85ed3f4124da482946d63d6affa948b29f81e815f163e300bfe71fa4a16a4d5f8be600966a8e16da4de0be1eb4641b75d7f5bb98852df99953f2f21216857db8d2a7728c05b1a0cc30136f02405552fcf014910524248e33458f21deb2f729c615b87129cfb76b473f50a4fb5074c325a522b5df85a3af66a76f57dd51b5b4e6acd30bc55b4153fd1d185ede0789c5a2906f252a0382856918d72790a15693545df4b4792b6231053ef4f2053db75c64aa2884bf85e6e4b4af0e6f9db2ed9007b4415cb8846ff89f94392c772d3fa0fd4d2eea5044cd50ef40d19b0ad56150887b3394498a5",
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
