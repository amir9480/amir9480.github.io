import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

createApp(App).use(VueLazyload).mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');
    for (let item of anchorlinks) {
        item.addEventListener('click', (e)=> {
            let hashval: string|null = item.getAttribute('href');
            if (typeof hashval === 'string') {
                let target = document.querySelector(hashval);
                let navbar = document.querySelector('.navbar') as HTMLElement;
                if (target && navbar) {
                    const y = target.getBoundingClientRect().top + window.pageYOffset - (navbar.offsetHeight + 10);
                    window.scrollTo({top: y, behavior: 'smooth'});
                    history.pushState(null, '', hashval);
                }
            }
            let drawer = document.querySelector('#website-drawer') as HTMLInputElement;
            if (drawer) {
                drawer.checked = false;
            }
            e.preventDefault();
        });
    }
});
