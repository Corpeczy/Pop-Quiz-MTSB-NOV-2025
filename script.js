function semakCheckpoint() {
    
    // 1. Tentukan SEMUA jawapan betul (dalam huruf kecil)
    // Sila tukar jawapan ini kepada jawapan sebenar anda
    const jawapanSebenar = {
        q1: "oren", // Contoh sahaja
        q2: "teknologi",
        q3: "prof. madya dr. hamdan bin dato' mohd salleh",
        q4: "5",
        q5: "elvina" // Maskot UNISEL
    };

    // 2. Dapatkan SEMUA jawapan pelajar
    // Kita guna .toLowerCase() untuk tukar ke huruf kecil
    // Kita guna .trim() untuk buang ruang kosong di tepi (cth: " jawapan ")
    const jawapanPelajar = {
        q1: document.getElementById('q1').value.toLowerCase().trim(),
        q2: document.getElementById('q2').value.toLowerCase().trim(),
        q3: document.getElementById('q3').value.toLowerCase().trim(),
        q4: document.getElementById('q4').value.toLowerCase().trim(),
        q5: document.getElementById('q5').value.toLowerCase().trim()
    };

    // 3. Ambil elemen mesej dan butang klu
    const messageContainer = document.getElementById('checkpointMessage');
    const clueButton = document.getElementById('clueButton');

    // 4. Semak setiap jawapan dan kemaskini feedback per-soalan
    const keys = Object.keys(jawapanSebenar);
    let semuaBetul = true;

    keys.forEach(key => {
        const pelajar = jawapanPelajar[key];
        const betul = pelajar === jawapanSebenar[key];
        const inputEl = document.getElementById(key);
        const feedbackEl = document.getElementById(key + '-feedback');

        if (betul) {
            inputEl.classList.remove('incorrect');
            inputEl.classList.add('correct');
            feedbackEl.textContent = '✓ Betul';
            feedbackEl.className = 'feedback correct-text';
        } else {
            inputEl.classList.remove('correct');
            inputEl.classList.add('incorrect');
            feedbackEl.textContent = '✕ Salah';
            feedbackEl.className = 'feedback incorrect-text';
            semuaBetul = false;
        }
    });

    // 5. Jika semua betul — tunjuk butang klu, jika tidak sembunyikan butang klu dan tunjuk mesej ringkas
    if (semuaBetul) {
        clueButton.style.display = 'block';
        messageContainer.style.display = 'none';
    } else {
        clueButton.style.display = 'none';
        messageContainer.innerHTML = "<strong>Ops!</strong> Ada jawapan yang masih salah. Lihat petunjuk di sebelah setiap soalan.";
        messageContainer.className = 'msg-error';
        messageContainer.style.display = 'block';
    }
}

function tunjukKlu() {
    const messageContainer = document.getElementById('checkpointMessage');
    messageContainer.innerHTML = "<strong>Tahniah!</strong> Semua jawapan betul. Sila tunjuk ke fasi yang bertugas<br>"
    messageContainer.className = 'msg-success';
    messageContainer.style.display = 'block';
    // Optional: disable clue button after shown
    document.getElementById('clueButton').disabled = true;
}