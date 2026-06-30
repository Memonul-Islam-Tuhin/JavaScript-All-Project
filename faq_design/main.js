const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const header = faq.querySelector(".faq-header");

  header.addEventListener("click", () => {
    // Close other FAQs
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");

        const icon = item.querySelector("i");

        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    });

    faq.classList.toggle("active");

    const icon = faq.querySelector("i");

    if (faq.classList.contains("active")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
});
