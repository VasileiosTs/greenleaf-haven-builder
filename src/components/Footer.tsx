import { Facebook, Instagram, Linkedin, Send, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-sage-300 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">BloominTales</h3>
            <p className="text-sage-100">Let's Create a Greener Tomorrow</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sage-100 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sage-100 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sage-100 transition-colors">
                <img 
                  src="/lovable-uploads/7a6ee049-d995-4058-9b8f-7e42f64b0407.png" 
                  alt="TikTok" 
                  className="w-5 h-5 filter invert brightness-0 hover:brightness-90 transition-all"
                />
              </a>
              <a href="#" className="hover:text-sage-100 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sage-100 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sage-100 transition-colors">
                <img 
                  src="/lovable-uploads/c4fc8c24-735c-47d9-9f6b-73b9aeceec8e.png" 
                  alt="Pinterest" 
                  className="w-5 h-5 filter invert brightness-0 hover:brightness-90 transition-all"
                />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sage-100 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-sage-100 transition-colors">Packages</a></li>
              <li><a href="#" className="hover:text-sage-100 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-sage-100 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>info@bloomintales.com</li>
              <li>Athens, Greece</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for plant care tips and exclusive offers</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/70"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-sage-100 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p>© 2025 BloominTales – All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};