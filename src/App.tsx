import { CSSProperties, FormEvent, useEffect, useState } from 'react'

const experiences = [
  {
    role: 'Staff of Partnership',
    organization: 'HIMSI Innovative Talent Laboratory (HITLAB)',
    period: 'Period not listed',
    summary: 'Supporting partnership development and strengthening HITLAB’s external relations.',
    duties: [
      'Identified and researched potential partners to support collaboration opportunities and organizational initiatives.',
      'Conducted outreach to potential partners and maintained communication to explore partnership opportunities.',
      'Coordinated with internal teams to support partnership development and strengthen external relations.',
      'Assisted in developing partnership proposals and collaboration plans aligned with HITLAB’s objectives.',
    ],
  },
  {
    role: 'Staff of Public Relations',
    organization: 'Sharing Session 2026',
    period: 'Sep 2026 – Oct 2026',
    summary: 'Supporting event promotion, communication, and participant data management.',
    duties: [
      'Supported participant engagement and event promotion, contributing to a total of 120+ participants.',
      'Contributed to the promotion and communication of Sharing Session 2026 to increase student awareness and participation.',
      'Developed a digital registration form and managed registration data for 140+ participants.',
      'Assisted in disseminating event information and announcements to Information Systems students.',
    ],
  },
  {
    role: 'Staff of Public Relations',
    organization: 'HIMSI Anniversary (Milad) 2026',
    period: 'Sep 2026 – Oct 2026',
    summary: 'Managing event relationships and communication with HIMSI members, senior committee members, and alumni.',
    duties: [
      'Built and maintained relationships with 100+ HIMSI committee members, senior student committee members, and HIMSI alumni.',
      'Served as liaison officer for the Secretary of the Information Systems Study Program during the event.',
      'Supported communication and coordination with HIMSI members and alumni.',
      'Assisted in disseminating event information and announcements to encourage student participation.',
    ],
  },
  {
    role: 'Public Relations',
    organization: 'Information Systems Department Orientation (PBAK) 2026',
    period: 'Jul 2026 – Aug 2026',
    summary: 'Coordinating department orientation communications for 100+ new students.',
    duties: [
      'Coordinated communication and information delivery for 100+ new students.',
      'Assisted in disseminating event information, schedules, and announcements through multiple communication channels.',
      'Collaborated with six committee divisions to ensure smooth communication and coordination.',
      'Supported the successful execution of a four-day orientation program through effective communication.',
      'Responded to participant inquiries and provided information regarding key activities.',
    ],
  },
  {
    role: 'Second Secretary',
    organization: 'Moonzher Art Computer Harmonia (MACH)',
    period: 'Jan 2024 – Nov 2024',
    summary: 'Managing administration, membership data, and organizational documents.',
    duties: [
      'Managed and archived documents, official correspondence, and organization meeting minutes.',
      'Maintained the membership data system, including attendance and member achievements.',
      'Drafted activity schedules, event proposals, and supporting correspondence.',
    ],
  },
  {
    role: 'Journalism',
    organization: 'Moonzher Art Computer Harmonia (MACH)',
    period: 'Jan 2024 – Nov 2024',
    summary: 'Conducting research, interviews, writing, and publication coordination.',
    duties: [
      'Researched and analyzed issues to identify relevant coverage topics.',
      'Conducted interviews with students, teachers, and contributors to obtain valid data and perspectives.',
      'Drafted and edited articles and reports based on research and interviews.',
      'Coordinated with the design team to prepare visuals for publication.',
    ],
  },
]

const projects = [
  {
    category: 'Data Analyst · Excel · Dashboard',
    title: 'Ecommerce Sales Analysis Dashboard',
    cover: './assets/projects/ecommerce-sales-dashboard-cover.png',
    file: './assets/projects/ecommerce-sales-dashboard.pptx',
  },
  {
    category: 'Data Analysis · Google Looker Studio · Dashboard',
    title: 'Sales and Customer Analysis',
    cover: './assets/projects/sales-customer-analysis-cover.jpg',
    file: 'https://datastudio.google.com/reporting/b1fcce14-fec0-42b5-aa94-84423a1aff3f',
  },
  {
    category: 'Data Science / Machine Learning',
    title: 'Diabetes Risk Prediction Based on Urban Lifestyle Indicators',
    cover: './assets/projects/diabetes-risk-prediction-cover.jpg',
    file: './assets/projects/diabetes-risk-prediction.pptx',
  },
  {
    category: 'AI / Machine Learning',
    title: 'Credit Loss Prediction',
    cover: './assets/projects/credit-loss-prediction-cover.png',
    file: './assets/projects/credit-loss-prediction.pptx',
  },
]

const navItems = [
  ['About Me', 'about'],
  ['Project', 'projects'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Organization', 'organization'],
  ['Achievement', 'achievements'],
  ['Certifications', 'certifications'],
  ['Languages', 'languages'],
  ['Gallery', 'gallery'],
  ['Contact', 'contact'],
]

const technicalSkills = [
  { name: 'Microsoft Excel', icons: [['microsoftexcel', '217346']] },
  { name: 'Google Sheets', icons: [['googlesheets', '34A853']] },
  { name: 'Looker Studio', icons: [['looker', '4285F4']] },
  { name: 'Power BI', icons: [['powerbi', 'F2C811']] },
  { name: 'Tableau', icons: [['tableau', 'E97627']] },
  { name: 'SQL', icons: [['postgresql', '4169E1']] },
  { name: 'MySQL', icons: [['mysql', '4479A1']] },
  { name: 'Python', icons: [['python', '3776AB']] },
  { name: 'Pandas · NumPy · Matplotlib', icons: [['pandas', 'E70488'], ['numpy', '4D77CF'], ['python', '11557C']] },
  { name: 'Google Colab', icons: [['googlecolab', 'F9AB00']] },
  { name: 'Jupyter Notebook', icons: [['jupyter', 'F37626']] },
  { name: 'Git · GitHub', icons: [['git', 'F05032'], ['github', 'FFFFFF']] },
  { name: 'Microsoft Word', icons: [['microsoftword', '2B579A']] },
  { name: 'Microsoft PowerPoint', icons: [['microsoftpowerpoint', 'B7472A']] },
  { name: 'Canva', icons: [['canva', '00C4CC']] },
  { name: 'Figma', icons: [['figma', 'F24E1E']] },
]

const localSkillLogos: Record<string, string> = {
  microsoftexcel: './assets/skills/excel.jpg',
  powerbi: './assets/skills/power-bi.jpg',
  tableau: './assets/skills/tableau.jpg',
  microsoftword: './assets/skills/word.jpg',
  microsoftpowerpoint: './assets/skills/powerpoint.jpg',
}

const certificates = [
  {
    title: 'Getting Started with Python Programming',
    issuer: 'Dicoding Indonesia',
    date: 'August 18, 2026',
    detail: '60-hour Python programming course.',
    href: './assets/certificates/python.pdf',
  },
  {
    title: 'Data Visualization',
    issuer: 'MySkill',
    date: 'August 18, 2026',
    detail: 'E-learning Data Analysis dan praktik mandiri.',
    href: './assets/certificates/data-visualization.pdf',
  },
  {
    title: 'HITLAB Tech Class: Data Science',
    issuer: 'Information Systems UIN Jakarta',
    date: '2025',
    detail: 'Nilai akhir 81,82% dengan materi data science dan machine learning.',
    href: './assets/certificates/data-science-hitlab.pdf',
  },
  {
    title: 'AI/Machine Learning Certificate',
    issuer: 'GDGoC UIN Syarif Hidayatullah Jakarta',
    date: '2026',
    detail: 'Weekly Class AI/ML Beginner.',
    href: './assets/certificates/aiml-beginner.jpg',
  },
  {
    title: 'Cloud and Generative AI Fundamentals on AWS',
    issuer: 'Dicoding Indonesia',
    date: 'Date not listed',
    detail: 'Foundational cloud and Generative AI on AWS certification.',
    href: './assets/certificates/aws-cloud-genai.pdf',
  },
]

const gallery = [
  { src: './assets/gallery/pbak.jpeg', title: 'Information Systems Orientation 2026' },
  { src: './assets/gallery/sharing.jpg', title: 'Sharing Session 2026' },
  { src: './assets/gallery/gdg-graduation.jpg', title: 'GDGoC UIN Jakarta 2026' },
]

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<(typeof gallery)[number] | null>(null)
  const [openExperience, setOpenExperience] = useState<number | null>(null)
  const [activeNav, setActiveNav] = useState('home')

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightbox])

  useEffect(() => {
    const sectionIds = navItems.map(([, id]) => id)
    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      let current = 'home'
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= 150) current = id
      }
      setActiveNav(current)
    }

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const closeMenu = (_event?: FormEvent) => setMenuOpen(false)

  return (
    <div>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          RF<span>.</span>
        </a>
        <button
          className="menu-button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i />
          <i />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navigasi utama">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              className={activeNav === id ? 'active' : ''}
              href={`#${id}`}
              onClick={() => {
                setActiveNav(id)
                closeMenu()
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="kicker">PORTFOLIO · 2026</p>
            <h1>
              Rizky
              <br />
              <em>Fadilah</em>
            </h1>
            <p className="hero-intro">
              Information Systems student growing through data, technology, and organizational experience.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View portfolio <span>↗</span>
              </a>
              <a className="text-link" href="#contact">
                Contact me
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src="./assets/hero-formal.jpg" alt="Portrait of Rizky Fadilah" />
            </div>
            <span className="bubble bubble-one">Data Analyst</span>
            <span className="bubble bubble-two">Human Capital</span>
            <span className="bubble bubble-three">Data Management</span>
            <span className="portrait-index">01 / PROFILE</span>
          </div>
        </section>

        <section className="about section" id="about">
          <SectionTitle eyebrow="01">About Me</SectionTitle>
          <div className="about-grid">
            <div className="about-photo">
              <img src="./assets/rizky.jpeg" alt="Rizky Fadilah wearing a gray shirt" />
            </div>
            <div className="about-copy">
              <p className="lead">
                I am currently studying Information Systems with a strong interest in Data Analyst and Business Analyst roles.
              </p>
              <p>
                With an academic background combining technology, data, and business understanding, I am interested in applying data-driven approaches to identify problems, analyze patterns, and support effective decision-making.
              </p>
              <div className="contact-lines">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rizkyfaadilah15@gmail.com" target="_blank" rel="noreferrer">rizkyfaadilah15@gmail.com ↗</a>
                <span>+62 896-4780-5484</span>
                <a href="https://www.linkedin.com/in/rizkyfadilaah" target="_blank" rel="noreferrer">linkedin.com/in/rizkyfadilaah ↗</a>
              </div>
              <div className="fact-row">
                <div>
                  <small>Focus</small>
                  <strong>Data Analysis, Human Capital & Supply Chain Management</strong>
                </div>
                <div>
                  <small>Study location</small>
                  <strong>South Tangerang</strong>
                </div>
                <div>
                  <small>Status</small>
                  <strong>Student</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionTitle eyebrow="02">Project</SectionTitle>
          <div className="project-grid">
            {projects.map((item, index) => (
              <article className="project-card" key={item.title}>
                <div className="project-cover">
                  <img src={item.cover} alt={`Preview of ${item.title}`} />
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-content">
                  <p>{item.category}</p>
                  <h3>{item.title}</h3>
                  <a
                    className="project-arrow"
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    download={item.file.endsWith('.pptx') ? '' : undefined}
                  >
                    Open Project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark" id="skills">
          <SectionTitle eyebrow="03">Skill</SectionTitle>
          <div className="skill-grid">
            {technicalSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className={skill.icons.length > 1 ? 'skill-icons multiple' : 'skill-icons'}>
                  {skill.icons.map(([icon, color]) => (
                    localSkillLogos[icon] ? (
                      <img
                        key={icon}
                        className="skill-logo-image"
                        src={localSkillLogos[icon]}
                        alt=""
                      />
                    ) : (
                      <span
                        key={icon}
                        className="skill-logo"
                        aria-hidden="true"
                        style={{
                          '--logo': `url("https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/${icon}.svg")`,
                          '--logo-color': `#${color}`,
                        } as CSSProperties}
                      />
                    )
                  ))}
                </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="badge-groups">
          <div>
              <h3>Hard Skills</h3>
              <p><span>Business Intelligence</span><span>Report Drafting</span><span>Data Visualization</span><span>Microsoft Office</span><span>Google Workspace</span><span>Risk Management</span><span>Technical Writing</span></p>
            </div>
            <div>
              <h3>Soft Skills</h3>
              <p><span>Data Management</span><span>Communication</span><span>Problem Solving</span><span>Adaptability</span><span>Time Management</span><span>Teamwork</span><span>Analytical Thinking</span></p>
            </div>
          </div>
        </section>
        <section className="section dark" id="experience">
          <SectionTitle eyebrow="04">Experience</SectionTitle>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className="experience-item" key={`${item.role}-${item.organization}`}>
                <span className="experience-index">0{index + 1}</span>
                <div>
                  <p className="meta">{item.period}</p>
                  <h3>{item.role}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.summary}</p>
                  <button onClick={() => setOpenExperience(openExperience === index ? null : index)}>
                    {openExperience === index ? 'Close Details' : 'View Details'} <span>{openExperience === index ? '−' : '+'}</span>
                  </button>
                  {openExperience === index && (
                    <ul>{item.duties.map((duty) => <li key={duty}>{duty}</li>)}</ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="education">
          <div>
            <SectionTitle eyebrow="05">Education</SectionTitle>
          </div>
          <div className="timeline-card">
            <img className="education-logo" src="./assets/education/uin.png" alt="UIN Syarif Hidayatullah Jakarta logo" />
            <div>
              <span>Aug 2025 – Present</span>
              <h3>UIN Syarif Hidayatullah Jakarta</h3>
              <p>Bachelor’s Degree in Information Systems</p>
              <ul>
                <li>Active in Business Analyst and Planning competitions.</li>
                <li>Interested in Business Analysis, Data Analyst, and Data Science.</li>
                <li>Active member of GDGoC UIN Syarif Hidayatullah Jakarta.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-card">
            <img className="education-logo" src="./assets/education/sman2.png" alt="SMA Negeri 2 Kota Tangerang Selatan logo" />
            <div>
              <span>Jul 2022 – Jul 2025</span>
              <h3>SMA Negeri 2 Kota Tangerang Selatan</h3>
              <p>High School Diploma, Natural Science</p>
            </div>
          </div>
        </section>

        <section className="section dark" id="organization">
          <SectionTitle eyebrow="06">Organization</SectionTitle>
          <div className="organization-grid">
            <article><p className="meta">Jan 2024 – Nov 2024</p><h3>Moonzher Art Computer Harmonia</h3><h4>Member & Secretary</h4><p>Managed membership data, including attendance and achievements, and coordinated alma mater procurement for over 50 members.</p></article>
            <article><p className="meta">Nov 2025 – Oct 2026</p><h3>Google Developer Group on Campus UIN Jakarta</h3><h4>Member</h4><p>Actively participated in tech workshops and IT classes while collaborating with fellow students in technology-related activities.</p></article>
            <article><p className="meta">Aug 2023 – Nov 2024</p><h3>Moonzher Entrepreneur Club</h3><h4>Member</h4><p>Participated in various multidisciplinary business competitions.</p></article>
          </div>
        </section>

        <section className="section" id="achievements">
          <SectionTitle eyebrow="07">Achievement</SectionTitle>
          <div className="achievement-list">
            <article>
              <img src="./assets/achievement/achievement-airlangga.jpeg" alt="Management Startup Challenge 2023 semifinalist certificate" />
              <div><b>Semifinalist</b><h3>Management Startup Challenge 2023</h3><p>Business Planning · Management Student Association, Airlangga University</p></div>
            </article>
            <article>
              <img src="./assets/achievement/achievement-upn.jpg" alt="Digital Competition 2026 Business Analyst certificate" />
              <div><b>11th Place</b><h3>Digital Competition 2026</h3><p>Business Analyst · D3 Information Systems Student Association, UPN Veteran Jakarta</p></div>
            </article>
            <article>
              <img src="./assets/achievement/achievement-kompek.jpg" alt="KOMPeK 26 Business Challenge certificate" />
              <div><b>Participant</b><h3>KOMPeK 26</h3><p>Business Challenge · Faculty of Economics and Business, University of Indonesia</p></div>
            </article>
            <article className="achievement-text-only">
              <div><b>Participant</b><h3>Decision 2026</h3><p>Business Planning · Agriculture Department Student Association, Diponegoro University</p></div>
            </article>
          </div>
        </section>

        <section className="section certificates" id="certifications">
          <SectionTitle eyebrow="08">Licenses & Certifications</SectionTitle>
          <div className="certificate-list">
            {certificates.map((item, index) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <span>0{index + 1}</span>
                <div className="certificate-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="certificate-meta">
                  <p>{item.issuer}</p>
                  <span>{item.date}</span>
                </div>
                <b>↗</b>
              </a>
            ))}
          </div>
        </section>


        <section className="section languages" id="languages">
          <SectionTitle eyebrow="09">Languages</SectionTitle>
          <div className="language-row">
            <div><span>01 · Native</span><h3>Indonesian</h3></div>
            <div><span>02 · Intermediate</span><h3>English</h3></div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <SectionTitle eyebrow="10">Gallery</SectionTitle>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <button key={item.src} className={`gallery-item item-${index + 1}`} onClick={() => setLightbox(item)}>
                <img src={item.src} alt={item.title} />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="kicker">11 — Contact</p>
          <h2>
            Let’s create
            <br />
            something <em>meaningful.</em>
          </h2>
          <p>
            Open to discussions about data, business analysis, and project collaboration.
          </p>
          <div className="contact-actions">
            <a className="button light" href="https://mail.google.com/mail/?view=cm&fs=1&to=rizkyfaadilah15@gmail.com" target="_blank" rel="noreferrer">Send Email ↗</a>
            <a className="button light" href="https://www.linkedin.com/in/rizkyfadilaah" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <p className="contact-phone">+62 896-4780-5484</p>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">RF<span>.</span></a>
        <p>Portfolio Rizky Fadilah · 2026</p>
        <p>Data · People · Project</p>
      </footer>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={() => setLightbox(null)}>
          <button aria-label="Close gallery" onClick={() => setLightbox(null)}>×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <figcaption>{lightbox.title}</figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}