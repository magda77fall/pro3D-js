const modal = () => {
  const modalWindow = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = modalWindow.querySelector(".popup-content");
  const closeBtn = modalWindow.querySelector(".popup-close");
  let animationFrame;

  const resetAnimationStyles = () => {
    modalWindow.style.opacity = "";
    modalContent.style.opacity = "";
    modalContent.style.transform = "";
  };

  const openModal = () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }

    resetAnimationStyles();
    modalWindow.style.display = "block";

    if (window.innerWidth < 768) {
      return;
    }

    const duration = 400;
    const contentTransform = window.getComputedStyle(modalContent).transform;
    let startTime;

    modalWindow.style.opacity = "0";
    modalContent.style.opacity = "0";
    modalContent.style.transform = `${contentTransform} translateY(20px)`;

    const animate = (timestamp) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      modalWindow.style.opacity = String(easedProgress);
      modalContent.style.opacity = String(easedProgress);
      modalContent.style.transform = `${contentTransform} translateY(${20 * (1 - easedProgress)}px)`;

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        animationFrame = null;
        resetAnimationStyles();
      }
    };

    animationFrame = requestAnimationFrame(animate);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }

    resetAnimationStyles();
    modalWindow.style.display = "none";
  });
};
export default modal;
