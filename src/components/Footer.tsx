import { Link } from "react-router-dom";
import Img from "./Img";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    <footer className="bg-[#16243A] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <Img
                  name="logoFooter"
                  sizes="160px"
                  className="h-[85px] w-auto object-contain"
                />
                <div className="flex flex-col justify-start text-center">
                  <div>
                    <h3 className="text-2xl font-bold">Der Die Das</h3>
                    <p className="text-yellow-400 text-lg">
                      Centar za njemački jezik
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-white leading-relaxed text-base pt-6 text-center">
                Dobrodošli u jedini specijalizovani centar u Bosni i
                Hercegovini, isključivo namijenjen za učenje njemačkog jezika.
                Od 2018. godine uspješno poslujemo, sa sjedištem u Banjaluci.
              </p>
            </div>
            <div className="space-y-5 lg:col-span-1 text-center">
              <h3 className="text-xl font-bold text-yellow-400">Nastava</h3>
              <div className="space-y-2">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/individualni-casovi-odrasli"
                        onClick={scrollToTop}
                        className="text-white hover:text-yellow-400 transition-colors duration-300 group text-base inline-flex items-center min-h-[44px]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Individualni časovi za odrasle
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/individualni-casovi-online"
                        onClick={scrollToTop}
                        className="text-white hover:text-yellow-400 transition-colors duration-300 group text-base inline-flex items-center min-h-[44px]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Individualni časovi online
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/kursevi-za-djecu"
                        onClick={scrollToTop}
                        className="text-white hover:text-yellow-400 transition-colors duration-300 group text-base inline-flex items-center min-h-[44px]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Kursevi za djecu
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/kursevi-za-odrasle"
                        onClick={scrollToTop}
                        className="text-white hover:text-yellow-400 transition-colors duration-300 group text-base inline-flex items-center min-h-[44px]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Kursevi za odrasle
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/osd"
                        onClick={scrollToTop}
                        className="text-white hover:text-yellow-400 transition-colors duration-300 group text-base inline-flex items-center min-h-[44px]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Priprema za ÖSD ispit
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/goethe"
                        onClick={scrollToTop}
                        className="text-white hover:text-yellow-400 transition-colors duration-300 group text-base inline-flex items-center min-h-[44px]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Priprema za Goethe ispit
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/test-znanja"
                        onClick={scrollToTop}
                        className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group text-base inline-flex items-center min-h-[44px] font-medium"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Besplatni test znanja
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-1 md:col-span-2 text-center">
              <h3 className="text-xl font-bold text-yellow-400">
                Kontakt informacije
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-medium text-base">Adresa</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Der+Die+Das+-+%C5%A0kola+Njema%C4%8Dkog+Jezika+%7C+Banja+Luka/@44.7650507,17.1862784,18.25z/data=!4m6!3m5!1s0x475e03b23a8d4a17:0xe22d2d58a238b141!8m2!3d44.7652317!4d17.1870315!16s%2Fg%2F11l6s3k8n8?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 text-sm mt-1 inline-flex items-center min-h-[44px]"
                  >
                    Slavka Rodića 1, Banja Luka
                    <ExternalLink className="w-3 h-3 ml-1 inline-block" />
                  </a>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-medium text-base">Telefon</p>
                  </div>
                  <a
                    href="tel:+38765909845"
                    className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 text-sm mt-1 inline-flex items-center min-h-[44px]"
                  >
                    +387 65 909 845
                  </a>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-medium text-base">Email</p>
                  </div>
                  <a
                    href="mailto:derdiedas.centar@gmail.com"
                    className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 text-sm mt-1 inline-flex items-center min-h-[44px]"
                  >
                    derdiedas.centar@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-base">Pratite nas</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.facebook.com/p/Der-Die-Das-Centar-Za-Njema%C4%8Dki-Jezik-61558461462657/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/derdiedas.banjaluka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="viber://chat?number=+38765909845"
                    className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <svg
                      fill="#ffffff"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20.19 2.337c-.595-.545-3.005-2.297-8.372-2.32 0 0-6.333-.379-9.418 2.452-1.716 1.716-2.317 4.229-2.386 7.346s-.146 8.959 5.485 10.547h.005l-.005 2.419s-.037.98.607 1.177c.778.244 1.238-.502 1.983-1.304.408-.441.97-1.087 1.397-1.58.6.059 1.296.092 2.001.092 1.827 0 3.602-.225 5.298-.649l-.15.032c.778-.253 5.18-.816 5.892-6.657.744-6.03-.354-9.834-2.337-11.555zm.652 11.115c-.607 4.875-4.173 5.185-4.829 5.395-1.432.364-3.076.572-4.769.572-.486 0-.968-.017-1.445-.051l.064.004s-2.438 2.939-3.197 3.703c-.248.248-.521.228-.516-.267 0-.323.019-4.018.019-4.018-4.767-1.322-4.491-6.298-4.435-8.897s.544-4.735 1.997-6.169c2.612-2.367 7.989-2.016 7.989-2.016 4.543.019 6.718 1.388 7.224 1.847 1.674 1.435 2.527 4.867 1.898 9.896zm-6.511-3.788v.014c0 .168-.136.304-.304.304-.163 0-.296-.128-.303-.289v-.001c.004-.042.007-.092.007-.141 0-.801-.649-1.45-1.45-1.45-.03 0-.06.001-.089.003h.004c-.161-.009-.288-.141-.288-.303 0-.168.136-.304.304-.304h.017-.001c.02-.001.045-.001.069-.001 1.126 0 2.038.912 2.038 2.038 0 .046-.002.092-.005.137v-.006zm.951.531c.047-1.988-1.195-3.544-3.553-3.718-.159-.011-.283-.143-.283-.303 0-.168.136-.304.304-.304.007 0 .015 0 .022.001h-.001.017c2.267 0 4.106 1.838 4.106 4.106 0 .081-.002.162-.007.242l.001-.011c-.004.165-.138.296-.303.296-.168 0-.304-.136-.304-.304 0-.003 0-.005 0-.008zm2.2.629v.002c0 .168-.136.304-.304.304s-.302-.135-.303-.301c-.024-3.822-2.573-5.903-5.662-5.925-.168 0-.303-.136-.303-.303s.136-.303.303-.303c3.459.024 6.239 2.411 6.267 6.525zm-.525 4.598v.009c-.506.891-1.453 1.875-2.428 1.561l-.009-.014c-1.832-.684-3.416-1.578-4.831-2.679l.041.03c-.743-.592-1.396-1.245-1.969-1.963l-.019-.025c-.509-.638-.986-1.352-1.402-2.106l-.04-.079c-.457-.746-.87-1.608-1.193-2.513l-.03-.098c-.314-.975.665-1.922 1.561-2.428h.009c.13-.083.288-.133.458-.133.267 0 .505.123.662.314l.001.002s.581.693.83 1.036c.234.319.549.83.712 1.115.094.147.149.327.149.52 0 .288-.124.547-.322.726l-.001.001-.562.45c-.155.15-.251.36-.251.592 0 .023.001.045.003.067v-.003c.579 1.903 2.048 3.372 3.91 3.941l.042.011c.019.002.042.003.064.003.232 0 .442-.096.592-.25l.45-.562c.18-.199.439-.323.727-.323.193 0 .372.056.524.152l-.004-.002c.813.463 1.516.972 2.157 1.549l-.011-.01c.192.154.313.389.313.652 0 .169-.05.326-.137.458l.002-.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/38765909845"
                    className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-xs font-bold">W</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0E1626] border-t border-gray-700">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © Der Die Das - Centar za njemački jezik. Sva prava zadržana.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
