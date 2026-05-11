/**
 * MORE EXPENSIVE THAN THE SEMESTER
 * Campaign Website — UTP Food Crisis
 * ILEX 4, Group 9
 *
 * All dynamic content lives in the DATA objects below.
 * To expand the site: just add items to any array.
 */

/* =============================================
   DATA — Edit or extend freely
   ============================================= */

const STATS = [
  { number: "67%",  label: "Students skip lunch" },
  { number: "3×",   label: "UTP food costs vs. other Universities" },
  { number: "60%",  label: "Of campus options are ultra-processed" },
  { number: "1 in 3", label: "Students report hunger affecting focus in class" },
];

const PROBLEM_ITEMS = [
  { icon: "💸", text: "A basic lunch at UTP cafeterias costs between $12,000 and $18,000 COP — the students don't have enought money." },
  { icon: "🥗", text: "Healthy, balanced meal options are scarce. Most available food is fried, highly processed, or low in nutritional value." },
  { icon: "🚌", text: "Students who travel long distances have no affordable alternative and are trapped in an expensive on-campus food market." },
  { icon: "📉", text: "skip meals makes low concentration in class." },
  { icon: "🔒", text: "Food vouchers are insufficient for the large number of students the university has." },
];

const QUOTES = [
  {
    text: "I spend more on lunch than on my weekly bus fare. By mid-month, I'm choosing between eating and printing assignments.",
    author: "Engineering student, 3rd semester"
  },
  {
    text: "The portions are tiny and the prices keep going up. They know we have no choice — we're stuck on campus.",
    author: "Business student, 5th semester"
  },
  {
    text: "I started bringing food from home just to survive. But not everyone has that option.",
    author: "Systems student, 2nd semester"
  },
];

/**
 * GALLERY IMAGES
 * To add more images: copy one of the objects and change the src and caption.
 * Images should be placed in the /imgp folder.
 */
const GALLERY_IMAGES = [
  {
    src: "imgp/instagram.png",
    caption: "Instagram complaint about poor food quality at UTP",
    alt: "Social media post about UTP campus food quality"
  },
  // Add more images below — just copy the block above:
  // {
  //   src: "imgp/your-new-image.png",
  //   caption: "Your caption here",
  //   alt: "Alt text for accessibility"
  // },
];

const SOLUTIONS = [
  {
    icon: "💰",
    title: "Subsidized Student Meals",
    desc: "Implement an institutional subsidy program so students from lower income backgrounds can access nutritious meals at a fair price."
  },
  {
    icon: "🥦",
    title: "Mandatory Healthy Options",
    desc: "Require all food vendors on campus to offer at least one balanced, affordable, plant-inclusive meal option per service."
  },
  {
    icon: "🏪",
    title: "Open Campus to Competition",
    desc: "Allow more independent food vendors on campus to break the monopoly and create a competitive, student-friendly market."
  },
  {
    icon: "📋",
    title: "Transparent Price Regulation",
    desc: "Establish a student–administration committee to review and regulate food pricing on campus with full transparency."
  },
  {
    icon: "🌱",
    title: "Promote Local & Sustainable Food",
    desc: "Partner with local farmers and cooperatives to supply affordable, nutritious ingredients — benefiting students and the community."
  },
];

const PROTEST_TAGS = [
  "#ProjectFamine",
  "#UTPMeansHunger",
  "#FairFoodNow",
  "#FeedStudents",
  "#NoMoreOverpricedMeals",
  "#UTPListens",
  "#StudentRights",
  "#CheaperThanTuition",
  "#ILoveButImHungry",
  "#MoreExpensiveThanTheSemester",
];

/* =============================================
   RENDER FUNCTIONS
   ============================================= */

function renderStats() {
  const container = document.getElementById("statsBar");
  if (!container) return;
  container.innerHTML = STATS.map(s => `
    <div class="stat-item reveal">
      <span class="stat-item__number">${s.number}</span>
      <span class="stat-item__label">${s.label}</span>
    </div>
  `).join("");
}

function renderProblemList() {
  const list = document.getElementById("problemList");
  if (!list) return;
  list.innerHTML = PROBLEM_ITEMS.map((item, i) => `
    <li class="problem__item reveal reveal--delay-${(i % 3) + 1}">
      <span class="problem__item-icon">${item.icon}</span>
      <span class="problem__item-text">${item.text}</span>
    </li>
  `).join("");
}

function renderQuotes() {
  const block = document.getElementById("quotesBlock");
  if (!block) return;
  block.innerHTML = QUOTES.map((q, i) => `
    <div class="quote-card reveal reveal--delay-${i + 1}">
      <p class="quote-card__text">"${q.text}"</p>
      <span class="quote-card__author">— ${q.author}</span>
    </div>
  `).join("");
}

function renderGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;
  if (GALLERY_IMAGES.length === 0) {
    gallery.style.display = "none";
    return;
  }
  gallery.innerHTML = GALLERY_IMAGES.map(img => `
    <div class="gallery-item reveal">
      <img src="${img.src}" alt="${img.alt}" loading="lazy" />
      <p class="gallery-item__caption">${img.caption}</p>
    </div>
  `).join("");
}

function renderSolutions() {
  const cards = document.getElementById("solutionsCards");
  if (!cards) return;
  cards.innerHTML = SOLUTIONS.map((s, i) => `
    <div class="solution-card reveal reveal--delay-${(i % 3) + 1}">
      <div class="solution-card__icon">${s.icon}</div>
      <div class="solution-card__body">
        <p class="solution-card__title">${s.title}</p>
        <p class="solution-card__desc">${s.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderProtestWall() {
  const wall = document.getElementById("protestWall");
  if (!wall) return;
  wall.innerHTML = PROTEST_TAGS.map(tag => `
    <span class="protest-tag">${tag}</span>
  `).join("");
}

/* =============================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================= */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Observe all .reveal elements (including dynamically added ones)
  function observeAll() {
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }

  // Small delay ensures dynamic content is in the DOM
  setTimeout(observeAll, 100);
}

/* =============================================
   NAVBAR SCROLL EFFECT & MOBILE MENU
   ============================================= */
function initNav() {
  const nav = document.querySelector(".nav");
  const burger = document.getElementById("navBurger");
  const links = document.querySelector(".nav__links");

  // Scroll shrink
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });

  // Mobile burger toggle
  if (burger && links) {
    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      links.classList.toggle("open");
      burger.innerHTML = links.classList.contains("open") ? "✕" : "&#9776;";
    });

    // Close on link click
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        burger.innerHTML = "&#9776;";
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) {
        links.classList.remove("open");
        burger.innerHTML = "&#9776;";
      }
    });
  }
}

/* =============================================
   SHARE BUTTON
   ============================================= */
function initShare() {
  const btn = document.getElementById("shareBtn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const shareData = {
      title: "More Expensive Than The Semester",
      text: "UTP campus food is unaffordable and unhealthy. Raise your voice! #ProjectFamine",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled — do nothing
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        const orig = btn.textContent;
        btn.textContent = "✓ Link Copied!";
        setTimeout(() => { btn.textContent = orig; }, 2500);
      } catch {
        alert("Copy this URL to share: " + window.location.href);
      }
    }
  });
}

/* =============================================
   PROTEST TAG INTERACTION
   ============================================= */
function initProtestTags() {
  document.addEventListener("click", e => {
    if (e.target.classList.contains("protest-tag")) {
      const tag = e.target.textContent;
      navigator.clipboard?.writeText(tag).catch(() => {});
      e.target.textContent = "Copied!";
      setTimeout(() => { e.target.textContent = tag; }, 1500);
    }
  });
}

/* =============================================
   COUNTER ANIMATION (for stats)
   ============================================= */
function animateCounters() {
  // Observe the stats bar
  const statsBar = document.querySelector(".stats-bar");
  if (!statsBar) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-item__number").forEach(el => {
          el.style.transform = "translateY(0)";
          el.style.opacity = "1";
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsBar);
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Render all dynamic content
  renderStats();
  renderProblemList();
  renderQuotes();
  renderGallery();
  renderSolutions();
  renderProtestWall();

  // After dynamic content is rendered, start observers
  initScrollReveal();
  initNav();
  initShare();
  initProtestTags();
  animateCounters();
});
