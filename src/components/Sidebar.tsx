import { useState } from "react";
import { Home, User, FolderOpen, Image, Mail, Menu, X } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "portfolio", label: "Portfolio", icon: Image },
  { id: "contact", label: "Contact", icon: Mail },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-primary-foreground p-2 rounded-md"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-sidebar-bg z-40 flex flex-col items-center py-8 border-r border-border transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Profile */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src={profileImg}
            alt="Sonaksh Nandan"
            className="w-24 h-24 rounded-full border-4 border-border object-cover mb-3"
          />
          <h2 className="text-foreground font-heading font-semibold text-lg">
            Sonaksh Nandan
          </h2>
        </div>

        {/* Social icons */}
        <div className="flex gap-2 mb-8">
          {["twitter", "github", "linkedin", "instagram"].map((s) => (
            <a
              key={s}
              href="#"
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors text-xs"
            >
              {s[0].toUpperCase()}
            </a>
          ))}
        </div>

        {/* Nav */}
        <nav className="flex flex-col w-full px-4 gap-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm transition-colors ${
                active === id
                  ? "text-primary bg-sidebar-hover"
                  : "text-sidebar-fg hover:text-primary hover:bg-sidebar-hover"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
