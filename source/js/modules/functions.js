// Функция для слайдеров

const slide = (slider, step, period) => () => {
    const startTime = Date.now();
    const startLeft = slider.scrollLeft;
    const render = () => {
        const dt = Date.now() - startTime;
        if (dt < period) {
            slider.scrollLeft = startLeft + (step * dt) / period;
            requestAnimationFrame(render);
        }
    };
    requestAnimationFrame(render);
};

export { slide };
