/**
 * Rajendra Hegadkar — IT Infrastructure Portfolio
 * Interactive Functionality & System Utilities
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initScrollSpy();
  initClipboardCopy();
  initProjectFilter();
  initBackToTop();
  initStatCounters();
  initInteractiveTerminal();
});

/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */
function initMobileNavigation() {
  const menuButton = document.querySelector(".mobile-menu-button");
  const mainNav = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuButton || !mainNav) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !mainNav.classList.contains("active");
    mainNav.classList.toggle("active", isOpen);
    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  menuButton.addEventListener("click", () => toggleMenu());

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(false);
    });
  });

  // Close on outside click
  document.addEventListener("click", (event) => {
    if (
      mainNav.classList.contains("active") &&
      !mainNav.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mainNav.classList.contains("active")) {
      toggleMenu(false);
    }
  });
}

/* =========================================================
   2. SCROLL SPY & ACTIVE NAV
   ========================================================= */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    {
      rootMargin: "-25% 0px -65% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* =========================================================
   3. CLIPBOARD COPY & TOAST NOTIFICATION
   ========================================================= */
function initClipboardCopy() {
  const copyElements = document.querySelectorAll("[data-copy]");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  let toastTimeout = null;

  function showToast(text) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = text;
    toast.classList.add("show");

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  copyElements.forEach((el) => {
    el.addEventListener("click", async (e) => {
      e.preventDefault();
      const textToCopy = el.getAttribute("data-copy");
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          showToast(`Copied: ${textToCopy}`);
        } catch {
          showToast(`Failed to copy automatically.`);
        }
        document.body.removeChild(textArea);
      }
    });
  });
}

/* =========================================================
   4. PROJECT FILTERING
   ========================================================= */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";

        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "block";
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.transition = "opacity 0.3s ease";
            card.style.opacity = "1";
          }, 50);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* =========================================================
   5. BACK TO TOP BUTTON
   ========================================================= */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =========================================================
   6. STATISTIC COUNTERS (ANIMATED ON SCROLL)
   ========================================================= */
function initStatCounters() {
  const counters = document.querySelectorAll(".counter[data-target]");
  if (!counters.length) return;

  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const duration = 1200; // ms
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current);
              }
            }, stepTime);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.querySelector(".stats");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* =========================================================
   7. INTERACTIVE TERMINAL
   ========================================================= */
function initInteractiveTerminal() {
  const terminalBody = document.getElementById("terminal-body");
  const terminalInput = document.getElementById("terminal-input");
  const quickCmdBtns = document.querySelectorAll(".quick-cmd");

  if (!terminalBody || !terminalInput) return;

  const originalContent = terminalBody.innerHTML;

  const commands = {
    help: () => `
<div class="output">
  <strong class="text-highlight">Available Commands:</strong><br>
  • <span class="green">whoami</span> — Display system operator credentials<br>
  • <span class="green">skills</span> — Enumerate top technical competencies<br>
  • <span class="green">projects</span> — View flagship architecture builds<br>
  • <span class="green">experience</span> — View career trajectory and current role<br>
  • <span class="green">contact</span> — Get direct contact links (email/phone)<br>
  • <span class="green">status</span> — Check infrastructure operational metrics<br>
  • <span class="green">clear</span> — Reset terminal interface
</div>`,

    whoami: () => `
<div class="output">
  <span class="text-highlight">Rajendra Hegadkar</span><br>
  Role: Senior System Executive & IT Infrastructure Engineer<br>
  Location: Pune, Maharashtra, India<br>
  Experience: 3+ years managing systems, firewalls, and cloud prototypes.
</div>`,

    skills: () => `
<div class="output">
  <span class="text-highlight">Core Technical Proficiencies:</span><br>
  [+] Systems: Windows Server, Active Directory, GPO, Ubuntu/Debian<br>
  [+] Network & Security: Sophos Firewall, Sophos DNS, Trend Micro ZTNA<br>
  [+] Cloud: AWS (EC2, VPC, Route 53, IAM, Load Balancers)<br>
  [+] Web & Gateways: Apache, Nginx, Docker, Cloudflare Tunnel, SSH<br>
  [+] Operations: 600+ Assets, ServiceNow (ITIL), M365 Administration
</div>`,

    projects: () => `
<div class="output">
  <span class="text-highlight">Engineered Projects:</span><br>
  1. Self-Hosted Remote Access Gateway (Cloudflare Tunnel + Apache Proxy)<br>
  2. AWS Infrastructure & Hybrid Connectivity Prototype (VPC, Route 53, ALB)<br>
  3. Private Cloud Infrastructure & Cost Optimization (Linux + Docker)<br>
  4. Self-Hosted Open-Source Web Application (Containerized Production)
</div>`,

    experience: () => `
<div class="output">
  <span class="text-highlight">Career Record:</span><br>
  • 2023 – Present: Senior System Executive @ nCircletech Pvt Ltd.<br>
  • 2022 – 2023: System Engineer @ VDA Infosolutions Pvt. Ltd.
</div>`,

    contact: () => `
<div class="output">
  Email: <a href="mailto:hegadkarraj@gmail.com" class="text-highlight">hegadkarraj@gmail.com</a><br>
  Phone: <a href="tel:+919284106151" class="text-highlight">+91 9284106151</a><br>
  Location: Pune, Maharashtra, India
</div>`,

    status: () => `
<div class="output">
  Infrastructure: [ONLINE]<br>
  Active Directory Domain: [HEALTHY]<br>
  Perimeter Firewall (Sophos): [ENFORCING]<br>
  Zero Trust Policies: [100% POSTURE CHECK PASS]<br>
  Asset Fleet: 600+ Units Tracked Across 2 Locations
</div>`,

    uptime: () => `
<div class="output text-muted-out">
  up 3+ years, 2 corporate sites, 0 critical security breaches
</div>`,

    sudo: () => `
<div class="output" style="color: #ff605c;">
  Permission granted: sysadmin@rajendra already has root privileges! 🛡
</div>`,
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      terminalBody.innerHTML = originalContent;
      // re-bind listener after reset
      initInteractiveTerminal();
      return;
    }

    // Append executed line
    const historyLine = document.createElement("div");
    historyLine.innerHTML = `
      <p class="prompt-line" style="margin-top: 8px;">
        <span class="user">sysadmin@rajendra</span>:<span class="path">~</span>$ <span class="cmd">${escapeHTML(
          cmd
        )}</span>
      </p>
    `;

    const resultDiv = document.createElement("div");
    if (commands[cmd]) {
      resultDiv.innerHTML = commands[cmd]();
    } else {
      resultDiv.innerHTML = `
        <div class="output" style="color: #ff605c;">
          bash: command not found: '${escapeHTML(cmd)}'. Type <span class="text-highlight">'help'</span> for valid commands.
        </div>
      `;
    }

    const interactivePrompt = terminalBody.querySelector(".interactive-prompt");
    if (interactivePrompt) {
      terminalBody.insertBefore(historyLine, interactivePrompt);
      terminalBody.insertBefore(resultDiv, interactivePrompt);
    } else {
      terminalBody.appendChild(historyLine);
      terminalBody.appendChild(resultDiv);
    }

    terminalInput.value = "";
    terminalInput.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, (tag) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    }[tag] || tag));
  }

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      executeCommand(terminalInput.value);
    }
  });

  quickCmdBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cmd = btn.getAttribute("data-cmd");
      if (cmd) {
        terminalInput.value = cmd;
        executeCommand(cmd);
      }
    });
  });
}
