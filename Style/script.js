let currentIndex = 0;

function showContent(index) {
    const sliderContainers = document.querySelectorAll('.slider-container');
    
    // Hide all slider containers
    sliderContainers.forEach(container => {
        container.classList.add('hidden');
    });

    // Show the selected container
    sliderContainers[index].classList.remove('hidden');
}

function wrapIndex(index, length) {
    // Wrap around to the first or last slide if needed
    if (index < 0) {
        return length - 1;
    } else if (index >= length) {
        return 0;
    }
    return index;
}

function changeContent(delta) {
    currentIndex += delta;

    const sliderContainers = document.querySelectorAll('.slider-container');
    
    // Wrap around the index
    currentIndex = wrapIndex(currentIndex, sliderContainers.length);

    showContent(currentIndex);
}

function autoChangeContent() {
    // Ganti konten otomatis setiap 5000 milidetik (5 detik)
    setInterval(() => {
        changeContent(1); // Ubah ke konten selanjutnya
    }, 10000);
}

// Panggil fungsi autoChangeContent untuk mengaktifkan penggantian otomatis
autoChangeContent();

// Tampilkan konten pertama saat halaman dimuat
showContent(currentIndex);
