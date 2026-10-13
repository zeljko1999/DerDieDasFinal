import Img from "./Img";

const AboutSection = () => (
  <section className="pt-8 pb-16 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl text-center font-bold mb-8">O nama</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex-1">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            <p className="mb-4">
              Dobrodošli u{" "}
              <span className="font-semibold">
                jedini specijalizovani centar za njemački jezik
              </span>{" "}
              u Bosni i Hercegovini! Od <strong>2018.</strong> godine uspješno
              poslujemo u Banjoj Luci, posvećeni{" "}
              <strong>isključivo učenju njemačkog jezika</strong> – što nam
              omogućava da pružimo najbolju moguću uslugu našim polaznicima.
            </p>
            <ul className="list-disc list-inside space-y-3 mb-4">
              <li>
                <span className="font-semibold">Stručni tim predavača:</span>{" "}
                Naš tim čine iskusni profesori njemačkog jezika, kao i
                licencirani ÖSD i Goethe ispitivači. Kod nas možete učiti
                individualno, u grupi, ili se temeljno pripremiti za međunarodne
                ispite.
              </li>
              <li>
                <span className="font-semibold">Kvalitetna priprema:</span> U
                našem timu su ispitivači za oba sistema{" "}
                <strong>(ÖSD i Goethe)</strong>, što vam garantuje vrhunski
                kvalitet i sigurnost na ispitu.
              </li>
              <li>
                <span className="font-semibold">Program za osnovce:</span>{" "}
                Posebno smo prepoznatljivi po kursu za{" "}
                <strong>učenike od 6. do 9. razreda</strong>, koji prati{" "}
                <strong>školski program</strong> i pomaže djeci da istovremeno
                napreduju u jeziku i poboljšaju školske rezultate.
              </li>
              <li>
                <span className="font-semibold">Fleksibilnost i cijene:</span>{" "}
                Nudimo pristupačne cijene i maksimalnu fleksibilnost, naročito
                za <strong>individualne</strong> (1 na 1) i{" "}
                <strong>poluindividualne</strong> (2–3 polaznika) časove,
                potpuno prilagođene vašem rasporedu.
              </li>
            </ul>
            <p className="mb-4">
              Ako tražite <strong>kvalitet, stručnost i posvećenost</strong> u
              učenju njemačkog jezika – na pravom ste mjestu.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-xl aspect-square relative">
            <Img
              name="about"
              className="w-full h-full object-cover"
              alt="Students learning German"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#10375c] text-white md:p-6 p-4 rounded-xl shadow-lg md:min-w-[120px] min-w-[100px]">
            <div className="md:text-3xl text-2xl font-bold mb-1">1000+</div>
            <div className="md:text-sm text-xs opacity-90">
              Zadovoljnih polaznika
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
