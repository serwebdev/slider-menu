function slidermenu(selector) {
  const sliders = document.querySelectorAll(selector);
  if (!sliders.length) return false;
  sliders.forEach(slider => {
    const sliderSlide = slider.querySelectorAll('.slidermenu__slide');
    const menuItem = slider.querySelectorAll('.slidermenu__menu-item');

    menuItem.forEach(item => {
      item.addEventListener('mouseover', () => {
        menuItem.forEach(item => {
          item.classList.remove('active');
        });
        item.classList.add('active');

        const menuItemData = item.dataset.menuitem;
        console.log(menuItemData);

        sliderSlide.forEach(slide => {
          slide.classList.remove('show');
        });

        sliderSlide.forEach(slide => {
          const slideData = slide.classList.contains(menuItemData);
          if (slideData) {
            slide.classList.add('show');
          }
        });
      });
    });
  });
}

slidermenu('.slidermenu');
slidermenu('.slidermenu2');
