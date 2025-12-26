document.addEventListener('click', (e) => {
    const tombol = e.target.closest('.btn1');
    if (tombol) {
        const url = tombol.dataset.url;
        if (url) window.location.href = url;
    }
});