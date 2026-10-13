import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import ContactModal from "../components/ContactModal";
import TestIntro from "../components/test/TestIntro";
import TestNapredak from "../components/test/TestNapredak";
import TestPitanje from "../components/test/TestPitanje";
import TestKontaktForma from "../components/test/TestKontaktForma";
import TestRezultat from "../components/test/TestRezultat";
import { pageMeta } from "../seo/pages";
import { testSchema } from "../seo/structuredData";
import { PITANJA } from "../data/testPitanja";
import { ocijeni, promijesaj } from "../lib/test";
import type { Rezultat } from "../lib/test";
import { submitTestResult } from "../lib/testSubmit";
import type { TestLead, TestSubmitResult } from "../lib/testSubmit";
import { trackEvent } from "../lib/analytics";

type Faza = "intro" | "pitanja" | "kontakt" | "rezultat";

/**
 * Besplatni test znanja.
 *
 * Plutajuća kontakt dugmad se namjerno NE prikazuju na ovoj stranici: stajala su
 * preko ponuđenih odgovora i preko dugmeta "Dalje", a test je fokusiran tok u
 * kojem je jedina bitna akcija odgovoriti na pitanje.
 */
const TestZnanja = () => {
  const [faza, setFaza] = useState<Faza>("intro");
  const [indeks, setIndeks] = useState(0);
  const [odgovori, setOdgovori] = useState<Record<number, number>>({});
  const [rezultat, setRezultat] = useState<Rezultat | null>(null);
  const [ime, setIme] = useState("");
  const [salje, setSalje] = useState(false);
  const [fallback, setFallback] = useState<Extract<
    TestSubmitResult,
    { kind: "fallback" }
  > | null>(null);
  const [modalOtvoren, setModalOtvoren] = useState(false);

  const pitanje = promijesaj(PITANJA[indeks]);
  const naVrh = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const izaberi = (i: number) =>
    setOdgovori((o) => ({ ...o, [PITANJA[indeks].id]: i }));

  const dalje = () => {
    if (indeks < PITANJA.length - 1) {
      setIndeks((i) => i + 1);
    } else {
      trackEvent("test_finish", { answered: Object.keys(odgovori).length });
      setFaza("kontakt");
    }
    naVrh();
  };

  const nazad = () => {
    if (indeks > 0) {
      setIndeks((i) => i - 1);
      naVrh();
    }
  };

  const prikaziRezultat = (ocjena: Rezultat, imePolaznika: string) => {
    setIme(imePolaznika);
    setRezultat(ocjena);
    setFaza("rezultat");
    naVrh();
  };

  const posalji = async (lead: TestLead) => {
    setSalje(true);
    const ocjena = ocijeni(PITANJA, odgovori);

    const ishod = await submitTestResult(lead, ocjena, odgovori);
    setSalje(false);

    if (ishod.kind === "sent") {
      trackEvent("test_lead", { level: ocjena.nivo });
      prikaziRezultat(ocjena, lead.firstName);
    } else {
      // Backend nije podešen ili ne odgovara — ponudi direktne kanale,
      // ali zapamti ime i ocjenu da rezultat može biti prikazan odmah.
      trackEvent("test_lead_fallback", { level: ocjena.nivo });
      setFallback(ishod);
      setRezultat(ocjena);
      setIme(lead.firstName);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Seo meta={pageMeta.testZnanja} schemas={[testSchema]} />
      <Navbar />

      <main className="pt-20 flex-grow">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          {faza === "intro" && (
            <TestIntro
              brojPitanja={PITANJA.length}
              onStart={() => {
                trackEvent("test_start", {});
                setFaza("pitanja");
                naVrh();
              }}
            />
          )}

          {faza === "pitanja" && (
            <div className="max-w-2xl mx-auto">
              <TestNapredak trenutno={indeks + 1} ukupno={PITANJA.length} />
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <TestPitanje
                  pitanje={pitanje}
                  izabrano={odgovori[PITANJA[indeks].id]}
                  onIzbor={izaberi}
                  onNazad={nazad}
                  onDalje={dalje}
                  jePrvo={indeks === 0}
                  jePosljednje={indeks === PITANJA.length - 1}
                />
              </div>
            </div>
          )}

          {faza === "kontakt" && (
            <TestKontaktForma
              onPosalji={posalji}
              salje={salje}
              fallback={fallback}
              onPreskoci={() =>
                rezultat ? prikaziRezultat(rezultat, ime) : undefined
              }
            />
          )}

          {faza === "rezultat" && rezultat && (
            <TestRezultat
              rezultat={rezultat}
              odgovori={odgovori}
              ime={ime}
              onZakazi={() => setModalOtvoren(true)}
            />
          )}
        </div>
      </main>

      <Footer />
      <ContactModal
        isOpen={modalOtvoren}
        onClose={() => setModalOtvoren(false)}
      />
    </div>
  );
};

export default TestZnanja;
