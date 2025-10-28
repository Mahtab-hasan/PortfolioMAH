import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerContentRight,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Mail, Phone, MapPin } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Mayra Clothing",
    description: "A modern e-commerce clothing store offering a smooth shopping experience with stylish collections and a clean, responsive design.",
    features: [
      "Intuitive Shopping Experience:",
      "Browse trendy collections for men, women, and kids",
      "View product details with size, color, and price options",
      "Responsive design ensures a perfect experience on all devices",
      "Smart Product Management (Admin Panel): Add, edit, and manage products with real-time updates",
      "Track orders, inventory, and customer activity",
      "Manage blogs, promotions, and special offers from one place",
      "Blog Section for Fashion Tips: Share fashion guides, styling tips, and seasonal trends",
      "Secure & Seamless Checkout: Smooth cart and checkout process with secure payment options",
      "Scalable & Modern Architecture: Built with Next.js, Tailwind CSS, and deployed on Vercel",
    ],
    impact: [
      "Enhanced user experience with clean and elegant UI",
      "Simplified product and order management for admins",
      "Increased customer engagement through blog and trend updates",
      "Designed to scale easily as the brand and audience grow",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    image: "mayra.png",
    link: "https://mayra-clothing.vercel.app/",
  },
  {
    id: 2,
    title: "Vero Ecommerce",
    description:
      "A complete e-commerce platform built with Next.js, designed to deliver a smooth and modern shopping experience. It includes a dynamic product gallery, advanced cart management, and a fast, responsive design optimized for all devices.",
    features: [
      "Dynamic Product Gallery: View detailed product information with high-quality previews",
      "Advanced Cart Management: Real-time updates for adding, removing, and adjusting items",
      "Secure Checkout System: Seamless and protected payment experience",
      "Responsive UI: Fully optimized for mobile, tablet, and desktop devices",
      "Admin Dashboard: Manage products, orders, and customer data efficiently",
    ],
    impact: [
      "Enhanced customer satisfaction through seamless user flow",
      "Reduced cart abandonment rates with smooth checkout experience",
      "Simplified admin operations through centralized product management",
      "Built for scalability and future feature expansion",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "JavaScript"],
    image: "/ecommers2.png",
    link: "https://vero-e-commerce.vercel.app/",
  },
  {
    id: 3,
    title: "Interactive Reflexology Chart",
    description:
      "A visually engaging and educational web application that maps reflex points on the foot with interactive elements. Built using Next.js and Tailwind CSS, it provides a clean, informative, and responsive experience for users on any device.",
    features: [
      "Interactive Visualization: Highlight and explore different foot reflex zones",
      "Responsive Design: Perfectly adapts to mobile, tablet, and desktop layouts",
      "Educational Tooltips: Provides informative details on hover or click",
      "Smooth Animations: Enhances user engagement with fluid UI transitions",
      "Accessible Design: Ensures readability and clarity for all audiences",
    ],
    impact: [
      "Improved learning experience through interactive visuals",
      "Increased engagement with intuitive and responsive design",
      "Promoted health awareness using modern web technologies",
      "Easily extendable for future body-part reflex charts",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/download (1).png",
    link: "https://foot-reflexology-chart.vercel.app/",
  },


];

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center  p-8 container mx-auto ">
        {/* Hero Section */}
        <div className="logo mx-auto">
          <h1 className="logo">Arpon</h1>
        </div>

        <header className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-10 w-full max-w-6xl border-2 border-white/20 rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 bg-white/5">
          {/* Left side: Text and Button */}
          <div className="text-center md:text-left">
            <h1 className="text-[22px]  sm:text-4xl font-semibold">Mahtab Hasan Arpon</h1>
            <p className="mt-2 text-1xl md:text-3xl text-muted-foreground">Web Developer</p>
            <Button asChild className="mt-6 p-6 text-base-100 bg-[#d3d0d0] hover:bg-[#ffffff]  transition-all hover:-translate-y-1 ">
              <a href="https://drive.google.com/file/d/1srOdUJeXrakdn5nREt2DrlXpWOtuIJMj/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>

          </div>
          {/* Right side: Circular Image */}
          <div className="w-56 h-56 md:w-[350px] md:h-[350px] rounded-full overflow-hidden flex-shrink-0 mt-6 md:mt-0 ">
            <img src="/mahtab.png" alt="" className="w-full h-full object-cover" />
          </div>

        </header>

        {/* ===== About Section ===== */}
        <section id="skills" className="">
          <div className="grid grid-cols-1 gap-3 items-center justify-center md:justify-around w-full max-w-6xl border p-8 rounded-[30px] mt-10 border-2 border-white/20 rounded-3xl md:rounded-[32px] p-3 sm:p-8 md:p-10  bg-white/5">
            <h2 className="text-3xl">About me</h2>
            <p className="text-sm text-muted-foreground">
              Hi, I’m Mahtab Hasan Arpon. I see myself first as a lifelong learner and student of technology, always curious to explore new tools, frameworks, and ways to solve problems. Over time, this curiosity led me to become a Full-Stack Developer, with hands-on experience in Python, C, C++, JavaScript, React, and Next.js.

              I approach every project by first understanding the purpose, goals, and user needs, ensuring that the solutions I build are not just functional, but impactful and user-friendly. I enjoy taking on challenges that push me to learn more while delivering real-world applications.
            </p>
            <h1 className="text-2xl ">My Vision</h1>
            <p className="text-sm text-muted-foreground">
              I aspire to continuously evolve as a Full-Stack Developer, combining strong technical skills with a growth-oriented mindset. In the future, I see myself leading projects that push the boundaries of technology and deliver real-world impact. My goal is to create innovative, scalable, and user-friendly applications that solve meaningful problems for businesses and users alike. I aim to stay ahead of emerging trends, adopt best practices, and mentor others while building solutions that are reliable, maintainable, and future-ready. Through continuous learning, curiosity, and hands-on experience, I want to make a lasting contribution to the world of technology.
            </p>
          </div>
        </section>


        {/* ===== Skills Section ===== */}
        <section
          id="skills"
          className="w-full max-w-6xl border-2 p-4 sm:p-6 md:p-8 pb-10 rounded-[30px] mt-10 mx-auto border-2 border-white/20 rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 bg-white/5"
        >
          <h2 className="text-2xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 ">
            {/* Languages */}
            <div>
              <CardHeader className="p-1">
                <CardTitle className="text-[20px] sm:text-[21px]">Languages</CardTitle>
              </CardHeader>
              <CardContent className="p-1 ">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center ">
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Python</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">C</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">JavaScript</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">C++</li>
                </ul>
              </CardContent>
            </div>

            {/* Stack */}
            <div>
              <CardHeader className="p-1">
                <CardTitle className="text-[20px] sm:text-[21px]">Stack</CardTitle>
              </CardHeader>
              <CardContent className="p-1">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 text-center">
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Django</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">MERN</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Next.js</li>
                </ul>
              </CardContent>
            </div>

            {/* Database */}
            <div>
              <CardHeader className="p-1">
                <CardTitle className="text-[20px] sm:text-[21px]">Database</CardTitle>
              </CardHeader>
              <CardContent className="p-1">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 text-center">
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">MongoDB</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">MySQL</li>
                </ul>
              </CardContent>
            </div>

            {/* Currently Exploring */}
            <div>
              <CardHeader className="p-1">
                <CardTitle className="text-[20px] sm:text-[21px]">Currently Exploring</CardTitle>
              </CardHeader>
              <CardContent className="p-1">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 text-center">
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">TypeScript</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">CI/CD</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Cloud</li>
                  <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">AI Integration</li>
                </ul>
              </CardContent>
            </div>
          </div>
        </section>




        {/* ===== Projects Section ===== */}
        <section
          id="projects"
          className="grid grid-cols-1 gap-6 items-center justify-center w-full max-w-6xl p-4 sm:p-6 md:p-8 mt-10 border-2 border-white/20 rounded-3xl md:rounded-[32px] bg-white/5"
        >
          <h2 className="text-2xl md:text-3xl text-center font-semibold">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((project) => (
              <Drawer key={project.id}>
                {/* Project Card */}
                <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-white/10 bg-white/2">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-lg md:text-xl font-medium">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col">
                    {project.image && (
                      <div className="relative w-full h-[160px] sm:h-[150px] rounded-md overflow-hidden mb-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    )}

                    <p className="text-sm sm:text-base md:text-base">
                      {project.description}
                    </p>

                    <h3 className="text-lg sm:text-lg md:text-xl font-bold mt-4 mb-2">
                      Technologies:
                    </h3>
                    <ul className="grid grid-cols-2 sm:grid-cols-2  gap-2 sm:gap-3 md:gap-4 text-center text-xs sm:text-sm md:text-base">
                      {project.technologies.map((tech, index) => (
                        <li
                          key={index}
                          className="rounded-lg px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2.5 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 bg-white/2 text-ellipsis overflow-hidden whitespace-nowrap"
                          title={tech} // Shows full tech name on hover if it gets cut
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>


                    {/* Drawer Trigger */}
                    <div className="flex mt-4">
                      <DrawerTrigger asChild>
                        <button className="bg-gray-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-5 md:py-2.5 rounded-lg  transition duration-300 hover:bg-gray-400">
                          Details
                        </button>
                      </DrawerTrigger>
                    </div>
                  </CardContent>
                </Card>

                {/* Drawer Content */}

                <DrawerContentRight className="w-[100vw] max-w-[720px] border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl overflow-y-auto  ">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 ">
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative rounded-lg overflow-hidden w-full sm:w-[200px] h-[140px] sm:h-[120px] md:h-[140px] border">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    )}
                    {/* Project Details */}
                    <DrawerHeader className="flex-1 p-0">
                      <DrawerTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-left">
                        {project.title}
                      </DrawerTitle>
                      <ul className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base mt-2">
                        <span className="font-medium text-foreground">Technologies:</span>
                        {project.technologies.map((tech, index) => (
                          <li
                            key={index}
                            className="px-2 py-1 text-xs sm:text-sm "
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </DrawerHeader>
                  </div>




                  <div className="p-4 bg-[#464646] text-white my-5 border rounded-md  border-gray-300">
                    <DrawerDescription className="text-sm sm:text-base text-left text-white my-2">
                      {project.description}
                    </DrawerDescription>
                    {project.features && project.features.length > 0 && (
                      <>
                        <h3 className="text-lg sm:text-lg md:text-xl font-bold mb-2">
                          Features:
                        </h3>
                        <ul className="list-disc pl-5 text-sm sm:text-base md:text-base space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </>
                    )}


                    {project.impact && project.impact.length > 0 && (
                      <>
                        <h3 className="text-lg sm:text-lg md:text-xl font-bold mt-4 mb-2">
                          Impact:
                        </h3>
                        <ul className="list-disc pl-5 text-sm sm:text-base md:text-base space-y-1">
                          {project.impact.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </>
                    )}

                  </div>

                  <div className="">
                    <a href={project.link}target="_blank" rel="noopener noreferrer"className="btn btn primary bg-[#464646] text-white  border rounded-md px-20 border-gray-300 w-full bg-gray-700 hover:bg-gray-400 hover:text-black transition duration-300" >Live demo</a>
                  </div>
                </DrawerContentRight>


              </Drawer>
            ))}
          </div>
        </section>






        {/* ===== courses Section ===== */}
        <section
          id="projects"
          className="grid grid-cols-1 gap-8 items-center justify-center md:justify-around w-full max-w-6xl pb-10 mt-10 border-2 border-white/20 rounded-3xl md:rounded-[32px] p-3 sm:p-5 md:p-10 bg-white/5"
        >
          <h2 className="text-2xl md:text-3xl text-center sm:mt-0 mt-4">Courses and education</h2>

          <div className="grid grid-cols-1 gap-8 sm:mt-0 mt-2 md:grid-cols-2 ">

            <Drawer>
              <DrawerTrigger asChild>
                <Card className="rounded-lg border-2 border-white/20 bg-white/2">
                  <CardHeader>
                    <CardTitle className="flex items-center "> <img className="w-14 h-14" src="/ph_logo-C24KMH6S.svg" alt="" /> <p className="md:text-xl text-sm">Programming hero</p></CardTitle>
                  </CardHeader>
                  <CardContent className="w-full px-4 sm:px-6 md:px-8 ">
                    <p className="text-sm text-justify leading-relaxed text-white">I studied Web Development at Programming Hero, where I gained hands-on experience with HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, Express, and MongoDB. Through practical projects and assignments, I developed skills in full-stack development, including dynamic UI creation, API integration, and server-side programming. I continue to build on this foundation to grow as a versatile developer capable of creating modern, responsive web applications.</p>
                    <h3 className="text-sm md:text-xl font-bold mt-4 mb-2">Technologies:</h3>
                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3  text-center  items-center justify-center text-sm ">
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">HTML</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">CSS</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Tailwind</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">JavaScript</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">React</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Firebase</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Node JS</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Express JS</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20 ">Mongo DB</li>
                    </ul>
                  </CardContent>
                </Card>
              </DrawerTrigger>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild>
                <Card className="rounded-lg border-2 border-white/20 bg-white/2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"> <img className="w-14 h-10 " src="/phitron1.png" alt="" /> <p className="md:text-xl text-sm">Phitron</p></CardTitle>
                  </CardHeader>
                  <CardContent className="w-full ">
                    <p className="text-sm text-justify  text-white">I studied in the Competitive Programming & Software Development Bootcamp, where I gained hands-on experience in core computer science subjects, problem-solving, data structures, algorithms, Python, C/C++, and software development with Django. I participated in over 500 problem-solving challenges, programming contests, and live guided sessions, building practical skills in competitive programming, database management, and full-stack application development. Through rigorous projects, assignments, and intensive coaching, I developed a strong foundation to grow as a skilled programmer ready for software engineering and competitive coding challenges.</p>
                    <h3 className="text-sm md:text-xl font-bold mt-4 mb-2">Technologies:</h3>
                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3  text-center  items-center justify-center text-sm">
                      <li className="rounded-lg  px-1 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">HTML</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">CSS</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">Tailwind</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">JavaScript</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">React</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">Firebase</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">Node JS</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">Express JS</li>
                      <li className="rounded-lg  px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 hover:bg-gray-100/20 transition duration-300 border-2 border-white/20">Mongo DB</li>
                    </ul>
                  </CardContent>
                </Card>
              </DrawerTrigger>
            </Drawer>

          </div>

        </section>




        {/* ===== Contact Section ===== */}
        <section id="contact" className="grid grid-cols-1 gap-8 items-center justify-center md:justify-around w-full max-w-6xl border-2 p-8 pb-10 rounded-[30px] mt-10 border-2 border-white/20 rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 bg-white/5">
          <h2 className="text-2xl md:text-3xl text-center ">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="gap-8 p-6 rounded-xl ">
              <div className="space-y-3 md:space-y-6 m-auto">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-white" />
                  <p className="text-white font-medium">arpon5566@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4 ">
                  <Phone className="h-6 w-6 text-white" />
                  <p className="text-white font-medium">+8801711192205</p>
                </div>
                <div className="flex items-center space-x-4 ">
                  <MapPin className="h-6 w-6 text-white" />
                  <p className="text-white font-medium">Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-center space-x-4 ">
                  <p className="text-white font-medium">Let's Connect</p>
                </div>
                <div className="flex items-center ">
                  <p className="text-white md:text-base text-sm">
                    Feel free to reach out for collaborations, projects, or just a chat!</p>
                </div>

              </div>
            </div>

            <form className="space-y-4" action="https://formspree.io/f/xyzwkewl" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-[#363d5071] text-white px-3 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-[#363d5071] text-white px-3 py-2" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-[#363d5071]  px-3 py-2 text-white"></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </section>

      </div>
    </main>



  );
}