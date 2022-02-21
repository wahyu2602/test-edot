const navLinks = document.querySelectorAll('.link-item');
const navLinksSide = document.querySelectorAll('.item-side');
const pages = document.querySelectorAll('.page');
const toggle = document.querySelector('.toggle');
const navSideBar = document.querySelector('.nav-sidebar');

// navlink
navLinks.forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < navLinks.length; i++) {
      const nav = navLinks[i];
      nav.classList.remove('active');
    }
    this.classList.add('active');
  });
});

let active = true;
toggle.addEventListener('click', function () {
  if (active) {
    navSideBar.classList.add('show');
    active = false;
  } else {
    navSideBar.classList.remove('show');
    active = true;
  }

});

navLinks[0].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[0].classList.add('show')
});

navLinks[1].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[1].classList.add('show')
});

navLinks[2].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[2].classList.add('show')
});

navLinks[3].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[3].classList.add('show')
});

navLinks[4].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[4].classList.add('show')
});

navLinksSide[0].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[0].classList.add('show')
  for (let i = 0; i < navLinks.length; i++) {
    const nav = navLinks[i];
    nav.classList.remove('active');
  }
  navLinks[0].classList.add('active');
});
navLinksSide[1].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[1].classList.add('show')
  for (let i = 0; i < navLinks.length; i++) {
    const nav = navLinks[i];
    nav.classList.remove('active');
  }
  navLinks[1].classList.add('active');
});
navLinksSide[2].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[2].classList.add('show')
  for (let i = 0; i < navLinks.length; i++) {
    const nav = navLinks[i];
    nav.classList.remove('active');
  }
  navLinks[2].classList.add('active');
});
navLinksSide[3].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[3].classList.add('show')
  for (let i = 0; i < navLinks.length; i++) {
    const nav = navLinks[i];
    nav.classList.remove('active');
  }
  navLinks[3].classList.add('active');
});
navLinksSide[4].addEventListener('click', function () {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    page.classList.remove('show');
  }
  pages[4].classList.add('show')
  for (let i = 0; i < navLinks.length; i++) {
    const nav = navLinks[i];
    nav.classList.remove('active');
  }
  navLinks[4].classList.add('active');
});


