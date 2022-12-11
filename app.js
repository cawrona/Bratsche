const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenrightElements = document.querySelectorAll('.hiddenright');
hiddenrightElements.forEach((el) => observer.observe(el));

const hiddenleftElements = document.querySelectorAll('.hiddenleft');
hiddenleftElements.forEach((el) => observer.observe(el));

const hiddenupElements = document.querySelectorAll('.hiddenup');
hiddenupElements.forEach((el) => observer.observe(el));