
// 'use client'

// import Header from './components/Header'
// import { motion } from 'framer-motion'

// const sectionTitleClasses =
//   'text-lg font-semibold uppercase tracking-[0.2em] text-sky-400'

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Header />

//       <div className="mx-auto flex max-w-5xl flex-col gap-24 px-4 pb-16 pt-28 md:px-6 md:pt-32">
//         {/* Hero Section */}
//         <section
//           aria-labelledby="hero-heading"
//           className="flex flex-col items-start gap-10 md:flex-row md:items-center"
//         >
//           <div className="max-w-xl">
//             <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
//               AI Engineer & Data Scientist
//             </p>
//             <motion.h1
//               id="hero-heading"
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl"
//             >
//               Tihetna Mesfin
//             </motion.h1>
//             <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
//               MSc in Computer Vision (CGPA 3.75), specializing in GANs and
//               agentic AI systems. I build production-ready AI solutions across
//               computer vision, predictive modeling, and LLM-powered workflows.
//             </p>
//             <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
//               <span className="rounded-full border border-slate-300 dark:border-slate-700 px-4 py-1.5 leading-none">
//                 5+ years experience
//               </span>
//               <span className="rounded-full border border-slate-300 dark:border-slate-700 px-4 py-1.5 leading-none">
//                 10+ AI projects
//               </span>
//               <span className="rounded-full border border-slate-300 dark:border-slate-700 px-4 py-1.5 leading-none">
//                 4 cloud certifications
//               </span>
//             </div>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href="#projects"
//                 className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-400 dark:text-slate-950"
//               >
//                 View featured projects
//               </a>
//               <a
//                 href="#contact"
//                 className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-sky-500 hover:text-sky-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-sky-400"
//               >
//                 Get in touch
//               </a>
//             </div>
//           </div>

//           <div className="w-full max-w-sm space-y-4 text-xs text-slate-600 dark:text-slate-300 sm:text-sm md:self-stretch">
//             <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//               <p className="font-medium text-slate-900 dark:text-slate-100">Specializations</p>
//               <p className="mt-1 text-slate-600 dark:text-slate-300">
//                 Computer Vision, GANs for medical imaging, agentic AI pipelines,
//                 and LLM-based decision support systems.
//               </p>
//             </div>
//             <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//               <p className="font-medium text-slate-900 dark:text-slate-100">Currently</p>
//               <p className="mt-1 text-slate-600 dark:text-slate-300">
//                 AI Engineer at Stafrica, building robust machine learning
//                 systems for real-world data.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* About Section - Chip Huyen Style with Headshot */}
//         <section id="about" className="py-12 border-y border-slate-200 dark:border-slate-800">
//           <div className="flex flex-col md:flex-row gap-12 items-start">
//             <div className="md:w-1/3">
//               <div className="sticky top-24">
//                 <img 
//                   src="/images/Tihetna_headshot.jpg" 
//                   alt="Tihetna Mesfin"
//                   className="w-full rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700"
//                 />
//                 <div className="mt-6 space-y-3">
//                   <p className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-2">
//                     <span className="text-sky-400">📍</span> Based in Ethiopia
//                   </p>
//                   <p className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-2">
//                     <span className="text-sky-400">🎓</span> MSc Computer Vision
//                   </p>
//                   <p className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-2">
//                     <span className="text-sky-400">🔬</span> GANs & Agentic AI
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-2/3">
//               <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400 mb-3">
//                 About Me
//               </p>
//               <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
//                 AI Engineer & Data Scientist
//               </h2>
//               <div className="prose prose-slate dark:prose-invert max-w-none">
//                 <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
//                   I'm an AI Engineer with a deep passion for computer vision and agentic systems. 
//                   My work bridges cutting-edge research and production-ready applications, 
//                   from GAN-based medical imaging to LLM-powered automation.
//                 </p>
//                 <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
//                   Currently, I'm building robust machine learning systems at Stafrica, 
//                   while continuously exploring new frontiers in AI through research and 
//                   open-source contributions.
//                 </p>
//               </div>
              
//               {/* Stats Grid */}
//               <div className="mt-8 grid grid-cols-2 gap-4">
//                 <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//                   <p className="text-2xl font-bold text-sky-400">5+</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">Years Experience</p>
//                 </div>
//                 <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//                   <p className="text-2xl font-bold text-sky-400">10+</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">AI Projects</p>
//                 </div>
//                 <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//                   <p className="text-2xl font-bold text-sky-400">4</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">Cloud Certs</p>
//                 </div>
//                 <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//                   <p className="text-2xl font-bold text-sky-400">3.75</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">MSc CGPA</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" aria-labelledby="skills-heading">
//           <p className={sectionTitleClasses}>Skills</p>
//           <h2
//             id="skills-heading"
//             className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl"
//           >
//             Tools I use to ship AI systems.
//           </h2>

//           <div className="mt-6 grid gap-5 md:grid-cols-2">
//             <SkillGroup
//               title="ML / Deep Learning"
//               items={['PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn']}
//             />
//             <SkillGroup
//               title="Agentic AI"
//               items={['CrewAI', 'LangChain', 'LangGraph']}
//             />
//             <SkillGroup
//               title="Data Visualization"
//               items={['Streamlit', 'Power BI', 'Plotly']}
//             />
//             <SkillGroup
//               title="Cloud & Infrastructure"
//               items={['AWS (certified)', 'Azure (certified)']}
//             />
//             <SkillGroup
//               title="Languages"
//               items={['Python', 'SQL', 'JavaScript']}
//             />
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" aria-labelledby="projects-heading">
//           <p className={sectionTitleClasses}>Featured AI Projects</p>
//           <h2
//             id="projects-heading"
//             className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl"
//           >
//             Selected work across agentic systems, LLMs, and predictive models.
//           </h2>

//           <div className="mt-6 grid gap-5 md:grid-cols-2">
//             <ProjectCard
//               title="Agentic Job Assistant"
//               context="Agentic AI · CrewAI · LLM Orchestration"
//               description="Multi-agent workflow using CrewAI and BART to parse job postings, match candidate profiles, and automate tailored application generation for the Ready Tensor Challenge."
//             />
//             <ProjectCard
//               title="Real Estate LLM Chatbot"
//               context="LangChain · Power BI · Retrieval"
//               description="Conversational interface over real estate market data, combining LangChain, vector search, and Power BI dashboards to answer analytical questions in natural language."
//             />
//             <ProjectCard
//               title="Flight Delay Prediction"
//               context="PySpark · Big Data · MLOps"
//               description="End-to-end prediction pipeline over 1M+ flight records using PySpark, feature engineering, and robust evaluation for on-time performance forecasting."
//             />
//             <ProjectCard
//               title="GAN for CT Denoising"
//               context="Medical Imaging · GANs · Attention"
//               description="Research project using GANs with attention mechanisms to denoise low-dose CT images while preserving clinically relevant structures."
//             />
//           </div>
//         </section>

//         {/* Research Section */}
//         <section
//           id="research"
//           aria-labelledby="research-heading"
//           className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
//         >
//           <div>
//             <p className={sectionTitleClasses}>Research &amp; Writing</p>
//             <h2
//               id="research-heading"
//               className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl"
//             >
//               Bridging research and applied AI.
//             </h2>
//             <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
//               <li>
//                 <p className="font-medium text-slate-900 dark:text-slate-100">
//                   GAN for Denoising Low Dose CT Images
//                 </p>
//                 <p className="text-xs text-slate-500 dark:text-slate-400">
//                   Submitted to Hindawi – explores GAN architectures with
//                   attention for improving diagnostic image quality under low
//                   radiation settings.
//                 </p>
//               </li>
//               <li>
//                 <p className="font-medium text-slate-900 dark:text-slate-100">
//                   Market Price Prediction System
//                 </p>
//                 <p className="text-xs text-slate-500 dark:text-slate-400">
//                   Combines LSTM and regression models to forecast market prices
//                   under changing temporal dynamics.
//                 </p>
//               </li>
//             </ul>
//           </div>

//           <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//             <p className="font-medium text-slate-900 dark:text-slate-100">Talks &amp; Teaching</p>
//             <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
//               <li>
//                 Guest Lecture: <span className="font-medium">
//                   &quot;Introduction to GANs&quot;
//                 </span>{' '}
//                 at St Mary&apos;s University.
//               </li>
//               <li>
//                 NLP workshop for undergraduate students, covering text
//                 classification, embeddings, and model evaluation.
//               </li>
//               <li className="italic text-slate-400">
//                 More LinkedIn events and talks coming soon.
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Experience Timeline */}
//         <section id="experience" aria-labelledby="experience-heading">
//           <p className={sectionTitleClasses}>Experience</p>
//           <h2
//             id="experience-heading"
//             className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl"
//           >
//             Where I&apos;ve applied these skills.
//           </h2>

//           <ol className="mt-6 space-y-5 border-l border-slate-200 dark:border-slate-800 pl-5 text-sm text-slate-600 dark:text-slate-300">
//             <TimelineItem
//               role="AI Engineer"
//               company="Stafrica"
//               period="Current"
//               description="Designing and deploying AI solutions for data-rich, production environments across the African market."
//             />
//             <TimelineItem
//               role="AI Engineer"
//               company="ChipChip"
//               period="Previous"
//               description="Built and refined machine learning pipelines, focusing on experimentation, evaluation, and iterative improvement."
//             />
//             <TimelineItem
//               role="Data Analyst"
//               company="OVID-IT"
//               period="Previous"
//               description="Developed analytics dashboards and predictive insights to support data-driven decision-making."
//             />
//             <TimelineItem
//               role="Lecturer"
//               company="St Mary&apos;s University"
//               period="Previous"
//               description="Taught computer science and AI concepts, mentoring students towards research and industry careers."
//             />
//           </ol>
//         </section>

//         {/* LinkedIn Events Section */}
//         <section id="events" aria-labelledby="events-heading">
//           <p className={sectionTitleClasses}>LinkedIn Events & Talks</p>
//           <h2
//             id="events-heading"
//             className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl"
//           >
//             Sharing knowledge with the community.
//           </h2>
          
//           <div className="mt-6 grid gap-4 md:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="rounded-lg border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
//                   <span className="text-lg">🎤</span>
//                 </div>
//                 <div>
//                   <p className="font-medium text-slate-900 dark:text-slate-100">Guest Lecture: Introduction to GANs</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">St Mary's University • March 2025</p>
//                 </div>
//               </div>
//               <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
//                 Covered generative adversarial networks architecture, training dynamics, and applications in medical imaging.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="rounded-lg border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
//                   <span className="text-lg">💻</span>
//                 </div>
//                 <div>
//                   <p className="font-medium text-slate-900 dark:text-slate-100">NLP Workshop for Undergraduates</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">St Mary's University • February 2025</p>
//                 </div>
//               </div>
//               <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
//                 Hands-on workshop covering text classification, word embeddings, and model evaluation techniques.
//               </p>
//             </motion.div>
//           </div>

//           <div className="mt-4 rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//             <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
//               <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
//               More events coming soon. Follow me on <a href="https://linkedin.com/in/tihetna" className="text-sky-500 hover:underline">LinkedIn</a> for updates.
//             </p>
//           </div>
//         </section>

//         {/* Certifications & Hobbies */}
//         <section
//           id="hobbies-certifications"
//           className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
//         >
//           <div>
//             <p className={sectionTitleClasses}>Out of Work Hobbies</p>
//             <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl">
//               How I stay sharp and grounded.
//             </h2>
//             <div className="mt-6 grid gap-4 sm:grid-cols-2">
//               <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm text-center dark:border-slate-800 dark:bg-slate-900/60">
//                 <div className="text-3xl mb-2">📚</div>
//                 <h3 className="font-medium text-slate-900 dark:text-slate-100">AI Research Reading</h3>
//                 <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">2-3 papers weekly</p>
//               </div>
//               <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm text-center dark:border-slate-800 dark:bg-slate-900/60">
//                 <div className="text-3xl mb-2">🤝</div>
//                 <h3 className="font-medium text-slate-900 dark:text-slate-100">Mentoring</h3>
//                 <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Aspiring data scientists</p>
//               </div>
//               <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm text-center dark:border-slate-800 dark:bg-slate-900/60">
//                 <div className="text-3xl mb-2">🌍</div>
//                 <h3 className="font-medium text-slate-900 dark:text-slate-100">Open Source</h3>
//                 <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Contributing to AI tools</p>
//               </div>
//               <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm text-center dark:border-slate-800 dark:bg-slate-900/60">
//                 <div className="text-3xl mb-2">📝</div>
//                 <h3 className="font-medium text-slate-900 dark:text-slate-100">Technical Writing</h3>
//                 <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Blog coming soon</p>
//               </div>
//             </div>
//           </div>

//           <div id="certifications">
//             <p className={sectionTitleClasses}>Certifications</p>
//             <div className="mt-3 space-y-2">
//               <div className="rounded-lg border border-slate-200 bg-white/60 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//                 <p className="font-medium text-slate-900 dark:text-slate-100">AWS Certified Cloud Practitioner</p>
//               </div>
//               <div className="rounded-lg border border-slate-200 bg-white/60 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//                 <p className="font-medium text-slate-900 dark:text-slate-100">Azure Fundamentals</p>
//               </div>
//               <div className="rounded-lg border border-slate-200 bg-white/60 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//                 <p className="font-medium text-slate-900 dark:text-slate-100">NVIDIA Deep Learning</p>
//               </div>
//               <div className="rounded-lg border border-slate-200 bg-white/60 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//                 <p className="font-medium text-slate-900 dark:text-slate-100">Ready Tensor Agentic AI Challenge</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Blog */}
//         <section id="blog" aria-labelledby="blog-heading">
//           <p className={sectionTitleClasses}>Writing</p>
//           <h2
//             id="blog-heading"
//             className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl"
//           >
//             Technical blog (coming soon).
//           </h2>
//           <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
//             I plan to write about agentic AI patterns, practical deep learning,
//             and lessons from deploying models to production. Check back soon for
//             essays and implementation notes.
//           </p>
//         </section>

//         {/* Contact */}
//         <section id="contact" aria-labelledby="contact-heading">
//           <p className={sectionTitleClasses}>Contact</p>
//           <h2
//             id="contact-heading"
//             className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl"
//           >
//             Let&apos;s collaborate.
//           </h2>
//           <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
//             Whether you&apos;re exploring an applied AI project, need help
//             evaluating an ML system, or want to discuss research, feel free to
//             reach out.
//           </p>
//           <div className="mt-5 flex flex-wrap gap-4 text-sm">
//             <a
//               href="mailto:tihetna1mm@gmail.com"
//               className="rounded-full bg-sky-500 px-5 py-2 font-medium text-white hover:bg-sky-400 dark:text-slate-950"
//             >
//               Email
//             </a>
//             <a
//               href="https://github.com/Tihetna1891"
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-full border border-slate-300 px-5 py-2 font-medium text-slate-700 hover:border-sky-500 hover:text-sky-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-sky-400"
//             >
//               GitHub
//             </a>
//             <a
//               href="https://www.linkedin.com/in/tihetna-mesfin-494b05183/"
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-full border border-slate-300 px-5 py-2 font-medium text-slate-700 hover:border-sky-500 hover:text-sky-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-sky-400"
//             >
//               LinkedIn
//             </a>
//           </div>
//         </section>
//       </div>
//     </main>
//   )
// }

// type SkillGroupProps = {
//   title: string
//   items: string[]
// }

// function SkillGroup({ title, items }: SkillGroupProps) {
//   return (
//     <div className="rounded-lg border border-slate-200 bg-white/60 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
//       <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</p>
//       <ul className="mt-3 flex flex-wrap gap-2.5 text-xs text-slate-600 dark:text-slate-300">
//         {items.map((item) => (
//           <li
//             key={item}
//             className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-300 px-4 py-1.5 leading-none dark:border-slate-600"
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// type ProjectCardProps = {
//   title: string
//   context: string
//   description: string
// }

// function ProjectCard({ title, context, description }: ProjectCardProps) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 8 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.4 }}
//       className="flex flex-col rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-500/50 hover:bg-white/80 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-sky-500/80 dark:hover:bg-slate-800/80"
//     >
//       <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-sky-400">
//         {context}
//       </p>
//       <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
//       <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
//         {description}
//       </p>
//     </motion.article>
//   )
// }

// type TimelineItemProps = {
//   role: string
//   company: string
//   period: string
//   description: string
// }

// function TimelineItem({
//   role,
//   company,
//   period,
//   description,
// }: TimelineItemProps) {
//   return (
//     <li className="relative pl-5">
//       <span className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-sky-500" />
//       <div className="flex flex-wrap items-baseline justify-between gap-2">
//         <p className="font-medium text-slate-900 dark:text-slate-100">
//           {role}{' '}
//           <span className="text-slate-500 dark:text-slate-400">
//             @ {company}
//           </span>
//         </p>
//         <p className="text-xs text-slate-400 dark:text-slate-500">{period}</p>
//       </div>
//       <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">{description}</p>
//     </li>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import { motion } from 'framer-motion'

const AGRICULTURE_WORKSHOP_IMAGES = [
  '/images/events/agriculture-workshop-1.jpg',
  '/images/events/agriculture-workshop-2.jpg',
] as const
import { createClient } from '../lib/supabase/client'
import { projectDetailPath } from '@/lib/project-utils'
import { ProjectMediaPreview } from './components/ProjectMediaPreview'
import { getProjectPosterUrl } from '@/lib/video-utils'
import { ProjectImage } from './components/ProjectImage'
import { SkillBadge } from './components/SkillBadge'
import { DocumentLinks } from './components/DocumentLinks'
import { DOCUMENTS, resolveDocument } from '@/lib/documents'
import { THESIS_LINKS, isPublicLink } from '@/lib/thesis-links'
import { EVENT_LINKS, isEventLinkReady } from '@/lib/event-links'

const sectionTitleClasses =
  'text-lg font-semibold uppercase tracking-[0.2em] text-sky-500'

// Add this state for the modal
// const [selectedCert, setSelectedCert] = useState<any>(null)
// Certification Modal Component
function CertificationModal({ cert, onClose }: { cert: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
        
        <div className="text-center">
          <div className="text-5xl mb-4">🏅</div>
          <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
          <p className="text-sky-500 font-medium mb-2">{cert.issuer}</p>
          <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
          
          {cert.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
          )}
          
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium"
            >
              View Certificate ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// Certification Card Component
function CertificationCard({ title, issuer, date, link, description }: { title: string; issuer: string; date: string; link?: string; description?: string }) {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <>
      <div 
        onClick={() => setShowModal(true)}
        className="rounded-lg border p-4 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-sky-500 dark:hover:border-sky-500 bg-white dark:bg-slate-900"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium text-slate-900 dark:text-slate-100">{title}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{issuer} • {date}</p>
            {description && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{description}</p>
            )}
          </div>
          <span className="text-slate-400 text-sm">↗</span>
        </div>
      </div>
      
      {showModal && (
        <CertificationModal 
          cert={{ title, issuer, date, link, description }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}
function formatBlogDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function Home() {
  const [projects, setProjects] = useState<any[]>([])
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [blogLoading, setBlogLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    fetchProjects()
    fetchBlogPosts()
  }, [])

  const fetchProjects = async () => {
    setLoading(true)
    const { data } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    setProjects(data || [])
    setLoading(false)
  }

  const fetchBlogPosts = async () => {
    setBlogLoading(true)
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, tags, cover_image, created_at')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts:', error.message)
    }
    setBlogPosts(data || [])
    setBlogLoading(false)
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="mx-auto flex max-w-5xl flex-col gap-24 px-4 pb-16 pt-28 md:px-6 md:pt-32">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="flex flex-col items-start gap-10 md:flex-row md:items-center"
        >
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-500">
              AI Engineer & Data Scientist
            </p>
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
            >
              Tihetna Mesfin
            </motion.h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed sm:text-base">
            MSc in Computer Science and Engineering (Computer Vision) , specializing in GANs and
              agentic AI systems. I build production-ready AI solutions across
              computer vision, predictive modeling, and LLM-powered workflows.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="rounded-full border px-4 py-1.5 leading-none">
                5+ years experience
              </span>
              <span className="rounded-full border px-4 py-1.5 leading-none">
                10+ AI projects
              </span>
              <span className="rounded-full border px-4 py-1.5 leading-none">
                4 cloud certifications
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-400"
              >
                View featured projects
              </a>
              <a
                href="#contact"
                className="rounded-full border px-5 py-2 text-sm font-medium hover:border-sky-500 hover:text-sky-500"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm space-y-4 text-xs sm:text-sm md:self-stretch">
            <div className="rounded-lg border p-4 shadow-sm">
              <p className="font-medium">Specializations</p>
              <p className="mt-1">
                Computer Vision, GANs for medical imaging, agentic AI pipelines, prediction models
                LLM-based decision support systems, backend development, frontend development, end to end development and production-ready AI model integration with software products, and more.
              </p>
              <br/><br/>
              <p className="mt-1">
                Leadership skill, team collaboration, communication skills, problem-solving skills, and more.
              </p>
            </div>
            <div className="rounded-lg border p-4 shadow-sm">
              <p className="font-medium">Currently</p>
              <p className="mt-1">
                Data Science Lead at Green Agro Solutions(Lersha),  functioning as a full-stack data platform engineer: simultaneously owning data infrastructure, document governance, compliance policy, and analytical strategy for an early-stage Ethiopian agricultural fintech navigating regulatory scrutiny and investor due diligence at the same time.
              </p>
              <p className="mt-1">
                AI Engineer at Stafrica(Applizy), building robust machine learning, software products and AI 
                systems for real-world data.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-y">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <img 
                  src="/images/Tihetna_headshot.jpg" 
                  alt="Tihetna Mesfin"
                  className="w-full rounded-2xl shadow-2xl border"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Tihetna+Mesfin';
                  }}
                />
                <div className="mt-6 space-y-3">
                  <p className="text-sm flex items-center gap-2">
                    <span className="text-sky-500">📍</span> Based in Ethiopia
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span className="text-sky-500">🎓</span> MSc Computer Vision
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span className="text-sky-500">🔬</span> GANs & Agentic AI
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-500 mb-3">
                About Me
              </p>
              <h2 className="text-3xl font-bold mb-6">
                AI Engineer & Data Scientist
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  I'm an AI Engineer with a deep passion for computer vision and agentic systems. 
                  My work bridges cutting-edge research and production-ready applications, 
                  from GAN-based medical imaging to LLM-powered automation.
                </p>
                <p className="text-lg leading-relaxed">
                  Currently, I'm building robust machine learning systems at Stafrica*(Applizy), 
                  while continuously exploring new frontiers in AI through research and 
                  open-source contributions.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4 shadow-sm text-center">
                  <p className="text-2xl font-bold text-sky-500">5+</p>
                  <p className="text-xs">Years Experience</p>
                </div>
                <div className="rounded-lg border p-4 shadow-sm text-center">
                  <p className="text-2xl font-bold text-sky-500">10+</p>
                  <p className="text-xs">AI and Software Projects</p>
                </div>
                <div className="rounded-lg border p-4 shadow-sm text-center">
                  <p className="text-2xl font-bold text-sky-500">4</p>
                  <p className="text-xs">Cloud Certificationss</p>
                </div>
                <div className="rounded-lg border p-4 shadow-sm text-center">
                  <p className="text-2xl font-bold text-sky-500">3.75</p>
                  <p className="text-xs">MSc CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" aria-labelledby="skills-heading">
          <p className={sectionTitleClasses}>Skills</p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Tools I use to ship Sofware products and AI systems.
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <SkillGroup
              title="ML / Deep Learning"
              items={['PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Scipy']}
            />
            <SkillGroup
              title="Agentic AI"
              items={['CrewAI', 'LangChain', 'LangGraph']}
            />
             <SkillGroup
              title="Data Science"
              items={['R Studio', 'LabVIEW', 'Jupyter Notebook']}
            />
            <SkillGroup
              title="Data Visualization"
              items={['Streamlit', 'Power BI', 'Plotly', 'matplotlib']}
            />
            <SkillGroup
              title="Tools, Cloud & Infrastructure"
              items={['AWS (certified)', 'Azure (certified)', 'Google Colab', 'Github Actions', 'Docker', 'CI/CD', 'Airbyte']}
            />
            <SkillGroup
              title="Languages"
              items={['Python', 'SQL', 'JavaScript', 'R']}
            />
          </div>
        </section>

        {/* Projects Section - DYNAMIC FROM SUPABASE */}
        <section id="projects" aria-labelledby="projects-heading">
          <p className={sectionTitleClasses}>Featured Projects</p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Selected work across agentic systems, LLMs, and predictive models.
          </h2>

          {loading ? (
            <div className="text-center py-12">Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No projects yet. Check back soon!
            </div>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  title={project.title}
                  context={project.context || project.tech_stack?.slice(0, 3).join(' · ') || 'AI Project'}
                  description={project.short_description}
                />
              ))}
            </div>
          )}
        </section>

        {/* Research Section */}
        <section id="research" className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div>
            <p className={sectionTitleClasses}>Research &amp; Writing</p>
            <h2 className="mt-2 text-xl font-semibold md:text-2xl">
              Bridging research and applied AI.
            </h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="font-medium">GAN for Denoising Low Dose CT Images</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Submitted to Researchgate  – explores GAN architectures with
                  attention for improving diagnostic image quality under low
                  radiation settings.
                </p>
              </li>
              <li>
                <p className="font-medium">Market Price Prediction System</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Combines LSTM and regression models to forecast market prices
                  under changing temporal dynamics.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-4 shadow-sm">
            <p className="font-medium">Talks &amp; Teaching</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                University Lecture: <span className="font-medium">Various Computer Science cources i.e introduction to computing with Python, Advanced Database, Internet Programming etc "</span> at St Mary's University.
              </li>
              
            </ul>
          </div>
        </section>
        {/* Research & Thesis Section - Dedicated for your MSc work */}
        <section id="thesis" className="mt-8">
          <p className={sectionTitleClasses}>Research & Thesis</p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            MSc in Computer Science and Engineering (Computer Vision Research) 
          </h2>
          
          <div className="mt-6 rounded-2xl border-2 border-sky-500/30 bg-linear-to-br from-sky-50/50 to-white dark:from-sky-950/20 dark:to-slate-900 p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left - Thesis Info */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 rounded-full text-xs font-medium mb-3">
                  🎓 Master's Thesis • CGPA 3.75 • Result: Excellent
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  GAN for Denoising Low Dose CT Images
                </h3>
                <p className="text-lg font-medium text-sky-600 dark:text-sky-400 mb-3">
                  Integrated Cross-Channel Communication Block in GANs for Medical Image Enhancement
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Submitted to Researchgate • Advisors: Dr. Worku Jifara (Associate Proffessor, Head of Computer Vision and AI Lab, ASTU)
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs">GANs</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs">Medical Imaging</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs">Attention Mechanisms</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs">Dice Loss</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs">Low-Dose CT</span>
                </div>
              </div>
              
              {/* Right - Key Highlights */}
              <div className="md:w-64 space-y-3">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-sky-500">3.75</p>
                  <p className="text-xs text-slate-500">MSc CGPA</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-sky-500">Excellent</p>
                  <p className="text-xs text-slate-500">Thesis Result</p>
                </div>
                {isPublicLink(DOCUMENTS.researchAbstract) ? (
                  <a
                    href={resolveDocument(DOCUMENTS.researchAbstract).viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-lg border border-sky-500 px-4 py-2 text-sm font-medium text-sky-500 transition hover:bg-sky-50 dark:hover:bg-sky-950/30"
                  >
                    📄 Read Abstract
                  </a>
                ) : (
                  <p className="rounded-lg border border-dashed px-3 py-2 text-center text-xs text-slate-500">
                    Abstract link — set in lib/documents.ts when ready
                  </p>
                )}
              </div>
            </div>
            
            {/* Abstract / Description */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2">Research Summary</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                This research addresses the challenge of denoising low-dose CT images while preserving clinically relevant structures. 
                We propose an enhanced GAN architecture with integrated cross-channel communication blocks and attention mechanisms. 
                The model uses Dice loss to better handle the class imbalance between noise and anatomical structures. 
                Our approach achieves superior denoising results compared to traditional methods while maintaining critical diagnostic features.
              </p>
            </div>
            
            {/* Thesis outbound links — edit URLs in lib/thesis-links.ts */}
            <div className="mt-4 flex flex-wrap gap-3">
              {isPublicLink(THESIS_LINKS.fullThesisPdf) && (
                <>
                  <a
                    href={resolveDocument(THESIS_LINKS.fullThesisPdf).viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-sky-500 hover:underline"
                  >
                    📄 View thesis PDF →
                  </a>
                  <a
                    href={resolveDocument(THESIS_LINKS.fullThesisPdf).downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-sky-500 hover:underline"
                  >
                    ⬇️ Download thesis PDF →
                  </a>
                </>
              )}
              {isPublicLink(THESIS_LINKS.thesisGithub) && (
                <a
                  href={THESIS_LINKS.thesisGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-sky-500 hover:underline"
                >
                  🔬 View Research Code (GitHub) →
                </a>
              )}
              {isPublicLink(THESIS_LINKS.resultsGallery) && (
                <a
                  href={THESIS_LINKS.resultsGallery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-sky-500 hover:underline"
                >
                  📊 View Results Gallery →
                </a>
              )}
              {isPublicLink(THESIS_LINKS.journalArticle) && (
                <a
                  href={THESIS_LINKS.journalArticle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-sky-500 hover:underline"
                >
                  📰 Journal article →
                </a>
              )}
              {!isPublicLink(THESIS_LINKS.fullThesisPdf) &&
                !isPublicLink(THESIS_LINKS.thesisGithub) &&
                !isPublicLink(THESIS_LINKS.resultsGallery) &&
                !isPublicLink(THESIS_LINKS.journalArticle)  }
            </div>
          </div>
          
          {/* Additional Research Projects */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Additional Research</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Market Price Prediction System</h4>
                <p className="text-xs text-slate-500 mb-2">LSTM • Regression • Time Series</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Forecasting market trends using LSTM and regression models for portfolio management.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Medical Data Warehouse for Ethiopia</h4>
                <p className="text-xs text-slate-500 mb-2">ETL • YOLO • Web Scraping</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Scraped medical business data and integrated YOLO for image data extraction.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Experience Timeline - With Exact Dates */}
        <section id="experience">
          <p className={sectionTitleClasses}>Experience</p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Where I've applied these skills.
          </h2>

          <ol className="mt-6 space-y-5 border-l pl-5 text-sm">
          <TimelineItem
              role="Data Science Lead"
              company="Green Agro Solutions PLC (Lersha)"
              period="July 2025 - Present"
              description="Designing and deploying AI solutions for data-rich, production environments across the African market. Leading development of LLM-powered job assistant platform and auto-apply systems."
            />
            <TimelineItem
              role="AI Engineer"
              company="Stafrica/(Applizy)"
              period="July 2025 - Present"
              description="Designing and deploying AI solutions for data-rich, production environments across the African market. Leading development of LLM-powered job assistant platform and auto-apply systems."
            />
           
             <TimelineItem
              role="Data Scientist"
              company="Condigital"
              period="April 2026 - May 2026"
              description="Freelance R studio based data science projects for a client in the USA"
            />
            <TimelineItem
              role="AI Engineer"
              company="ChipChip"
              period="Apr 2025 - May 2025"
              description="Built and refined machine learning pipelines, focusing on experimentation, evaluation, and iterative improvement. Developed KPI dashboards using Streamlit and implemented LSTM models for trend forecasting."
            />
            <TimelineItem
              role="Data Analyst"
              company="OVID-IT"
              period="Apr 2025 - Jul 2025"
              description="Developed analytics dashboards and predictive insights to support data-driven decision-making using Power BI and SQL. Designed reports for project management tools."
            />
            <TimelineItem
              role="Junior Cloud Specialist"
              company="Nedamco - Africa"
              period="Feb 2023 - Mar 2024"
              description="Deployed and managed cloud infrastructure on AWS/Azure. Enhanced security protocols and automated workflows."
            />
            <TimelineItem
              role="Lecturer"
              company="St Mary's University"
              period="Jan 2023 - Apr 2024"
              description="Taught NLP, Computer Vision, Databases, and Programming (C++, Python). Supervised final year projects and mentored students towards research careers."
            />
            <TimelineItem
              role="Research & Academic Assistant"
              company="ASTU"
              period="Jan 2021 - Nov 2022"
              description="Conducted research, data analysis, and taught lab courses. Contributed to GAN research for medical imaging."
            />
            <TimelineItem
              role="ML Contributor (Intern)"
              company="iCog Labs"
              period="Aug 2023 - Oct 2023"
              description="Contributed to AI-based projects for global non-profits, applying machine learning to real-world challenges."
            />
          </ol>
        </section>

        {/* LinkedIn Events Section */}
        <section id="events">
          <p className={sectionTitleClasses}>LinkedIn Events & Talks</p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Sharing experience with the community.
          </h2>
          
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                  <span className="text-lg">🎤</span>
                </div>
                <div>
                  <p className="font-medium">Guest Speaker: Career Experience Sharing and Job Market Insights</p>
                  <p className="text-xs text-gray-500">
                    Blue Nile Machine Intelligence Lab (BNMIL) • March 2025
                  </p>
                  {isEventLinkReady(EVENT_LINKS.careerTalkBnmil) && (
                    <a
                      href={EVENT_LINKS.careerTalkBnmil}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs text-sky-500 hover:underline"
                    >
                      View detail ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm">
                Covered my journey of building a career in AI/ML and Data Science, along with lessons from real-world projects and practical implementation experience.
              </p>
            </div>

            <div className="rounded-lg border p-5 shadow-sm md:col-span-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-lg">🌾</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">
                    AI for Agriculture Co-creation Workshop, Ethiopia
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Addis Ababa • April 2026
                  </p>
                  {isEventLinkReady(EVENT_LINKS.agricultureWorkshopPost) && (
                    <a
                      href={EVENT_LINKS.agricultureWorkshopPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs font-medium text-sky-500 hover:underline"
                    >
                      View detail ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                As Lersha&apos;s Data Science Lead, I represented the company at a
                high-level AI–agriculture workshop, collaborating with Ethiopia&apos;s
                Ministry of Agriculture, the Gates Foundation, and other partners to
                co-prioritize advisory solutions that support equitable farmer impact.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {AGRICULTURE_WORKSHOP_IMAGES.map((src, index) => (
                  <figure
                    key={src}
                    className="relative aspect-4/3 overflow-hidden rounded-lg border bg-slate-100 dark:bg-slate-800"
                  >
                    <Image
                      src={src}
                      alt={`AI for Agriculture Co-creation Workshop — photo ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
              More events coming soon. Follow me on <a href="https://linkedin.com/in/tihetna-mesfin-494b05183/" className="text-sky-500 hover:underline">LinkedIn</a> for updates.
            </p>
          </div>
        </section>
{/* Blog Section */}
        <section id="blog" aria-labelledby="blog-heading">
          <p className={sectionTitleClasses}>Writing</p>
          <h2
            id="blog-heading"
            className="mt-2 text-xl font-semibold md:text-2xl"
          >
            My thoughts on agentic AI, deep learning, production ML,and etc.
          </h2>

          {blogLoading ? (
            <p className="mt-6 text-sm text-slate-500">Loading posts...</p>
          ) : blogPosts.length === 0 ? (
            <p className="mt-6 max-w-2xl text-sm text-slate-500">
              No published posts yet. In admin, create a post and check{' '}
              <strong>Publish immediately</strong> so it appears here.
            </p>
          ) : (
            <ul className="mt-4 grid max-h-80 grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex gap-3 rounded-lg border p-2.5 shadow-sm transition hover:border-sky-500/50 hover:bg-gray-50 dark:hover:bg-slate-800/50"
                  >
                    <div className="h-14 w-20 shrink-0 overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800">
                      {post.cover_image ? (
                        <ProjectImage
                          src={post.cover_image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-400">
                          <span className="text-sm">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <time
                        dateTime={post.created_at}
                        className="text-[10px] text-slate-500 dark:text-slate-400"
                      >
                        {formatBlogDate(post.created_at)}
                      </time>
                      <p className="mt-0.5 line-clamp-2 text-sm font-medium leading-snug">
                        {post.title}
                      </p>
                      {post.excerpt && (
                        <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
        {/* Certifications & Hobbies */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div>
            <p className={sectionTitleClasses}>Out of Work Hobbies</p>
            {/* <h2 className="mt-2 text-xl font-semibold md:text-2xl">
              How I stay sharp and grounded.
            </h2> */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-medium">Research Reading</h3>
                <p className="mt-1 text-xs text-gray-500">2-3 papers weekly</p>
              </div>
              <div className="rounded-lg border p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="font-medium">Mentoring</h3>
                <p className="mt-1 text-xs text-gray-500">Aspiring data scientists</p>
              </div>
              <div className="rounded-lg border p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-medium">Open Source</h3>
                <p className="mt-1 text-xs text-gray-500">Contributing to AI tools</p>
              </div>
              <div className="rounded-lg border p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">📝</div>
                <h3 className="font-medium">Technical Writing</h3>
                <p className="mt-1 text-xs text-gray-500">Blog Posts</p>
              </div>
              <div className="rounded-lg border p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-medium">Artistic Work</h3>
                <p className="mt-1 text-xs text-gray-500">Sketching and Drawing, literature writing, Photography, Video Editing, and more</p>
              </div>
              <div className="rounded-lg border p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-medium">Traveling</h3>
                <p className="mt-1 text-xs text-gray-500">Exploring new places and cultures</p>
              </div>
              <div className="rounded-lg border p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-medium">Volunteer</h3>
                <p className="mt-1 text-xs text-gray-500">Volunteer activities</p>
              </div>
            </div>
          </div>

          {/* Certifications Section - With Modal Popup */}
            <div id="certifications">
              <p className={sectionTitleClasses}>Certifications</p>
              <div className="mt-3 space-y-3">
                <CertificationCard
                  title="AWS Certified Cloud Practitioner"
                  issuer="Amazon Web Services"
                  date="Apr 2023"
                  link="https://www.credly.com/earner/earned/badge/..." // Add actual link
                  description="Validates cloud fundamentals, AWS services, security, and pricing concepts."
                />
                <CertificationCard
                  title="Azure Fundamentals"
                  issuer="Microsoft"
                  date="Jan 2023"
                  link="https://learn.microsoft.com/en-us/users/tihetnamesfin/credentials/..." // Add actual link
                  description="Demonstrates knowledge of cloud concepts, Azure services, workloads, security, and pricing."
                />
                <CertificationCard
                  title="NVIDIA Deep Learning"
                  issuer="NVIDIA"
                  date="Jan 2022"
                  link="https://courses.nvidia.com/certificate/..." // Add actual link
                  description="Deep learning fundamentals, computer vision, and deploying neural networks."
                />
                <CertificationCard
                  title="Ready Tensor Agentic AI Challenge"
                  issuer="Ready Tensor"
                  date="April 2025"
                  link="https://readytensor.com/challenge/..." // Add actual link
                  description="Agentic AI innovation challenge - developed job assistant agent using CrewAI."
                />
                <CertificationCard
                  title="Supervised ML: Regression and Classification"
                  issuer="Coursera / Stanford"
                  date="Oct 2022"
                  link="https://coursera.org/verify/..." // Add actual link
                  description="Andrew Ng's classic ML course covering supervised learning algorithms."
                />
                <CertificationCard
                  title="Deep Learning Specialization"
                  issuer="Coursera / DeepLearning.AI"
                  date="Oct 2022"
                  link="https://coursera.org/verify/..." // Add actual link
                  description="Neural networks, hyperparameter tuning, CNNs, and sequence models."
                />
              </div>
            </div>
        </section>

        
        
        {/* CV / Resume Section */}
        <section id="resume" className="border-t pt-12">
          <p className={sectionTitleClasses}>Resume</p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            My Professional Background
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Download my resume for detailed information about my education, experience, and skills.
          </p>
          
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
            {/* Academic CV */}
            <div className="rounded-lg border p-6 shadow-sm hover:shadow-md transition bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🎓</div>
                <h3 className="text-xl font-bold">Academic Resume</h3>
              </div>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                Academic background, research, publications, and teaching.
              </p>
              <DocumentLinks href={DOCUMENTS.academicCv} />
            </div>
            
            {/* Professional CV */}
            <div className="rounded-lg border p-6 shadow-sm hover:shadow-md transition bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">💼</div>
                <h3 className="text-xl font-bold">Professional Resume</h3>
              </div>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                Industry experience, AI/ML projects, and achievements.
              </p>
              <DocumentLinks href={DOCUMENTS.professionalCv} />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Resume PDFs: edit share links in{' '}
            <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
              lib/documents.ts
            </code>
            .
          </p>
          
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 dark:bg-sky-950/20 p-4 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              📌 Need a different format? <a href="#contact" className="text-sky-500 hover:underline">Contact me</a> and I'll be happy to provide tailored information.
            </p>
          </div>
        </section>
        {/* Contact */}
        <section id="contact">
          <p className={sectionTitleClasses}>Contact</p>
          <h2 className="mt-2 text-xl font-semibold md:text-2xl">
            Let's collaborate.
          </h2>
          <p className="mt-3 max-w-2xl text-sm">
            Whether you're exploring an applied AI project, need help
            evaluating an ML system, or want to discuss research, feel free to
            reach out.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:tihetna1mm@gmail.com"
              className="rounded-full bg-sky-500 px-5 py-2 font-medium text-white hover:bg-sky-400"
            >
              Email
            </a>
            <a
              href="https://github.com/Tihetna1891"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-5 py-2 font-medium hover:border-sky-500 hover:text-sky-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tihetna-mesfin-494b05183/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-5 py-2 font-medium hover:border-sky-500 hover:text-sky-500"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="border-t border-slate-200 pt-10 text-center text-sm text-slate-500 dark:border-slate-800">
          Designed and built by Tihetna
        </footer>
      </div>
    </main>
  )
}

// Helper Components
function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass-surface rounded-lg border p-4 shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs">
        {items.map((item) => (
          <SkillBadge key={item} name={item} />
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({
  project,
  title,
  context,
  description,
}: {
  project: {
    id?: string
    slug?: string
    video_url?: string | null
    image_urls?: string[] | null
  }
  title: string
  context: string
  description: string
}) {
  const detailHref = projectDetailPath(project)
  const posterUrl = getProjectPosterUrl(project)

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col overflow-hidden rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:border-sky-500/50 hover:bg-gray-50 dark:hover:bg-slate-800/50"
    >
      <ProjectMediaPreview
        videoUrl={project.video_url}
        posterUrl={posterUrl}
        title={title}
      />
      <div className="flex flex-1 flex-col p-5">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-sky-500">
        {context}
      </p>
      <h3 className="mt-2 text-base font-semibold">
        <Link href={detailHref} className="no-underline hover:text-sky-500">
          {title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
      <Link
        href={detailHref}
        className="mt-4 inline-flex items-center gap-1 text-sm text-sky-500 no-underline hover:underline"
      >
        Read more →
      </Link>
      </div>
    </motion.article>
  )
}

function TimelineItem({ role, company, period, description }: { role: string; company: string; period: string; description: string }) {
  return (
    <li className="relative pl-5">
      <span className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-sky-500" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-medium">
          {role}{' '}
          <span className="text-gray-500">@ {company}</span>
        </p>
        <p className="text-xs text-gray-400">{period}</p>
      </div>
      <p className="mt-1 text-xs sm:text-sm">{description}</p>
    </li>
  )
}