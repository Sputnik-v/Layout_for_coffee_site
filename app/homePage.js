







document.addEventListener("DOMContentLoaded", () => {

const body = document.querySelector('body');
const modalWrapper = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal-window');
const modalKrestik = document.querySelector('.modal-krestik');
const footerElem = document.querySelector('.footer');






function deleteDom() {
 
        modalWrapper.classList.remove('modal-active');
        body.style.overflow = 'auto';
    } 
    

function closeModal() {

    modalKrestik.addEventListener('click',(e) => {
        deleteDom();
    });
    modalWrapper.addEventListener('click', (e) => {
        deleteDom();
    });

}

    function openModal() {
        modalWrapper.classList.add('modal-active');
        body.style.overflow = 'hidden';
        window.removeEventListener('scroll', showByModalScroll);
    }

    function showByModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            clearTimeout(timeModal);
            window.removeEventListener('scroll', showByModalScroll);
        }
    }


    window.addEventListener('scroll', showByModalScroll);

    const timeModal = setTimeout(openModal, 15000);    

    closeModal();

  });