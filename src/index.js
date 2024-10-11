const burger = document.querySelector('#btn');
const menu = document.querySelector('#content');
const menuBpu = document.querySelector('#menuBpu');
const btnBpu = document.querySelector('#btnBpu');
const pengertian = document.querySelector('#pengertian');
const sidang = document.querySelector('#sidang');
const btnSidang = document.querySelector('#btnSidang');
const btnPengertian = document.querySelector('#btnPengertian');
const btnPetaKonsep = document.querySelector('#btnPetaKonsep');
const petaKonsep = document.querySelector('#petaKonsep');
const isiPandangan = document.querySelector('#isiPandangan');
const btnPandangan = document.querySelector('#btnPandangan');
const btnSukarno = document.querySelector('#btnSukarno');
const btnYamin = document.querySelector('#btnYamin');
const btnSoepomo = document.querySelector('#btnSoepomo');
const isiSukarno = document.querySelector('#isiSukarno');
const isiYamin = document.querySelector('#isiYamin');
const isiSoepomo = document.querySelector('#isiSoepomo');



burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

btnBpu.addEventListener('click', () => {
    if (menuBpu.classList.contains('hidden')) {
        menuBpu.classList.remove('hidden');
        menuBpu.classList.add('flex');
        menuBpu.classList.add('transition-all')
        menuBpu.classList.add('ease-out')
        menuBpu.classList.add('duration-200')
    } else {
        menuBpu.classList.add('hidden');
        sidang.classList.add('hidden');
        pengertian.classList.add('hidden');
    } 
})

btnSidang.addEventListener('click', () => {
    if (sidang.classList.contains('hidden')){
        sidang.classList.remove('hidden');
    } else {
        sidang.classList.add('hidden');
        pengertian.classList.add('hidden');
    }
})

btnPengertian.addEventListener('click', () => {
    if (pengertian.classList.contains('hidden')){
        pengertian.classList.remove('hidden');
    }    
    else {
        pengertian.classList.add('hidden');
        
    }
})

btnPetaKonsep.addEventListener('click', () => {
    if (petaKonsep.classList.contains('hidden')){
        petaKonsep.classList.remove('hidden');
        petaKonsep.classList.add('flex');
    }
    else {
        petaKonsep.classList.remove('flex');
        petaKonsep.classList.add('hidden');
    }
})

btnPandangan.addEventListener('click', () => {
    if (isiPandangan.classList.contains('hidden')){
        isiPandangan.classList.remove('hidden');
        isiPandangan.classList.add('flex');
    }
    else {
        isiPandangan.classList.add('hidden')
        isiPandangan.classList.remove('flex')
    }
})

btnSoepomo.addEventListener('click', () => {
    if (isiSoepomo.classList.contains('hidden')){
        isiSoepomo.classList.remove('hidden');
    }
    else {
        isiSoepomo.classList.add('hidden');
    }
})
btnSukarno.addEventListener('click', () => {
    if (isiSukarno.classList.contains('hidden')){
        isiSukarno.classList.remove('hidden');
    }
    else {
        isiSukarno.classList.add('hidden');
    }
})
btnYamin.addEventListener('click', () => {
    if (isiYamin.classList.contains('hidden')){
        isiYamin.classList.remove('hidden');
    }
    else {
        isiYamin.classList.add('hidden');
    }
})



