/* Cà Phê Lơ Mơ: language toggle, rotating word, reveals, parallax, today marker */
(function () {
  "use strict";

  var I18N = {
    de: {
      "meta.title": "Cà Phê Lơ Mơ · Vietnamesisches Café in Zürich Wiedikon",
      "meta.desc": "Cà Phê Lơ Mơ: familiengeführtes vietnamesisches Café an der Badenerstrasse 281 in Zürich Wiedikon. Bac Xiu, Banh Mi und Kuchen, Mi bis Sa, 10 bis 17 Uhr.",
      "skip": "Zum Inhalt",
      "aria.home": "Zur Startseite",
      "aria.ig": "Cà Phê Lơ Mơ auf Instagram",
      "nav.tag": "Vietnamesisches Café · Wiedikon",
      "nav.menu": "Karte",
      "nav.story": "Der Name",
      "nav.visit": "Besuch",
      "hero.chip": "5.0 · 201 Google-Bewertungen",
      "hero.kicker": "Vietnamesisches Café · Zürich Kreis 3",
      "hero.h1a": "Kaffee,",
      "hero.h1b": "langsam wie ein",
      "hero.h1c": "Tagtraum.",
      "hero.rotatePre": "Heute im Glas:",
      "hero.lede": "Ein kleines, familiengeführtes Café an der Badenerstrasse. Intensiver vietnamesischer Kaffee, ein würziges Banh Mi und Kuchen, für die man gerne etwas langsamer macht.",
      "hero.ctaMenu": "Speisekarte ansehen",
      "hero.ctaRoute": "Route planen",
      "hero.note": "geöffnet Mi bis Sa, 10 bis 17 Uhr",
      "hero.imgAlt": "Ein Glas Bac Xiu mit Schichten aus Milch und Kaffee, daneben ein Phin-Filter (Konzeptbild)",
      "rib.days": "Mi bis Sa",
      "rib.hours": "10 bis 17 Uhr",
      "rib.addr": "Badenerstrasse 281",
      "rib.fam": "Familiengeführt",
      "rib.famSub": "mit viel Herz",
      "rib.rate": "5.0 auf Google",
      "rib.rateSub": "201 Bewertungen",
      "gal.kicker": "Stimmungsbilder",
      "gal.h2": "Ein kleiner Tagtraum in Bildern",
      "gal.note": "Konzeptbilder: So fühlt sich Lơ Mơ an. Die echten Eindrücke gibt es im Café und auf Instagram.",
      "gal.hint": "wischen zum Stöbern",
      "cap.phin": "Tropfen für Tropfen",
      "cap.banhmi": "Banh Mi und Eiskaffee",
      "cap.cake": "Honig und Mandarine",
      "cap.interior": "Ein ruhiger Morgen",
      "cap.bread": "Bananenbrot und Honig",
      "alt.phin": "Ein Phin-Filter tropft langsam in ein Glas mit Kondensmilch (Konzeptbild)",
      "alt.banhmi": "Ein Banh Mi mit Schweinefleisch und Kräutern auf einem Keramikteller (Konzeptbild)",
      "alt.cake": "Honigschichtkuchen und Tiramisu mit Mandarine auf Keramiktellern (Konzeptbild)",
      "alt.interior": "Ein ruhiges Café mit Holztischen und Morgenlicht (Konzeptbild)",
      "alt.bread": "Bananenbrot auf Leinen, daneben Honig und dunkler Kaffee (Konzeptbild)",
      "alt.bacxiu": "Ein Glas Bac Xiu mit Schichten aus Milch und Kaffee (Konzeptbild)",
      "sig.kicker": "Hauslieblinge",
      "sig.h2": "Zwei Dinge, die man probieren sollte",
      "sig1.tag": "Milch zuerst",
      "sig1.p": "Saigons weisser Kaffee: viel Kondensmilch und Milch, darüber nur ein wenig starker Kaffee. Süss, mild und klassisch auf Eis serviert. Der sanfte Einstieg in den vietnamesischen Kaffee.",
      "sig2.tag": "Würzig und knusprig",
      "sig2.h3": "Banh Mi mit Schweinefleisch",
      "sig2.p": "Knuspriges Baguette mit würzigem Schweinefleisch: Das französisch-vietnamesische Sandwich ist der herzhafte Gegenpart zum süssen Kaffee und steht bei Lơ Mơ fest auf der Karte.",
      "sig.cta": "Zur Speisekarte",
      "name.kicker": "Der Name",
      "name.h2": "Lơ Mơ heisst: halb wach, ganz verträumt",
      "name.p1": "«Cà phê» ist Vietnamesisch für Kaffee. «Lơ mơ» beschreibt diesen Zustand zwischen Wachen und Träumen, wenn der Kopf noch langsam ist und der Tag noch alles werden kann.",
      "name.p2": "Dazu passt, wie in Vietnam Kaffee gemacht wird: Starker Robusta tropft langsam durch einen kleinen Stahlfilter, den Phin, direkt ins Glas, oft auf süsse Kondensmilch. Vier bis sechs Minuten dauert das. Zeit genug, um kurz wegzuträumen.",
      "name.p3": "Und dazu passt auch der Rest: Lơ Mơ ist familiengeführt und nur vier Tage die Woche offen. Kein Durchlauf und kein Lärm, einfach ein ruhiger Tisch in Wiedikon.",
      "name.chip1": "Phin: 4 bis 6 Minuten pro Glas",
      "name.chip2": "Nur Mi bis Sa offen",
      "name.chip3": "Bac Xiu und Banh Mi",
      "menu.kicker": "Speisekarte",
      "menu.h2": "Klein, fein und vietnamesisch",
      "menu.sub": "Was öffentlich über die Karte bekannt ist, steht hier. Die Karte im Café kann mehr haben und wechselt mit dem Tag.",
      "menu.cat1": "Kaffee",
      "menu.cat2": "Aus der Küche",
      "menu.cat3": "Süsses",
      "m1.name": "Vietnamesischer Kaffee",
      "m1.desc": "Intensiv und aromatisch, der Klassiker des Hauses",
      "m2.desc": "Milch zuerst, dann ein wenig Kaffee: süss, mild, auf Eis",
      "m3.desc": "Mit würzigem Schweinefleisch im knusprigen Baguette",
      "m4.name": "Weitere Speisen und Desserts",
      "m4.desc": "Die Auswahl ist grösser als diese Karte hier: einfach im Café schauen",
      "m5.name": "Bananenbrot",
      "m5.desc": "Passt zu jedem Kaffee auf der Karte",
      "m6.name": "Honeybomb-Kuchen",
      "m6.desc": "Honig in Schichten",
      "m7.name": "Mandarinen-Jasmin-Tiramisu",
      "m7.desc": "Tiramisu mit Mandarine und Jasmin",
      "menu.note": "Keine Preise auf dieser Seite: Die aktuellen Preise stehen im Café an der Karte.",
      "menu.cta": "Route zum Café",
      "acc.kicker": "Stimmen",
      "acc.stars": "von 5 Sternen",
      "acc.reviews": "aus 201 Google-Bewertungen",
      "acc.h2": "Was andere über Lơ Mơ sagen",
      "acc1.h": "Nr. 2 von 9",
      "acc1.p": "In der Liste der besten Coffee Spots in Zürich von zurich10.com",
      "acc2.h": "«Unser Lieblingscafe»",
      "acc2.p": "So nennt es der Zürcher Podcast SpaceKitchen in seinen Shownotes",
      "acc3.h": "Freundlich und persönlich",
      "acc3.p": "So beschreibt zurich10 den Service im Lơ Mơ",
      "visit.kicker": "Besuch",
      "visit.h2": "Vier Tage die Woche, mitten in Wiedikon",
      "visit.hoursTitle": "Öffnungszeiten",
      "d.mon": "Montag",
      "d.tue": "Dienstag",
      "d.wed": "Mittwoch",
      "d.thu": "Donnerstag",
      "d.fri": "Freitag",
      "d.sat": "Samstag",
      "d.sun": "Sonntag",
      "closed": "geschlossen",
      "hrs.open": "10 bis 17 Uhr",
      "visit.hoursNote": "Zeiten gemäss Google-Eintrag des Cafés. Änderungen vorbehalten.",
      "visit.addrTitle": "Adresse",
      "visit.addrNote": "Im Kreis 3, Wiedikon, an der Badenerstrasse.",
      "visit.routeBtn": "Route in Google Maps",
      "visit.igP": "Das Café ist auf Instagram zu Hause: @caphe.lomo. Eine Telefonnummer ist nicht veröffentlicht.",
      "visit.igBtn": "Zu Instagram",
      "foot.tag": "Vietnamesischer Kaffee, langsam serviert in Wiedikon.",
      "foot.hours": "Mi bis Sa · 10 bis 17 Uhr",
      "foot.top": "Nach oben",
      "foot.demo": "Demo-Website für Cà Phê Lơ Mơ. Alle Bilder sind Konzeptbilder, alle Angaben stammen aus öffentlichen Quellen (Stand November 2026).",
      "bar.menu": "Karte",
      "bar.route": "Route",
      "bar.ig": "Instagram",
      "bar.hours": "Zeiten"
    },
    en: {
      "meta.title": "Cà Phê Lơ Mơ · Vietnamese Café in Zurich Wiedikon",
      "meta.desc": "Cà Phê Lơ Mơ: a family-run Vietnamese café at Badenerstrasse 281 in Zurich Wiedikon. Bac Xiu, banh mi and cakes, Wed to Sat, 10 am to 5 pm.",
      "skip": "Skip to content",
      "aria.home": "Back to top",
      "aria.ig": "Cà Phê Lơ Mơ on Instagram",
      "nav.tag": "Vietnamese café · Wiedikon",
      "nav.menu": "Menu",
      "nav.story": "The name",
      "nav.visit": "Visit",
      "hero.chip": "5.0 · 201 Google reviews",
      "hero.kicker": "Vietnamese café · Zurich District 3",
      "hero.h1a": "Coffee,",
      "hero.h1b": "slow as a",
      "hero.h1c": "daydream.",
      "hero.rotatePre": "In the glass today:",
      "hero.lede": "A small, family-run café on Badenerstrasse. Intense Vietnamese coffee, a spicy banh mi and cakes worth slowing down for.",
      "hero.ctaMenu": "See the menu",
      "hero.ctaRoute": "Get directions",
      "hero.note": "open Wed to Sat, 10 am to 5 pm",
      "hero.imgAlt": "A glass of bac xiu layered with milk and coffee, a phin filter beside it (concept image)",
      "rib.days": "Wed to Sat",
      "rib.hours": "10 am to 5 pm",
      "rib.addr": "Badenerstrasse 281",
      "rib.fam": "Family-run",
      "rib.famSub": "with a lot of heart",
      "rib.rate": "5.0 on Google",
      "rib.rateSub": "201 reviews",
      "gal.kicker": "Mood board",
      "gal.h2": "A little daydream in pictures",
      "gal.note": "Concept images: this is what Lơ Mơ feels like. The real thing is waiting in the café and on Instagram.",
      "gal.hint": "swipe to browse",
      "cap.phin": "Drop by drop",
      "cap.banhmi": "Banh Mi and iced coffee",
      "cap.cake": "Honey and tangerine",
      "cap.interior": "A quiet morning",
      "cap.bread": "Banana bread and honey",
      "alt.phin": "A phin filter dripping slowly into a glass with condensed milk (concept image)",
      "alt.banhmi": "A banh mi with pork and herbs on a ceramic plate (concept image)",
      "alt.cake": "Honey layer cake and tiramisu with tangerine on ceramic plates (concept image)",
      "alt.interior": "A quiet café with wooden tables and morning light (concept image)",
      "alt.bread": "Banana bread on linen, with honey and dark coffee (concept image)",
      "alt.bacxiu": "A glass of bac xiu layered with milk and coffee (concept image)",
      "sig.kicker": "House favourites",
      "sig.h2": "Two things to try first",
      "sig1.tag": "Milk first",
      "sig1.p": "Saigon's white coffee: plenty of condensed milk and milk, with just a little strong coffee poured over. Sweet, mild and classically served over ice. The gentle way into Vietnamese coffee.",
      "sig2.tag": "Spicy and crisp",
      "sig2.h3": "Pork Banh Mi",
      "sig2.p": "A crisp baguette with spicy pork: the French-Vietnamese sandwich is the savoury counterpart to the sweet coffee, and a fixture on the menu at Lơ Mơ.",
      "sig.cta": "To the menu",
      "name.kicker": "The name",
      "name.h2": "Lơ Mơ means half awake, fully daydreaming",
      "name.p1": "“Cà phê” is Vietnamese for coffee. “Lơ mơ” describes that state between waking and dreaming, when your head is still slow and the day could still become anything.",
      "name.p2": "It suits how coffee is made in Vietnam: strong robusta drips slowly through a small steel filter, the phin, straight into the glass, often onto sweet condensed milk. It takes four to six minutes. Just enough time to drift off for a moment.",
      "name.p3": "And it suits everything else, too: Lơ Mơ is family-run and open only four days a week. No rush and no noise, just a quiet table in Wiedikon.",
      "name.chip1": "Phin: 4 to 6 minutes a glass",
      "name.chip2": "Open Wed to Sat only",
      "name.chip3": "Bac Xiu and Banh Mi",
      "menu.kicker": "Menu",
      "menu.h2": "Small, fine and Vietnamese",
      "menu.sub": "Everything publicly known about the menu is on this card. The board in the café may have more, and it changes with the day.",
      "menu.cat1": "Coffee",
      "menu.cat2": "From the kitchen",
      "menu.cat3": "Something sweet",
      "m1.name": "Vietnamese coffee",
      "m1.desc": "Intense and aromatic, the house classic",
      "m2.desc": "Milk first, then a little coffee: sweet, mild, over ice",
      "m3.desc": "With spicy pork in a crisp baguette",
      "m4.name": "More dishes and desserts",
      "m4.desc": "The selection is bigger than this card: just look in the café",
      "m5.name": "Banana bread",
      "m5.desc": "Goes with every coffee on the menu",
      "m6.name": "Honeybomb cake",
      "m6.desc": "Honey in layers",
      "m7.name": "Tangerine jasmine tiramisu",
      "m7.desc": "Tiramisu with tangerine and jasmine",
      "menu.note": "No prices on this page: current prices are on the board in the café.",
      "menu.cta": "Directions to the café",
      "acc.kicker": "Word of mouth",
      "acc.stars": "out of 5 stars",
      "acc.reviews": "from 201 Google reviews",
      "acc.h2": "What others say about Lơ Mơ",
      "acc1.h": "No. 2 of 9",
      "acc1.p": "In zurich10.com's list of the best coffee spots in Zurich",
      "acc2.h": "“Our favourite café”",
      "acc2.p": "That is what the Zurich podcast SpaceKitchen calls it in its show notes",
      "acc3.h": "Friendly and personable",
      "acc3.p": "How zurich10 describes the service at Lơ Mơ",
      "visit.kicker": "Visit",
      "visit.h2": "Four days a week, in the middle of Wiedikon",
      "visit.hoursTitle": "Opening hours",
      "d.mon": "Monday",
      "d.tue": "Tuesday",
      "d.wed": "Wednesday",
      "d.thu": "Thursday",
      "d.fri": "Friday",
      "d.sat": "Saturday",
      "d.sun": "Sunday",
      "closed": "closed",
      "hrs.open": "10 am to 5 pm",
      "visit.hoursNote": "Hours per the café's Google listing. Subject to change.",
      "visit.addrTitle": "Address",
      "visit.addrNote": "In District 3, Wiedikon, on Badenerstrasse.",
      "visit.routeBtn": "Directions in Google Maps",
      "visit.igP": "The café lives on Instagram: @caphe.lomo. No phone number is published.",
      "visit.igBtn": "Open Instagram",
      "foot.tag": "Vietnamese coffee, served slowly in Wiedikon.",
      "foot.hours": "Wed to Sat · 10 am to 5 pm",
      "foot.top": "Back to top",
      "foot.demo": "Demo website for Cà Phê Lơ Mơ. All images are concept images and all details come from public sources (as of November 2026).",
      "bar.menu": "Menu",
      "bar.route": "Directions",
      "bar.ig": "Instagram",
      "bar.hours": "Hours"
    }
  };

  var ROTATE = {
    de: ["intensiv", "aromatisch", "milchig", "süss"],
    en: ["intense", "aromatic", "milky", "sweet"]
  };

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var currentLang = "de";
  var rotateIdx = 0;
  var rotateEl = document.getElementById("rotateWord");

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-content");
      if (dict[key] !== undefined) el.setAttribute("content", dict[key]);
    });
    if (dict["meta.title"]) document.title = dict["meta.title"];
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    rotateIdx = 0;
    if (rotateEl) rotateEl.textContent = ROTATE[lang][0];
    try { localStorage.setItem("lomo-lang", lang); } catch (e) { /* private mode */ }
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
  });

  var saved = null;
  try { saved = localStorage.getItem("lomo-lang"); } catch (e) { /* ignore */ }
  if (saved && saved !== "de" && I18N[saved]) applyLang(saved);

  /* Rotating word */
  if (rotateEl && !reducedMotion) {
    setInterval(function () {
      var words = ROTATE[currentLang];
      rotateEl.classList.add("is-out");
      setTimeout(function () {
        rotateIdx = (rotateIdx + 1) % words.length;
        rotateEl.textContent = words[rotateIdx];
        rotateEl.classList.remove("is-out");
      }, 360);
    }, 3000);
  }

  /* Scroll reveals */
  var revealEls = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* Depth engine: layered hero planes (scroll + pointer), gallery
     centre-focus curve, feature-image tilt. Transform-only, one shared
     rAF pattern, passive listeners, fully off under reduced motion. */
  if (!reducedMotion) {
    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    /* Layered hero planes: echo arches (far) -> image wrap -> photo ->
       coffee rings (near). Each plane drifts at its own rate, so the hero
       reads as stacked glass plates: the daydream, layered. */
    var layers = document.querySelectorAll("[data-depth]");
    var heroSec = document.querySelector(".hero");
    if (layers.length && heroSec) {
      var dTx = 0, dTy = 0, dPx = 0, dPy = 0, dRaf = null;
      var depthLoop = function () {
        dPx += (dTx - dPx) * 0.055;
        dPy += (dTy - dPy) * 0.055;
        var sy = Math.min(window.scrollY, 480);
        layers.forEach(function (el) {
          var d = parseFloat(el.getAttribute("data-depth")) || 0;
          var t = "translate3d(" + (dPx * 12 * d).toFixed(2) + "px," + (sy * 0.045 * d + dPy * 9 * d).toFixed(2) + "px,0)";
          var z = el.getAttribute("data-zoom");
          if (z) t += " scale(" + z + ")";
          el.style.transform = t;
        });
        if (Math.abs(dTx - dPx) > 0.002 || Math.abs(dTy - dPy) > 0.002) {
          dRaf = requestAnimationFrame(depthLoop);
        } else { dRaf = null; }
      };
      var depthKick = function () { if (!dRaf) dRaf = requestAnimationFrame(depthLoop); };
      window.addEventListener("scroll", depthKick, { passive: true });
      if (finePointer) {
        heroSec.addEventListener("pointermove", function (e) {
          var r = heroSec.getBoundingClientRect();
          dTx = ((e.clientX - r.left) / r.width - 0.5) * 2;
          dTy = ((e.clientY - r.top) / r.height - 0.5) * 2;
          depthKick();
        });
        heroSec.addEventListener("pointerleave", function () { dTx = 0; dTy = 0; depthKick(); });
      }
      depthKick();
    }

    /* Gallery centre-focus: cards curve gently around the viewer while
       swiping; the centred card stands straight and full-size. */
    var galTrack = document.getElementById("galTrack");
    if (galTrack) {
      var galItems = galTrack.querySelectorAll(".gal-item");
      var gTick = false;
      var galDepth = function () {
        if (galTrack.scrollWidth <= galTrack.clientWidth + 4) {
          galItems.forEach(function (it) { it.style.transform = ""; });
          return;
        }
        var mid = galTrack.scrollLeft + galTrack.clientWidth / 2;
        galItems.forEach(function (it) {
          var c = it.offsetLeft + it.offsetWidth / 2;
          var rel = Math.max(-1, Math.min(1, (c - mid) / galTrack.clientWidth));
          it.style.transform = "rotateY(" + (-rel * 7).toFixed(2) + "deg) scale(" + (1 - Math.abs(rel) * 0.045).toFixed(3) + ")";
        });
      };
      galTrack.addEventListener("scroll", function () {
        if (!gTick) {
          gTick = true;
          requestAnimationFrame(function () { galDepth(); gTick = false; });
        }
      }, { passive: true });
      window.addEventListener("resize", galDepth);
      galDepth();
    }

    /* Feature tilt: the two signature photos lean a few degrees toward the
       pointer, like picking up a photo card. Fine pointers only. */
    if (finePointer) {
      document.querySelectorAll(".feature-img").forEach(function (frame) {
        var img = frame.querySelector("img");
        if (!img) return;
        frame.addEventListener("pointermove", function (e) {
          var r = frame.getBoundingClientRect();
          var rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
          var ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
          img.style.transform = "rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) scale(1.02)";
        });
        frame.addEventListener("pointerleave", function () { img.style.transform = ""; });
      });
    }
  }

  /* Highlight today's row in the hours table (Europe/Zurich) */
  try {
    var wd = new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Zurich", weekday: "short" }).format(new Date());
    var dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    var row = document.querySelector('tr[data-day="' + dayMap[wd] + '"]');
    if (row) row.classList.add("today");
  } catch (e) { /* older browser: no highlight */ }
})();
