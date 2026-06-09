"use client"
import styles from "./root.module.css"
import Image from "next/image"
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Github,
  Linkedin,
  Mail,
  Moon,
  Rss,
  Sun,
  Briefcase,
  Award,
} from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import { useTheme } from "next-themes"
import ProjectCard from "@/components/projectCard/projectCard"
import type { BlogType, ProjectType } from "@/lib/types"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import DefaultBlogCard from "@/components/blogs/blogCards"
import Link from "next/link"
import { useState, useEffect } from "react"
import cn from "classnames"
import GitHubContributions from "@/components/github-contributions"
import ExperienceSection from "@/components/experience-section"

export default function RotPage() {
  const projectsList: ProjectType[] = [
    {
      name: "Prepwise AI",
      imageUrl:
        "https://res.cloudinary.com/dtunq8gr3/image/upload/t_prepwise-beta/prepwise_meogv1",
      description:
        "This Platform Offers a Sleek and Modern Experience for Job Interview Preparation. Powered by Vapi-AI Voice Agent, this Website uses AI based Voice Agents to ask users Questions and help them Prepare for Interviews.",
      liveLink: "https://prep-wise-v2.vercel.app/",
      work: "Solo Work",
      status: "Active",
    },
    {
      name: "AayuOCR - Image to Text Extractor",
      imageUrl: "https://res.cloudinary.com/dtunq8gr3/image/upload/t_imgtotxt/imgtotxt_kxq2td",
      description:
        "An API based Image-to-Text Converter and Translator Website. Extract Text from Images and Translate it into any Indian Language of your Convenience. Extract the Embedded Text using Powerful Optical Character Recognition (OCR) Technology. Useful for Reading - Scanned Documents, Printed Materials, Signs, or Handwritten Notes.",
      liveLink: "https://image-text-extractor-seven.vercel.app/",
      work: "Solo Work",
      status: "Active",
    },
        {
      name: "Streamify",
      imageUrl: "https://res.cloudinary.com/dtunq8gr3/image/upload/t_streamify/screenshot-for-readme_1_q0c52p",
      description:
        "A Full-Stack Website for Real-time Messaging with Typing Indicators & Reactions. Users can do 1-on-1 and Group Video Calls with Screen Sharing & Recording . Safe and Secure Usability with JWT Authentication & Protected Routes.",
      liveLink: "https://github.com/aayushmishramechatronics/streamify",
      work: "Solo Work",
      status: "Inactive",
    },
    {
      name: "NEO-Tracker",
      imageUrl: "https://res.cloudinary.com/dtunq8gr3/image/upload/t_neo/neotracker_id3swi",
      description:
        "A Modern Application for Tracking and Visualizing Near-Earth Objects using NASA's NeoWs API.\nReal-time NEO data from NASA's API and Interactive Charts and Analytics\n3D WebGL visualization with orbital mechanics\nAdvanced Filtering and Search Capabilities",
      liveLink: "https://neo-tracker-nasa.vercel.app/",
      work: "Solo Work",
      status: "Active",
    },
    {
      name: "HackTracker - Track All Hackathons",
      imageUrl:
        "https://res.cloudinary.com/dtunq8gr3/image/upload/t_hacktrack/hacktracker_ulyfiu",
      description:
        "A Full-Stack Website for Tracking Hackathon which gives Status of All the Upcoming, and Registered Hackathons by the User. You can also Add/Delete Hackathon and Update your Dashboard anytime, anywhere.",
      liveLink: "https://hacktracker-mit.vercel.app/",
      work: "Solo Work",
      status: "Active",
    },
  ]

  const [projectDisplayList, setProjectDisplayList] = useState(projectsList.slice(0, 3))
  const [showMoreProject, setShowMoreProject] = useState("less")

  const techStack1 = [
    {
      name: "Next.js",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764539/nextjs_gyqxdo.png",
    },
    {
      name: "Cloudinary",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763872/cloudinary_jcjz1e.webp",
    },
    {
      name: "Auth.js",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763872/authjs_g9rfwm.webp",
    },
    {
      name: "PostgreSQL",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/psotgresql_ggzxtu.png",
    },
    {
      name: "Supabase",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/supabase_eban6b.png",
    },
    {
      name: "shadCn",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765234/shadcn_xvjz01.png",
    },
  ]
  const techStack2 = [
    {
      name: "React Native",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/react_fxopt7.png",
    },
    {
      name: "Python",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763871/python_gtxoax.webp",
    },
    {
      name: "MongoDB",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/mongodb_msjbae.svg",
    },
    {
      name: "FastAPI",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749763870/FastAPI_prcozs.png",
    },
    {
      name: "Git",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749764943/gitlogo_ozinof.png",
    },
    {
      name: "Radix UI",
      iconUrl: "https://res.cloudinary.com/dbb7pkwdv/image/upload/v1749765176/radixui_nmbq9s.png",
    },
  ]

  const { theme: currentTheme, setTheme: setCurrentTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 140)
  })

  const [displayTab, setDisplayTab] = useState("info")

  const [blogsArray, setBlogsArray] = useState<BlogType[] | null>(null)
  useEffect(() => {
    const a = async () => {
      const res = await fetch("/api/getBlogs")
      if (res.ok) {
        const blogsArray = await res.json()
        setBlogsArray(blogsArray)
        console.log("blogs: ", blogsArray)
      }
    }
    a()
  }, [])

  const certifications = [
    {
      title: "Robotics: Aerial Robotics",
      issuer: "UPenn | 2024",
      imageUrl: "/images/upenn1.jpg",
      proofUrl: "https://coursera.org/share/9e3d0e1d3e8d58dc42e731177e6388f1",
      summary: "MATLAB and Simulation Software, Control System, Mathematical Modeling with Calculus.",
    },
    {
      title: "Robotics: Computational Motion Planning",
      issuer: "UPenn | 2024",
      imageUrl: "/images/upenn.jpg",
      proofUrl: "https://coursera.org/share/f72546c95773fe47de79922ddf5c4693",
      summary: "Graph Theory and Computational Logic, MATLAB and Network Routing, Computational Thinking with AI.",
    },
    {
      title: "Robotic Process Automation",
      issuer: "UiPath | 2024",
      imageUrl: "/images/uipath.jpg",
      proofUrl: "https://coursera.org/share/f82b4a523d8a2ffdaf25008475f943d1",
      summary: "UiRPA, Web Scraping and Data Manipulation, UI and UI Components, Test Automation.",
    },
  ]

  return (
    <div className={styles.main}>
      <div
        className={cn(
          "z-[-1]",
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(var(--fgColor)_1px,transparent_1px)]",
          "[opacity:0.25]",
          "transition-colors duration-400",
        )}
      />
      <div className="z-[-1] pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--bgColor)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[var(--bgColor)] transition-colors duration-400"></div>

      <div className={styles.detailsHolder}>
        <div className={styles.heroSection}>
          <motion.div
            style={{
              transition: "all 0.1s ease",
              zIndex: 10,
              maxWidth: 650,
              width: "100%",
              borderRadius: "0px 0px 10px 10px",
            }}
            animate={isScrolled ? "scrolled" : "normal"}
            variants={{
              normal: { position: "static" },
              scrolled: { top: 0, position: "fixed", height: 60, backdropFilter: "blur(10px)" },
            }}
          >
            <motion.div className="relative h-[100%] w-[100%] flex items-center justify-end px-[15px]">
              <motion.img
                src="https://res.cloudinary.com/dtunq8gr3/image/upload/t_aayushmishra/aayushmishra_pwbddj"
                alt="Profile photo of Aayush Mishra"
                initial={{ height: 200, width: 200, borderRadius: 9999, margin: "0px auto", position: "static" }}
                animate={isScrolled ? "scrolled" : "normal"}
                variants={{
                  normal: { height: 200, width: 200, borderRadius: 9999 },
                  scrolled: { height: 40, width: 40, borderRadius: 9999, position: "absolute", top: 10, left: 10 },
                }}
                whileHover={{ boxShadow: "0 0 30px 2px rgba(255, 255, 255, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ objectFit: "cover", transition: "box-shadow 0.1s" }}
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center gap-[2px]">
            <h1 className="font-mono font-semibold leading-10 text-3xl">Aayush Mishra</h1>
            <p className={styles.SWEpara}>Robotics Engineer</p>
          </div>

          <div className={styles.socialsDiv}>
            <Link href="https://x.com/aayushmishra" target="_blank">
              <div className={styles.socialsItem}>
                <Image height={15} width={15} alt="" src="/x-social-media-white-icon.svg" unoptimized />
                <p>X app</p>
              </div>
            </Link>

            <Link href="https://github.com/aayushmishramechatronics" target="_blank">
              <div className={styles.socialsItem}>
                <Github size={15} color="white" />
                <p>Github</p>
              </div>
            </Link>

            <Link href="https://authzed.com/" target="_blank">
              <div className={styles.socialsItem}>
                <Image alt="Authzed" src="/authzed.png" width={15} height={15} unoptimized />
                <p>Authzed</p>
              </div>
            </Link>

            <Link href="mailto:aayushmishra1105@gmail.com" target="_blank">
              <div className={styles.socialsItem}>
                <Mail size={15} color="white" />
                <p>Mail</p>
              </div>
            </Link>

            <Link href="https://www.linkedin.com/in/aayush-anil-mishra/" target="_blank">
              <div className={styles.socialsItem}>
                <Linkedin size={15} color="white" />
                <p>LinkedIn</p>
              </div>
            </Link>

            {isMounted && (
              <button
                type="button"
                className={styles.socialsItem}
                onClick={() => setCurrentTheme(currentTheme === "dark" ? "light" : "dark")}
                aria-label="Toggle color theme"
              >
                {currentTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                <p>Theme</p>
              </button>
            )}
          </div>
        </div>

        <div className={styles.bio}>
          <p className="font-mono tracking-tighter underline leading-7 font-light text-2xl">📍Udupi, Karnataka</p>
        </div>

        <div className={styles.tabsHolder}>
          <div
            className={`${styles.tabItem} ${displayTab == "info" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("info")
            }}
          >
            Info
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "experience" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("experience")
            }}
          >
            Experience
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "certifications" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("certifications")
            }}
          >
            Certifications
            <div className={styles.hoverThing} />
          </div>
          <div
            className={`${styles.tabItem} ${displayTab == "articles" && styles.tabItemActive}`}
            onClick={() => {
              setDisplayTab("blogs")
            }}
          >
            Blogs
            <div className={styles.hoverThing} />
          </div>
        </div>

        {displayTab == "info" && (
          <>
            <div className={styles.projectsSection}>
              {/* Move GitHub contributions above the heading as requested */}
              <GitHubContributions username="abhraneeldhar7" />

              <h1 className="font-mono font-semibold underline leading-10 text-3xl">Projects</h1>

              <div className={styles.projectsHolder}>
                {projectDisplayList.map((project, index) => (
                  <div key={index} className="flex flex-col gap-[10px]">
                    <ProjectCard projectDetails={project} />
                    {index < projectDisplayList.length - 1 && (
                      <div className="bg-[var(--fgColor)] w-[90%] opacity-[0.4] font-semibold h-0.5 mx-6 my-0"></div>
                    )}
                  </div>
                ))}
                <div
                  onClick={() => {
                    if (showMoreProject == "less") {
                      setProjectDisplayList(projectsList)
                      setShowMoreProject("more")
                    } else {
                      setProjectDisplayList(projectsList.slice(0, 3))
                      setShowMoreProject("less")
                    }
                  }}
                  className={styles.showMore}
                >
                  {showMoreProject == "less" && (
                    <>
                      Show More <ChevronRight size={20} />
                    </>
                  )}
                  {showMoreProject == "more" && (
                    <>
                      <ChevronLeft size={20} />
                      Show less
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.techStack}>
              <h1 className="font-mono font-semibold text-4xl">My Tech-Stack</h1>

              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:35s]">
                  {techStack1.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={20} width={20} unoptimized />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:35s]">
                  {techStack2.map((tech, index) => (
                    <div key={index} className={styles.techStackItem}>
                      <Image alt="" src={tech.iconUrl || "/placeholder.svg"} height={20} width={20} unoptimized />
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bgColor)]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bgColor)]"></div>
              </div>
            </div>
          </>
        )}

        {displayTab == "experience" && (
          <>
            <div className="mt-[30px] w-full mx-auto max-w-[1100px] px-4 sm:px-6">
              <ExperienceSection />
            </div>
          </>
        )}

        {displayTab == "certifications" && (
          <div className="mt-[30px] w-full mx-auto max-w-[1100px]">
            <h2 className="text-[22px] font-semibold mb-4 font-mono">Certifications</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((c, i) => (
                <div key={i} className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <Link
                    href={c.proofUrl}
                    target="_blank"
                    className="group relative block aspect-[16/10] overflow-hidden rounded-md"
                    aria-label={`Open certificate proof: ${c.title}`}
                  >
                    <Image
                      src={c.imageUrl || "/placeholder.svg"}
                      alt={`${c.title} preview`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div
                      className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-black/70 p-2 text-white
                                 group-hover:bg-black/80 transition"
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </Link>
                  <div className="mt-3">
                    <h3 className="font-mono font-bold text-lg">{c.title}</h3>
                    <p className="opacity-80 text-base underline">{c.issuer}</p>
                    <p className="opacity-70 mt-1 text-sm">{c.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {displayTab == "articles" && (
          <>
            <div className="flex flex-col mx-auto gap-[10px] w-[100%] max-w-[500px] mt-[50px]">
              {blogsArray && blogsArray.map((blog, index) => <DefaultBlogCard blogData={blog} key={index} />)}
            </div>
          </>
        )}

        <div className={styles.pageFooter}>
          <Link href="/resume">
            <p className={`flex items-center gap-[5px] underline font-mono font-bold text-2xl leading-[0.55rem] ${styles.resumeBtn}`}>
              Resume <ArrowUpRight className="w-auto h-[26px]" size={16} />
            </p>
          </Link>
          <p className="text-center opacity-[0.7] max-w-[580px] font-mono font-semibold text-base tracking-tight">
            Built by Aayush Anil Mishra | Last Updated: August 31, 2025.
          </p>
        </div>
      </div>
    </div>
  )
}
