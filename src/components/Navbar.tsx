
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-ai-dark/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold font-heading">
          <span className="gradient-heading">Numan Sabir</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-ai-dark px-6 py-5 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 w-full">
              <a href="#contact" onClick={() => setIsOpen(false)}>Get in Touch</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
