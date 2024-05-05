import { slide } from "./functions.js";

export default function mainPage() {
    // Preview слайдер

    const previewSlider = document.querySelector("#preview-slider");
    const previewPrevBtn = document.querySelector("#preview-prev");
    const previewNextBtn = document.querySelector("#preview-next");

    previewPrevBtn.addEventListener("click", slide(previewSlider, -300, 300));
    previewNextBtn.addEventListener("click", slide(previewSlider, 300, 300));

    // Templates слайдер

    const templatesSlider = document.querySelector("#templates-slider");
    const templatesPrevBtn = document.querySelector("#templates-prev");
    const templatesNextBtn = document.querySelector("#templates-next");

    templatesPrevBtn.addEventListener("click", slide(templatesSlider, -300, 300));
    templatesNextBtn.addEventListener("click", slide(templatesSlider, 300, 300));
}
