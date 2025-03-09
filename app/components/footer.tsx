import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-8 px-4">
      <div className="max-w-7xl mx-auto border-b border-gray-200 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2 boxclass p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-semibold text-blue-600">AYA</span>
            </div>
          </div>

          <div className="boxclass p-4 rounded-lg">
            <h3 className="text-gray-400 font-medium">Navigácia</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-blue-950">Výhody</a></li>
              <li><a href="#" className="hover:text-blue-950">Ako to funguje?</a></li>
              <li><a href="#" className="hover:text-blue-950">Top obchodníci</a></li>
              <li><a href="#" className="hover:text-blue-950">Recenzie</a></li>
              <li><a href="#" className="hover:text-blue-950">FAQs</a></li>
            </ul>
          </div>

          <div className="boxclass p-4 rounded-lg">
            <h3 className="text-gray-400 font-medium">Dokumenty</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-gray-800">Zásady ochrany osobných údajov</a></li>
              <li><a href="#" className="hover:text-gray-800">Všeobecné obchodné podmienky</a></li>
            </ul>
          </div>

          <div className="boxclass p-4 rounded-lg">
            <h3 className="text-gray-400 font-medium">Kontakt</h3>
            <div className="flex items-center gap-2 mt-2">
              <Phone className="w-5 h-5 text-gray-600" />
              <span>+421 951 556 767</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5 text-gray-600" />
              <span>info@info.sk</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaInstagram /></a>
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
              <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaTelegram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-7xl mx-auto mt-6 text-gray-400 text-sm">
        <span>&copy; AYA • Copyright &copy; 2024</span>
        <a href="#" className="hover:text-gray-800">Podmienky používania</a>
      </div>
    </footer>
  );
};

export default Footer;
