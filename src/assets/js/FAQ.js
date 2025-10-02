document.addEventListener("DOMContentLoaded", () => {
    const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
    if (!faqItems.length) {
        return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const addMaxHeightListener = (element, callback) => {
        const handler = (event) => {
            if (event.propertyName !== "max-height") {
                return;
            }

            element.removeEventListener("transitionend", handler);
            callback();
        };

        element.addEventListener("transitionend", handler);
    };

    const collapseItem = (item) => {
        const trigger = item.querySelector(".faq-trigger");
        if (!trigger || trigger.getAttribute("aria-expanded") === "false") {
            return;
        }

        const bodyId = trigger.getAttribute("aria-controls");
        const body = bodyId ? document.getElementById(bodyId) : null;
        if (!body) {
            return;
        }

        trigger.setAttribute("aria-expanded", "false");

        if (prefersReducedMotion) {
            item.classList.remove("active");
            body.hidden = true;
            body.style.removeProperty("max-height");
            return;
        }

        const currentHeight = body.scrollHeight;
        body.style.maxHeight = `${currentHeight}px`;

        requestAnimationFrame(() => {
            item.classList.remove("active");
            body.style.maxHeight = "0px";
        });

        addMaxHeightListener(body, () => {
            body.hidden = true;
            body.style.removeProperty("max-height");
        });
    };

    const expandItem = (item) => {
        const trigger = item.querySelector(".faq-trigger");
        if (!trigger || trigger.getAttribute("aria-expanded") === "true") {
            return;
        }

        const bodyId = trigger.getAttribute("aria-controls");
        const body = bodyId ? document.getElementById(bodyId) : null;
        if (!body) {
            return;
        }

        trigger.setAttribute("aria-expanded", "true");
        body.hidden = false;
        item.classList.add("active");

        if (prefersReducedMotion) {
            body.style.removeProperty("max-height");
            return;
        }

        body.style.maxHeight = "0px";

        requestAnimationFrame(() => {
            const targetHeight = body.scrollHeight;
            body.style.maxHeight = `${targetHeight}px`;
        });

        addMaxHeightListener(body, () => {
            body.style.removeProperty("max-height");
        });
    };

    for (const item of faqItems) {
        const trigger = item.querySelector(".faq-trigger");
        const bodyId = trigger?.getAttribute("aria-controls");
        const body = bodyId ? document.getElementById(bodyId) : null;

        if (!trigger || !body) {
            continue;
        }

        const expanded = trigger.getAttribute("aria-expanded") === "true";

        if (expanded) {
            item.classList.add("active");
            body.hidden = false;

            if (!prefersReducedMotion) {
                body.style.maxHeight = `${body.scrollHeight}px`;

                addMaxHeightListener(body, () => {
                    body.style.removeProperty("max-height");
                });
            }
        } else {
            item.classList.remove("active");
            body.hidden = true;
            body.style.maxHeight = "0px";
        }

        trigger.addEventListener("click", () => {
            const isExpanded = trigger.getAttribute("aria-expanded") === "true";
            if (isExpanded) {
                collapseItem(item);
                return;
            }

            for (const other of faqItems) {
                if (other !== item) {
                    collapseItem(other);
                }
            }

            expandItem(item);
        });
    }
});
