// Navigation
const tabs = document.querySelectorAll('.section');
const menuButtons = document.querySelectorAll('.menu_button');

const clearTabs = function () {
    window.scrollTo(0, 0);
    tabs.forEach(function (tab) {
        tab.style.display = 'none'
    });
    menuButtons.forEach(function (button) {
        button.classList.remove('active')
    });
}

menuButtons.forEach(function (button, key) {
    button.addEventListener('click', function () {
        clearTabs();
        tabs[key].style.display = 'block';
        menuButtons[key].classList.add('active');
    });
});

// Learn
const arrow = document.querySelector('.learn__trigger');
const collapsingBlock = document.querySelector('.main__together__learn');

arrow.addEventListener('click', function () {
    if (collapsingBlock.classList.contains('collapsed')) {
        collapsingBlock.classList.remove('collapsed');
    } else {
        collapsingBlock.classList.add('collapsed');
    }
});

// services
const servicesButtons = document.querySelectorAll('.services__buttons, .main__discount__button');

servicesButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        clearTabs();
        tabs[4].style.display = 'block';
        menuButtons[4].classList.add('active');
    })
});

// Contacts form
const form = document.forms.contacts;
const success = document.querySelector('.contacts__success');
const error = document.querySelector('.contacts__error');
const errorStatus = document.querySelector('.contacts__error__status');

function validateForm() {
    const validData = {};

    const name = form.elements.name;
    if (name.value.length > 50) {
        name.classList.add('invalid');
    } else {
        validData.name = name.value;
        name.classList.remove('invalid');
    }

    const email = form.elements.email;
    if (!/^.+@.+\..+$/.test(email.value)) {
        email.classList.add('invalid');
    } else {
        validData.email = email.value;
        email.classList.remove('invalid');
    }

    const tel = form.elements.tel;
    if (!/^[\(\)\-\d]+$/.test(tel.value)) {
        tel.classList.add('invalid');
    } else {
        validData.tel = tel.value;
        tel.classList.remove('invalid');
    }

    const msg = form.elements.message;
    if (msg.value.length > 300) {
        msg.classList.add('invalid');
    } else {
        validData.msg = msg.value;
        msg.classList.remove('invalid');
    }

    if (Object.keys(validData).length < 4) {
        return false;
    }

    return validData;
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const validData = validateForm();

    if (validData) {
        const customerUpdater = new XMLHttpRequest();
        var data = JSON.stringify(validData);
        customerUpdater.open('POST', form.action, true);
        customerUpdater.setRequestHeader('Content-Type', 'application/json');
        customerUpdater.send(data);
        customerUpdater.onload = function () {
            if (customerUpdater.status === 200) {
                form.style.display = 'none';
                success.style.display = 'block';
                setTimeout(function () {
                    form.style.display = 'flex';
                    success.style.display = 'none';
                }, 5000);
            } else {
                form.style.display = 'none';
                error.style.display = 'block';
                errorStatus.textContent = `Статус ошибки: ${customerUpdater.status}`;
                setTimeout(function () {
                    form.style.display = 'flex';
                    error.style.display = 'none';
                }, 5000);
            }
        }
    }
});

document.querySelector('.contacts__success__link').addEventListener('click', function () {
    clearTabs();
    tabs[0].style.display = 'block';
    menuButtons[0].classList.add('active');
})