import { projects } from "../js/constants.js";

export const home = () => {
    Alpine.data('projects', () => ({        
        get projects() {
            return projects;
        }
    }));
    
    gsap.from('#app', {
        y: 12,
        ease: 'power2.out',
        duration: 0.3,
        stagger: 0.01,
    });
};