(function () {
    const CTA_SELECTORS = ".cta";

    function getCtaText(width) {
        if (width < 400) {
            return "Contact Us!";
        }

        if (width < 425) {
            return "Schedule a consultation";
        }

        if (width < 500) {
            return "Schedule a Free Consultation";
        }

        return "Schedule a Free Consultation Today!";
    }

    function updateCtaButtons() {
        const ctaButtons = document.querySelectorAll(CTA_SELECTORS);
        if (!ctaButtons.length) {
            return;
        }

        const text = getCtaText(window.innerWidth);
        ctaButtons.forEach((button) => {
            button.textContent = text;
        });
    }

    window.addEventListener("resize", updateCtaButtons);
    window.addEventListener("DOMContentLoaded", updateCtaButtons);
    updateCtaButtons();
})();
