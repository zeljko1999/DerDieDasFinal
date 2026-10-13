import { useState } from "react";
import Img from "./Img";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { trackEvent } from "../lib/analytics";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),
    [openDropdown, setOpenDropdown] = useState<string | null>(null),
    navigate = useNavigate(),
    location = useLocation(),
    toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      setOpenDropdown(null);
    },
    toggleDropdown =
      (menu: string) => (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenDropdown(openDropdown === menu ? null : menu);
      },
    scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    },
    goToSection = (path: string, sectionId: string) => {
      location.pathname !== path
        ? navigate(path, {
            state: {
              scrollToId: sectionId,
            },
          })
        : scrollToSection(sectionId);
      setIsMobileMenuOpen(false);
    },
    handleLinkClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
      setIsMobileMenuOpen(false);
    };
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center space-x-4 flex-shrink-0"
          >
            <Img
              name="logo"
              sizes="(min-width: 768px) 200px, 150px"
              className="h-[65px] w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden lg:flex items-center justify-center flex-grow gap-5 xl:gap-7">
            <div className="relative">
              <button
                onClick={toggleDropdown("kursevi")}
                aria-expanded={openDropdown === "kursevi"}
                className="flex items-center font-bold text-[15px] text-gray-600 hover:text-yellow-500 transition"
              >
                KURSEVI
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "kursevi" && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2">
                  <Link
                    to="/kursevi-za-odrasle"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                  >
                    Kursevi za odrasle
                  </Link>
                  <Link
                    to="/kursevi-za-djecu"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                  >
                    Kursevi za djecu
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown("individualni")}
                aria-expanded={openDropdown === "individualni"}
                className="flex items-center font-bold text-[15px] text-gray-700 hover:text-yellow-500 transition"
              >
                INDIVIDUALNI ČASOVI
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "individualni" && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2">
                  <Link
                    to="/individualni-casovi-odrasli"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                  >
                    Individualni časovi za odrasle
                  </Link>
                  <Link
                    to="/individualni-casovi-djeca"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                  >
                    Individualni časovi za djecu
                  </Link>
                  <Link
                    to="/individualni-casovi-online"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                  >
                    Individualni časovi online
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/osd"
              onClick={handleLinkClick}
              className="text-gray-700 font-bold text-[15px] hover:text-yellow-500 transition"
            >
              ÖSD ISPIT
            </Link>
            <Link
              to="/goethe"
              onClick={handleLinkClick}
              className="text-gray-700 font-bold text-[15px] hover:text-yellow-500 transition"
            >
              GOETHE ISPIT
            </Link>
            <button
              onClick={() => goToSection("/", "contact")}
              className="text-gray-700 font-bold text-[15px] hover:text-yellow-500 transition"
            >
              KONTAKT
            </button>

            {/* Istaknuto jer je test glavni ulaz za posjetioce koji se još nisu odlučili. */}
            <Link
              to="/test-znanja"
              onClick={() => {
                trackEvent("test_open", { from: "nav" });
                handleLinkClick();
              }}
              className="inline-flex items-center bg-yellow-500 text-black font-bold text-[13px] px-4 py-2
                         rounded-lg hover:bg-yellow-400 transition whitespace-nowrap"
            >
              BESPLATNI TEST
            </Link>
          </nav>
          <button
            className="lg:hidden ml-auto text-gray-700 focus:outline-none p-3 -m-3"
            aria-label={isMobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container mx-auto px-4 py-3">
            <div className="space-y-1 border-t border-black">
              <button
                onClick={toggleDropdown("kursevi")}
                aria-expanded={openDropdown === "kursevi"}
                className="flex items-center w-full py-2 font-bold text-[15px] text-gray-700 min-h-[44px]"
              >
                KURSEVI
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "kursevi" && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/kursevi-za-odrasle"
                    onClick={() => {
                      handleLinkClick();
                      toggleMobileMenu();
                    }}
                    className="block py-2 text-gray-700 min-h-[44px] flex items-center"
                  >
                    Kursevi za odrasle
                  </Link>
                  <Link
                    to="/kursevi-za-djecu"
                    onClick={() => {
                      handleLinkClick();
                      toggleMobileMenu();
                    }}
                    className="block py-2 text-gray-700 min-h-[44px] flex items-center"
                  >
                    Kursevi za djecu
                  </Link>
                </div>
              )}
              <button
                onClick={toggleDropdown("individualni")}
                aria-expanded={openDropdown === "individualni"}
                className="flex items-center w-full py-2 font-bold text-[15px] text-gray-700 min-h-[44px]"
              >
                INDIVIDUALNI ČASOVI
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "individualni" && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/individualni-casovi-odrasli"
                    onClick={() => {
                      handleLinkClick();
                      toggleMobileMenu();
                    }}
                    className="block py-2 text-gray-700 min-h-[44px] flex items-center"
                  >
                    Individualni časovi za odrasle
                  </Link>
                  <Link
                    to="/individualni-casovi-djeca"
                    onClick={() => {
                      handleLinkClick();
                      toggleMobileMenu();
                    }}
                    className="block py-2 text-gray-700 min-h-[44px] flex items-center"
                  >
                    Individualni časovi za djecu
                  </Link>
                  <Link
                    to="/individualni-casovi-online"
                    onClick={() => {
                      handleLinkClick();
                      toggleMobileMenu();
                    }}
                    className="block py-2 text-gray-700 min-h-[44px] flex items-center"
                  >
                    Individualni časovi online
                  </Link>
                </div>
              )}
              <Link
                to="/osd"
                onClick={() => {
                  handleLinkClick();
                  toggleMobileMenu();
                }}
                className="block py-2 font-bold text-[15px] text-gray-700 min-h-[44px] flex items-center"
              >
                ÖSD ISPIT
              </Link>
              <Link
                to="/goethe"
                onClick={() => {
                  handleLinkClick();
                  toggleMobileMenu();
                }}
                className="block py-2 font-bold text-[15px] text-gray-700 min-h-[44px] flex items-center"
              >
                GOETHE ISPIT
              </Link>
              <button
                onClick={() => goToSection("/", "contact")}
                className="block py-2 text-gray-700 font-bold text-[15px] w-full text-left min-h-[44px]"
              >
                KONTAKT
              </button>

              <Link
                to="/test-znanja"
                onClick={() => {
                  trackEvent("test_open", { from: "nav_mobile" });
                  handleLinkClick();
                  toggleMobileMenu();
                }}
                className="flex items-center justify-center gap-2 bg-yellow-500 text-black font-bold text-[15px]
                           px-4 py-3 rounded-xl hover:bg-yellow-400 transition my-3 min-h-[48px]"
              >
                BESPLATNI TEST ZNANJA
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
