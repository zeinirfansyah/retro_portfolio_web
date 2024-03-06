function updateNavbarColor() {
    const experiencesEducationsSection = document.getElementById('experiences-educations');
    const projectsSection = document.getElementById('projects');
    const navbar = document.querySelector('header');

    if (experiencesEducationsSection && projectsSection) {
      const experiencesRect = experiencesEducationsSection.getBoundingClientRect();
      const projectsRect = projectsSection.getBoundingClientRect();

      if (experiencesRect.top < 0 && experiencesRect.bottom > 0) {

        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = '#D57F5D'; //
      } else if (projectsRect.top < 0 && projectsRect.bottom > 0) {
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = '#D57F5D'; //
      } else {
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = '#83B5B4'; //
      }
    }
  }

  window.addEventListener('scroll', updateNavbarColor);
  updateNavbarColor();