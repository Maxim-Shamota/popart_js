// const accordion = (triggersSelector, itemsSelector) => {
const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            hideContent(i);
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            }else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    
    const hideContent = (n) => {
        btns.forEach((btn, i) => {
            if (i !== n) {
                btn.classList.remove('active-style');
                btn.nextElementSibling.classList.remove('active-content');
                btn.nextElementSibling.style.maxHeight = '0px';
            }
        });
    };

    //       blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(item => {
    //     item.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                btn.classList.remove('active', 'active-style'); 
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;