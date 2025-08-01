function fadeOutAndRedirect(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500); // 500ms delay matches CSS transition
}
