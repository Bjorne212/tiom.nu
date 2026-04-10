(function () {
    var forms = document.querySelectorAll('form[data-protected-form]');

    forms.forEach(function (form) {
        var startedAtInput = form.querySelector('input[name="started_at"]');
        if (startedAtInput) {
            startedAtInput.value = String(Date.now());
        }

        form.addEventListener('submit', function (event) {
            var honeypot = form.querySelector('input[name="_gotcha"]');
            if (honeypot && honeypot.value.trim() !== '') {
                event.preventDefault();
                return;
            }

            var startedAt = startedAtInput ? Number(startedAtInput.value) : Date.now();
            var elapsedSeconds = (Date.now() - startedAt) / 1000;

            if (elapsedSeconds < 4) {
                event.preventDefault();
                alert('Vänta några sekunder och försök igen.');
            }
        });
    });
})();
