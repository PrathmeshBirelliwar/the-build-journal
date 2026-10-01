
(() => {
    const grids = document.querySelectorAll('[data-grid]');
    if (!grids.length) return;

    grids.forEach((g) => {
        const cards = [...g.querySelectorAll('.card')];
        const chips = document.querySelectorAll('.chip');
        const q = document.getElementById('q');
        const sort = document.getElementById('sort');
        const clear = document.getElementById('clear');
        const empty = document.getElementById('empty');

        let cat = 'All';

        const apply = () => {
            const term = q ? q.value.trim().toLowerCase() : '';
            let visibleCount = 0;

            g.classList.toggle(
                'flt',
                g.classList.contains('list') || cat !== 'All' || !!term
            );

            cards.forEach((card) => {
                const cardCategory = card.dataset.cat || '';
                const cardText = (card.dataset.text || '').toLowerCase();

                const matchesCategory =
                    cat === 'All' || cardCategory === cat;

                const matchesSearch =
                    !term || cardText.includes(term);

                const visible = matchesCategory && matchesSearch;

                card.hidden = !visible;

                if (visible) visibleCount++;
            });

            if (empty) {
                empty.hidden = visibleCount > 0;
            }

            chips.forEach((chip) => {
                const active = chip.dataset.cat === cat;

                chip.classList.toggle('on', active);
                chip.setAttribute('aria-pressed', String(active));
            });
        };

        chips.forEach((chip) => {
            chip.addEventListener('click', () => {
                cat = chip.dataset.cat || 'All';
                apply();
            });
        });

        if (q) {
            q.addEventListener('input', apply);
        }

        if (sort) {
            sort.addEventListener('change', () => {
                const direction = sort.value === 'old' ? 1 : -1;

                cards
                    .sort((a, b) => {
                        return direction *
                            (a.dataset.date || '').localeCompare(
                                b.dataset.date || ''
                            );
                    })
                    .forEach((card) => g.appendChild(card));

                apply();
            });
        }

        if (clear) {
            clear.addEventListener('click', () => {
                cat = 'All';

                if (q) q.value = '';
                if (sort) {
                    sort.value = 'new';
                    sort.dispatchEvent(new Event('change'));
                }

                apply();
            });
        }

        const params = new URLSearchParams(window.location.search);

        if (q && params.has('q')) {
            q.value = params.get('q') || '';
        }

        apply();
    });
})();