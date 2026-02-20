import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Mail, Camera, Video, Heart, Sparkles, Smartphone, Check, ChevronRight } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="https://res.cloudinary.com/dycoeugum/image/upload/v1771593761/LOGO_sxvhmu.png" 
            alt="Logo" 
            className={`h-20 md:h-28 w-auto transition-all duration-500 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
          />
          <span className={`font-serif text-lg tracking-[0.1em] hidden sm:block transition-colors duration-500 ${isScrolled ? 'text-taupe' : 'text-white'}`}>
            La Création Moments
          </span>
        </div>

        <div className={`hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-light transition-colors duration-500 ${isScrolled ? 'text-taupe' : 'text-white'}`}>
          <a href="#accueil" className="hover:opacity-50 transition-opacity">Accueil</a>
          <a href="#a-propos" className="hover:opacity-50 transition-opacity">À propos</a>
          <a href="#portfolio" className="hover:opacity-50 transition-opacity">Portfolio</a>
          <a href="#services" className="hover:opacity-50 transition-opacity">Services</a>
          <a href="#tarifs" className="hover:opacity-50 transition-opacity">Tarifs</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>

        <button 
          className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-taupe' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-8 py-12 flex flex-col gap-8 text-center uppercase tracking-[0.3em] text-[10px] text-taupe"
          >
            <a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a>
            <a href="#a-propos" onClick={() => setIsOpen(false)}>À Propos</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#tarifs" onClick={() => setIsOpen(false)}>Tarifs</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://res.cloudinary.com/dycoeugum/image/upload/v1771592581/B76DE353-A870-4A91-B02A-EC182411A396_uwvmmq.jpg" 
          alt="Wedding" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl flex flex-col items-center">
        <motion.img 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          src="https://res.cloudinary.com/dycoeugum/image/upload/v1771593761/LOGO_sxvhmu.png"
          alt="Logo"
          className="h-32 md:h-48 w-auto mb-12 brightness-0 invert opacity-90"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-4xl md:text-7xl font-serif mb-10 leading-[1.1] font-light"
        >
          Vivre le moment, saisir l’émotion, <br className="hidden md:block" /> raconter votre histoire.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#a-propos" className="px-10 py-4 bg-white text-black rounded-full tracking-widest text-xs uppercase font-medium hover:bg-white/90 transition-all">
            Découvrir mon univers
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-white/40"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="a-propos" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
            <img 
              src="https://res.cloudinary.com/dycoeugum/image/upload/v1771592581/3D94618F-383D-4FD4-A158-D0E68BAD8A60_jxwyul.jpg" 
              alt="Laura" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl mb-10 font-light leading-tight uppercase tracking-widest">Je m’appelle Laura</h2>
          <div className="space-y-8 text-taupe/70 leading-relaxed font-light text-lg max-w-lg">
            <p>
              Créatrice de <span className="font-serif italic">La Création Moments</span>, je raconte à travers ma caméra des histoires d’amour et d’émotions authentiques.
            </p>
            <p className="border-l-2 border-taupe/10 pl-6 py-2">
              J’utilise un <span className="font-medium text-taupe underline underline-offset-8 decoration-taupe/20">iPhone 17 Pro Max</span>, symbole d’une création spontanée et moderne où la magie vient du regard avant tout. Cette approche me permet de rester discrète, au plus proche de vos émotions.
            </p>
            <p className="font-accent italic text-xl text-taupe/90">
              "Chaque image est un souvenir intemporel, une émotion à revivre."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const items = [
    "https://res.cloudinary.com/dycoeugum/image/upload/v1771592581/B76DE353-A870-4A91-B02A-EC182411A396_uwvmmq.jpg",
    "https://res.cloudinary.com/dycoeugum/image/upload/v1771592581/60F9F798-E207-41F6-9954-C275F9BACAB2_uvjz0g.jpg",
    "https://res.cloudinary.com/dycoeugum/image/upload/v1771592591/5B6B1973-F532-47C4-8560-810176A97E66_u68re8.jpg",
    "https://res.cloudinary.com/dycoeugum/image/upload/v1771592591/13675183-7A12-44EF-9666-3CDC319FCADB_twuqj1.jpg",
    "https://res.cloudinary.com/dycoeugum/image/upload/v1771592590/216A859C-FDB1-49C0-873F-68ED9B08B17D_wwwcn9.jpg",
    "https://res.cloudinary.com/dycoeugum/image/upload/v1771592588/D684CECA-810E-4BBE-B684-7A45DCA68AFD_ecf042.jpg"
  ];

  return (
    <section id="portfolio" className="section-padding bg-cream/30 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-widest">Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer shadow-sm"
            >
              <img 
                src={src} 
                alt={`Portfolio ${index}`} 
                className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="https://www.instagram.com/lacreation.moments/" target="_blank" rel="noopener noreferrer" className="btn-premium">
            Suivre mes nouvelles créations
          </a>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Captation Photo & Vidéo",
      desc: "Une couverture artistique et discrète de vos moments les plus précieux."
    },
    {
      title: "Contenu Digital Premium",
      desc: "Réels et stories cinématographiques pour un partage instantané."
    },
    {
      title: "Storytelling Émotionnel",
      desc: "Une mise en valeur de votre histoire à travers un regard sensible."
    }
  ];

  return (
    <section id="services" className="section-padding bg-taupe text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-light mb-24 uppercase tracking-widest">Mes Services</h2>
        
        <div className="grid md:grid-cols-3 gap-20">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-px h-12 bg-white/20 mb-8"></div>
              <h3 className="text-2xl font-serif mb-6 font-light italic">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "L'Essentiel", price: "200€", hours: "4h de présence", features: ["Moments clés", "Contenu digital", "Livraison 48h"] },
    { name: "L'Intense", price: "350€", hours: "8h de présence", features: ["Émotions & détails", "Contenu complet", "Accompagnement"] },
    { name: "L'Intégrale", price: "500€", hours: "Journée complète", features: ["Préparatifs au soir", "Storytelling premium", "Livraison prioritaire"] }
  ];

  return (
    <section id="tarifs" className="section-padding bg-stone-50 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-widest">Tarifs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="p-12 border border-taupe/10 bg-white flex flex-col items-center text-center hover:border-taupe/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-2xl font-serif mb-2 font-light">{p.name}</h3>
              <span className="text-[10px] uppercase tracking-widest text-taupe/40 mb-8">{p.hours}</span>
              <div className="text-3xl font-serif mb-10 text-taupe/90">{p.price}</div>
              <ul className="space-y-4 mb-12 flex-grow">
                {p.features.map((f, fi) => (
                  <li key={fi} className="text-sm text-taupe/60 font-light">{f}</li>
                ))}
              </ul>
              <a href="#contact" className="w-full py-4 bg-taupe text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-taupe/90 transition-colors flex items-center justify-center gap-2">
                Réserver <ChevronRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-8 uppercase tracking-widest">CRÉONS ENSEMBLE VOS SOUVENIRS</h2>
          <p className="text-taupe/70 font-light text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Remplissez le formulaire ci-dessous ou contactez-moi directement sur Instagram pour me parler de votre projet.
          </p>
          <a 
            href="https://www.instagram.com/lacreation.moments/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-taupe hover:text-taupe/60 transition-colors uppercase tracking-[0.2em] text-[10px] font-medium border-b border-taupe/20 pb-1"
          >
            <Instagram size={14} /> M’écrire sur Instagram
          </a>
        </div>

        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 bg-stone-50/50 p-8 md:p-12 rounded-2xl border border-taupe/5"
        >
          {/* Hidden input for Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>
          
          <div className="space-y-10">
            <div className="border-b border-taupe/20 pb-4 focus-within:border-taupe transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-taupe/40 block mb-2">Nom & Prénom</label>
              <input name="nom" required type="text" className="w-full bg-transparent focus:outline-none font-light text-taupe" placeholder="Votre nom" />
            </div>
            <div className="border-b border-taupe/20 pb-4 focus-within:border-taupe transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-taupe/40 block mb-2">E-mail</label>
              <input name="email" required type="email" className="w-full bg-transparent focus:outline-none font-light text-taupe" placeholder="votre@email.com" />
            </div>
            <div className="border-b border-taupe/20 pb-4 focus-within:border-taupe transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-taupe/40 block mb-2">Date & Lieu</label>
              <input name="date_lieu" required type="text" className="w-full bg-transparent focus:outline-none font-light text-taupe" placeholder="Ex: 12 Juin 2026, Paris" />
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="border-b border-taupe/20 pb-4 focus-within:border-taupe transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-taupe/40 block mb-2">Type d'événement</label>
              <select name="evenement" required className="w-full bg-transparent focus:outline-none font-light appearance-none text-taupe">
                <option>Mariage</option>
                <option>Fiançailles</option>
                <option>Henné</option>
                <option>EVJF</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="border-b border-taupe/20 pb-4 focus-within:border-taupe transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-taupe/40 block mb-2">Votre message</label>
              <textarea name="message" required rows={3} className="w-full bg-transparent focus:outline-none font-light resize-none text-taupe" placeholder="Dites-moi tout..."></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-taupe text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-taupe/90 transition-all shadow-lg">
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-8 bg-taupe text-white text-center relative overflow-hidden">
      <div className="relative z-10">
        <img 
          src="https://res.cloudinary.com/dycoeugum/image/upload/v1771593761/LOGO_sxvhmu.png" 
          alt="Logo" 
          className="h-32 md:h-40 w-auto mx-auto mb-10 brightness-0 invert opacity-90"
        />
        <p className="text-[10px] uppercase tracking-widest text-white/30">
          © 2026 LA CRÉATION MOMENTS — Saisir l'éternité
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

