import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "UI/UX Design", level: 90 },
  { name: "Python / AI", level: 75 },
  { name: "Figma", level: 85 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Learn more about me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Photo & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={profileImg}
              alt="Sonaksh Nandan"
              className="rounded-lg w-full max-w-xs mx-auto md:mx-0 mb-6 border border-border"
            />
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Web Designer & AI Enthusiast
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm Sonaksh Nandan — a passionate web designer, entrepreneur, student, and AI enthusiast.
              I love creating beautiful digital experiences and exploring the intersection of design and technology.
              Currently building innovative projects and expanding my skillset in AI and modern web technologies.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
              {[
                ["Degree", "Student"],
                ["City", "India"],
                ["Email", "sonaksh@email.com"],
                ["Freelance", "Available"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-muted-foreground">{label}:</span>{" "}
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Skills
            </h3>
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{name}</span>
                  <span className="text-primary">{level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
