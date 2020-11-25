export default class ContactPerspective {
    constructor($gsap) {
        let text = document.querySelectorAll('.contact .item');
        let halfX = window.innerWidth / 2;
        let halfY = window.innerHeight / 2;

        text.forEach((el, i) => {
            $gsap.timeline().to(el, 1, {
                z: 1 * (i + 8)
            });
        });

        document.addEventListener('mousemove', (e) => {
            text.forEach((el, i) => {
                $gsap.timeline().to(el, 0.5, {
                    x: (e.clientX - halfX) * (i + 1) * 0.01,
                    y: (e.clientY - halfY) * (i + 1) * 0.01
                });
            });
        });
    }
}