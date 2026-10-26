/**
 * Indicius Design Agency - Main Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const spans = mobileToggle.querySelectorAll('span');
      if (navMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // 3. Interactive Services Tabs
  const serviceData = {
    sprint: {
      title: "Design Sprint Together.",
      desc: "Solve tough problems in a single week through this structured, step-by-step user experience design workshop used by the most innovative companies in the world.",
      pill1: "1-Week Prototype",
      pill2: "User Testing"
    },
    branding: {
      title: "Branding Together.",
      desc: "Create a memorable visual identity for your company, and an overall cohesive brand experience that builds trust and authority between you and your customers.",
      pill1: "Visual Identity",
      pill2: "Brand Strategy"
    },
    products: {
      title: "Digital Products Together.",
      desc: "We have a solid user-centered research and design process to create outstanding, high-converting interfaces and design systems for web and mobile products.",
      pill1: "UI/UX Architecture",
      pill2: "Design Systems"
    }
  };

  const tabButtons = document.querySelectorAll('.service-tab-btn');
  const serviceHeading = document.getElementById('service-heading');
  const serviceDesc = document.getElementById('service-description');
  const pill1 = document.getElementById('service-pill-1');
  const pill2 = document.getElementById('service-pill-2');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabKey = btn.getAttribute('data-tab');
      if (serviceData[tabKey]) {
        // Smooth fade out and in
        serviceHeading.style.opacity = '0';
        serviceDesc.style.opacity = '0';

        setTimeout(() => {
          serviceHeading.textContent = serviceData[tabKey].title;
          serviceDesc.textContent = serviceData[tabKey].desc;
          if (pill1) pill1.textContent = serviceData[tabKey].pill1;
          if (pill2) pill2.textContent = serviceData[tabKey].pill2;

          serviceHeading.style.opacity = '1';
          serviceDesc.style.opacity = '1';
        }, 180);
      }
    });
  });

  // 4. Contact Modal Controls
  const modalOverlay = document.getElementById('contact-modal');
  const openModalBtns = document.querySelectorAll('.open-contact-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const contactForm = document.getElementById('contact-form');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Message Sent! ✨';
        submitBtn.style.backgroundColor = '#2ecc71';
        setTimeout(() => {
          contactForm.reset();
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
          modalOverlay.classList.remove('active');
          document.body.style.overflow = '';
        }, 1200);
      }, 800);
    });
  }

  // 5. Newsletter Subscription Handling
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg = document.getElementById('newsletter-msg');

  if (newsletterForm && newsletterMsg) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const emailVal = emailInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailVal)) {
        newsletterMsg.textContent = "Yay! You're subscribed! 🎉";
        newsletterMsg.className = 'newsletter-message success';
        emailInput.value = '';
      } else {
        newsletterMsg.textContent = "Oopsie! This email is not valid.";
        newsletterMsg.className = 'newsletter-message error';
      }

      setTimeout(() => {
        newsletterMsg.className = 'newsletter-message';
      }, 4000);
    });
  }

  // 6. Interactive Language Toggle
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // 7. Team Avatar Interaction (Display Member details on hover)
  const avatars = document.querySelectorAll('.avatar-bubble');
  const teamMembers = [
    { name: "Tomas Peralta", role: "Co-Founder & Design Director" },
    { name: "Agustina Fainguersch", role: "Product Designer" },
    { name: "Martin Romero", role: "Brand Strategist" },
    { name: "Camila Gomez", role: "UX Researcher" },
    { name: "Julian Rossi", role: "Creative Technologist" },
    { name: "Sofia Benitez", role: "Lead UI Designer" },
    { name: "Lucas Fernandez", role: "Motion Designer" },
    { name: "Valentina Diaz", role: "Operations Lead" },
    { name: "Mateo Alvarez", role: "Frontend Architect" },
    { name: "Lucia Morales", role: "Design Sprint Facilitator" }
  ];

  avatars.forEach((avatar, index) => {
    if (teamMembers[index]) {
      avatar.setAttribute('title', `${teamMembers[index].name} • ${teamMembers[index].role}`);
    }
  });
});
