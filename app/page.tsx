import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
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
    description: "Developed a modern e-commerce platform for a premium apparel brand. The site offers a fast, responsive user experience with dynamic product filtering and a persistent shopping cart, built using Next.js, TypeScript, and MongoDB.",
    features: ["Feature A", "Feature B", "Feature C"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    image: "/ecommers2.png",
  },
  {
    id: 2,
    title: "Vero Ecommerce",
    description: "A full-featured e-commerce storefront built with Next.js, offering a seamless shopping experience from product discovery to checkout. Features include a dynamic product gallery, state management for the cart, and a responsive design for all devices.",
    features: ["Feature D", "Feature E"],
    technologies: ["Next.js", "CSS", "JavaScript", "TypeScript", "MongoDB"],
    image: "/ecommers2.png",
  },
  {
    id: 3,
    title: "Interactive Reflexology Chart",
    description: "A responsive and interactive web application that visualizes the foot reflexology chart. Built with Next.js and Tailwind CSS to provide a clear and educational user experience on any device.",
    features: ["Feature F", "Feature G", "Feature H"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/download (1).png",
  },
  {
    id: 3,
    title: "Interactive Reflexology Chart",
    description: "A responsive and interactive web application that visualizes the foot reflexology chart. Built with Next.js and Tailwind CSS to provide a clear and educational user experience on any device.",
    features: ["Feature F", "Feature G", "Feature H"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/download (1).png",
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

        <header className=" flex flex-col md:flex-row items-center justify-center md:justify-between mt-10 w-full max-w-6xl border-2 p-10 rounded-[30px]">
          {/* Left side: Text and Button */}
          <div className="text-center md:text-left">
            <h1 className="text-[22px]  sm:text-4xl font-semibold">Mahtab Hasan Arpon</h1>
            <p className="mt-2 text-1xl md:text-3xl text-muted-foreground">Web Developer</p>
            <Button asChild className="mt-6 p-6 text-base-100 bg-[#979797] hover:bg-[#14142b]  transition-all hover:-translate-y-1">
              <a href="https://drive.google.com/file/d/1p1YL6K7ds0FuO5g1sfNy5wTmH5SLpbV2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>
          </div>
          {/* Right side: Circular Image */}
          <div className="w-56 h-56 md:w-[350px] md:h-[350px] rounded-full overflow-hidden flex-shrink-0 mt-6 md:mt-0">
            <img src="/mahtab.png" alt="" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* ===== About Section ===== */}
        <section id="skills" className="">
          <div className="grid grid-cols-1 gap-8 items-center justify-center md:justify-around w-full max-w-6xl border-2 p-8 rounded-[30px] mt-10">
            <h2 className="text-3xl">About me</h2>
            <p className="text-sm text-muted-foreground">
              I am Mahtab Hasan Arpon, a dedicated Full-Stack Developer with experience in modern web technologies. My technical expertise spans multiple programming languages and frameworks, including Python, C, C++, JavaScript, React, and Next.js. I am committed to developing high- performance, scalable, and user-friendly web applications.
            </p>
            <h1 className="text-2xl ">My Vision</h1>
            <p className="text-sm text-muted-foreground">
              I am Mahtab Hasan Arpon, a dedicated Full-Stack Developer with experience in modern web technologies. My technical expertise spans multiple programming languages and frameworks, including Python, C, C++, JavaScript, React, and Next.js. I am committed to developing high- performance, scalable, and user-friendly web applications.
            </p>
            <p className="text-sm text-muted-foreground">
              I am Mahtab Hasan Arpon, a dedicated Full-Stack Developer with experience in modern web technologies. My technical expertise spans multiple programming languages and frameworks, including Python, C, C++, JavaScript, React, and Next.js. I am committed to developing high- performance, scalable, and user-friendly web applications.
            </p>
          </div>
        </section>


        {/* ===== Skills Section ===== */}
        <section id="skills" className="grid grid-cols-1 gap-8 items-center justify-center md:justify-around w-full max-w-6xl border-2 p-8 pb-10 rounded-[30px] mt-10 ">
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-1">
            <h2 className="md:text-3xl text-2xl ">Skills & Technologies</h2>

            <CardHeader className="p-1">
              <CardTitle className="text-[21px]">1. Languages</CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 text-center gap-3 sm:gap-10">
                <li data-skill="python" className="rounded-lg border-2 px-10 py-3 sm:px-20">Python</li>
                <li data-skill="c" className="rounded-lg border-2 px-10 py-3 sm:px-20">C</li>
                <li data-skill="javascript" className="rounded-lg border-2 px-10 py-3 sm:px-20">JavaScript</li>
                <li data-skill="cpp" className="rounded-lg border-2 px-10 py-3 sm:px-20">C++</li>
              </ul>
            </CardContent>

            <CardHeader className="p-1">
              <CardTitle className="text-[21px]">Stack</CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <ul className="grid grid-cols-1 sm:grid-cols-3 text-center gap-3 sm:gap-10">
                <li data-skill="django" className="rounded-lg border-2 px-10 py-3 sm:px-20">Django</li>
                <li data-skill="react" className="rounded-lg border-2 px-10 py-3 sm:px-20">MERN</li>
                <li data-skill="nextjs" className="rounded-lg border-2 px-10 py-3 sm:px-20">Next.js</li>
              </ul>
            </CardContent>

            <CardHeader className="p-1">
              <CardTitle className="text-[21px]">Database</CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-3 sm:gap-10">
                <li data-skill="MongoDB" className="rounded-lg border-2 px-10 py-3 sm:px-20">MongoDB</li>
                <li data-skill="MySQL" className="rounded-lg border-2 px-10 py-3 sm:px-20">MySQL</li>
              </ul>
            </CardContent>

            <CardHeader className="p-1">
              <CardTitle className="text-[21px]">Currently Exploring</CardTitle>
            </CardHeader>
            <CardContent className="p-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-3 sm:gap-10">
                <li data-skill="TypeScript" className="rounded-lg border-2 px-10 py-3 sm:px-18">TypeScript</li>
                <li data-skill="CI/CD" className="rounded-lg border-2 px-10 py-3 sm:px-18">CI/CD</li>
                <li data-skill="Cloud" className="rounded-lg border-2 px-10 py-3 sm:px-18">Cloud</li>
                <li data-skill="AI Integration" className="rounded-lg border-2 px-10 py-3 sm:px-18">AI Integration</li>
              </ul>
            </CardContent>
          </div>
        </section>



        {/* ===== Projects Section ===== */}
        <section
          id="projects"
          className="grid grid-cols-1 gap-8 items-center justify-center md:justify-around w-full max-w-6xl border-2 p-8 pb-10 rounded-[30px] mt-10"
        >
          <h2 className="text-3xl">Projects</h2>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            {projects.map((project) => (
              <Drawer key={project.id}>
                <DrawerTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="md:text-base text-sm">{project.description}</p>

                      <h3 className="text-xl font-bold mt-4 mb-2">Technologies:</h3>

                      {/* ✅ Dynamic technology list */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-3 sm:gap-1 items-center justify-center text-sm">
                        {project.technologies.map((tech, index) => (
                          <li
                            key={index}
                            data-skill={tech.toLowerCase()}
                            className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      {project.image && (
                        <div className="mt-4 rounded-md overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={450}          // ✅ অবশ্যই width দিতে হবে
                            height={450}         // ✅ height ও দিতে হবে
                            className="rounded-md object-cover"
                            priority={false}     // optional: first image হলে true দাও
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>{project.title}</DrawerTitle>
                    <DrawerDescription className="md:text-base text-sm">{project.description}</DrawerDescription>
                  </DrawerHeader>

                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Features:</h3>
                    <ul className="list-disc pl-5">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold mt-4 mb-2">Technologies:</h3>
                    <ul className="list-disc pl-5">
                      {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </DrawerContent>
              </Drawer>
            ))}
          </div>
        </section>



        {/* ===== courses Section ===== */}
        <section
          id="projects"
          className="grid grid-cols-1 gap-8 items-center justify-center md:justify-around w-full max-w-6xl border-2 p-8 pb-10 rounded-[30px] mt-10"
        >
          <h2 className="text-3xl">Courses and education</h2>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">

            <Drawer>
              <DrawerTrigger asChild>
                <Card >
                  <CardHeader>
                    <CardTitle className="flex items-center "> <img className="w-14 h-14" src="/ph_logo-C24KMH6S.svg" alt="" /> <p className="md:text-xl text-sm">Programming hero</p></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="md:text-base text-sm">I studied Web Development at Programming Hero, where I gained hands-on experience with HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, Express, and MongoDB. Through practical projects and assignments, I developed skills in full-stack development, including dynamic UI creation, API integration, and server-side programming. I continue to build on this foundation to grow as a versatile developer capable of creating modern, responsive web applications.</p>
                    <h3 className="text-xl font-bold mt-4 mb-2">Technologies:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-3 sm:gap-1 items-center justify-center text-sm">
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">HTML</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">CSS</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Tailwind</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">JavaScript</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">React</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Firebase</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Node JS</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Express JS</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Mongo DB</li>
                    </ul>
                  </CardContent>
                </Card>
              </DrawerTrigger>
            </Drawer>

            <Drawer>
              <DrawerTrigger asChild>
                <Card >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"> <img className="w-14 h-10 " src="/phitron1.png" alt="" /> <p className="md:text-xl text-sm">Phitron</p></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="md:text-base text-sm">I studied in the Competitive Programming & Software Development Bootcamp, where I gained hands-on experience in core computer science subjects, problem-solving, data structures, algorithms, Python, C/C++, and software development with Django. I participated in over 500 problem-solving challenges, programming contests, and live guided sessions, building practical skills in competitive programming, database management, and full-stack application development. Through rigorous projects, assignments, and intensive coaching, I developed a strong foundation to grow as a skilled programmer ready for software engineering and competitive coding challenges.</p>
                    <h3 className="text-xl font-bold mt-4 mb-2">Technologies:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-3 sm:gap-1 items-center justify-center text-sm">
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">HTML</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">CSS</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Tailwind</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">JavaScript</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">React</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Firebase</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Node JS</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Express JS</li>
                      <li className="rounded-lg border-2 px-6 py-3 sm:px-0 hover:bg-white/10 transition duration-300  md:text-base text-xs">Mongo DB</li>
                    </ul>
                  </CardContent>
                </Card>
              </DrawerTrigger>
            </Drawer>

          </div>

        </section>




        {/* ===== Contact Section ===== */}
        <section id="contact" className="grid grid-cols-1 gap-8 items-center justify-center md:justify-around w-full max-w-6xl border-2 p-8 pb-10 rounded-[30px] mt-10">
          <h2 className="text-3xl ">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="gap-8 p-6 rounded-xl ">
              <div className="space-y-6 m-auto">
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