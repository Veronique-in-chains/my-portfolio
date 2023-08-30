import React from "react";

const About = () => {
  return (
    <>
    <section id="about_me" className="section about">
        <div className="section__wrapper">
        <div className="flex">
          <h3>kóduji weby</h3>
          <div className="content">
            <p>
              Jsem mladá a zapálená Front-End Designérka (Kodérka). HTML a CSS
              mě uchvátilo už na střední škole. Tehdy jsem se od jednoduchých
              úprav šablon dostala k samostatnému naprogramování celého webu.
            </p>
            <p>
              Na podzim 2021 jsem absolvovala čtvrtletní kurz Staň se kodérkou v
              Czechitas. V následujících semestrech jsem poté úspěšně absolvovala kurzy Javascript, Javascript II a React I. Stále se
              rozvíjím a učím nové technologie. Mám ráda moderní design
              nejkrásnějších současných webů.
            </p>
            <p>
              Ráda pro vás vytvořím nový web - single page nebo vícestránkovou
              webovou prezentaci s pomocí generátoru statických webů či jednodušší React aplikace. Mám čas a
              chuť vytvářet designové stránky, které působí důvěryhodně díky
              nejnovějším technologiím. V případě potřeby upravím vaše
              existující stránky.
            </p>
            <div className="button__container">
              <a
                className="button"
                href="https://veronika-bosakova.netlify.app/"
                target="_blank"
              >
                curriculum vitae
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;