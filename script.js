// Функционал кнопок "Подробнее"
document.addEventListener('DOMContentLoaded', function() {
    const moreBtn1 = document.getElementById('moreBtn1');
    const moreText1 = document.getElementById('moreText1');
    const moreBtn2 = document.getElementById('moreBtn2');
    const moreText2 = document.getElementById('moreText2');
    
    // Навигационные кнопки
    const catalogBtn = document.getElementById('catalogBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactsBtn = document.getElementById('contactsBtn');
    const catalogModal = document.getElementById('catalogModal');
    const aboutModal = document.getElementById('aboutModal');
    const closeModal = document.getElementById('closeModal');
    const closeAboutModal = document.getElementById('closeAboutModal');
    
    // Первая кнопка "Подробнее"
    moreBtn1.addEventListener('click', function() {
        moreText1.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (moreText1.classList.contains('active')) {
            icon.className = 'fas fa-chevron-up';
            this.innerHTML = '<i class="fas fa-chevron-up"></i> Скрыть';
        } else {
            icon.className = 'fas fa-chevron-down';
            this.innerHTML = '<i class="fas fa-chevron-down"></i> Подробнее';
        }
    });
    
    // Вторая кнопка "Подробнее"
    moreBtn2.addEventListener('click', function() {
        moreText2.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (moreText2.classList.contains('active')) {
            icon.className = 'fas fa-chevron-up';
            this.innerHTML = '<i class="fas fa-chevron-up"></i> Скрыть';
        } else {
            icon.className = 'fas fa-chevron-down';
            this.innerHTML = '<i class="fas fa-chevron-down"></i> Подробнее';
        }
    });
    
    // Кнопка "Каталог авто" - открывает модальное окно
    catalogBtn.addEventListener('click', function() {
        catalogModal.style.display = 'flex';
    });
    
    // Кнопка "О компании" - открывает модальное окно
    aboutBtn.addEventListener('click', function() {
        aboutModal.style.display = 'flex';
    });
    
    // Кнопка "Контакты" - плавная прокрутка к разделу контактов
    contactsBtn.addEventListener('click', function() {
        document.getElementById('contactsSection').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Закрытие модального окна "Каталог"
    closeModal.addEventListener('click', function() {
        catalogModal.style.display = 'none';
    });
    
    // Закрытие модального окна "О компании"
    closeAboutModal.addEventListener('click', function() {
        aboutModal.style.display = 'none';
    });
    
    // Закрытие модальных окон при клике вне их
    window.addEventListener('click', function(event) {
        if (event.target === catalogModal) {
            catalogModal.style.display = 'none';
        }
        if (event.target === aboutModal) {
            aboutModal.style.display = 'none';
        }
    });
    
    // Закрытие модальных окон по клавише ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (catalogModal.style.display === 'flex') {
                catalogModal.style.display = 'none';
            }
            if (aboutModal.style.display === 'flex') {
                aboutModal.style.display = 'none';
            }
        }
    });
    
    // Автоматическое определение нужной высоты для скрытого текста
    function calculateTextHeight(textElement) {
        // Временно показываем элемент для измерения
        textElement.style.display = 'block';
        textElement.style.maxHeight = 'none';
        textElement.style.opacity = '1';
        
        // Получаем высоту
        const height = textElement.scrollHeight;
        
        // Возвращаем исходные стили
        textElement.style.display = '';
        textElement.style.maxHeight = '';
        textElement.style.opacity = '';
        
        return height;
    }
    
    // Устанавливаем правильную высоту для скрытого текста
    setTimeout(() => {
        const height1 = calculateTextHeight(moreText1);
        const height2 = calculateTextHeight(moreText2);
        
        // Устанавливаем максимальную высоту для активного состояния
        const style = document.createElement('style');
        style.textContent = `
            #moreText1.active { max-height: ${height1 + 20}px !important; }
            #moreText2.active { max-height: ${height2 + 20}px !important; }
        `;
        document.head.appendChild(style);
    }, 100);
});

// Функция для скрытия шапки при прокрутке вниз
let lastScrollTop = 0;
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Прокрутка вниз - скрываем шапку
        header.style.top = '-100px';
    } else {
        // Прокрутка вверх - показываем шапку
        header.style.top = '0';
    }
    
    lastScrollTop = scrollTop;
});