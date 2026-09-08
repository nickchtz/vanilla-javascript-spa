import './libs/alpine.js';
import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/index.js';

import { config } from "./config.js";
import { router } from "./router.js";
import { routes } from "./routes.js";

window.gsap = gsap;

router.init(routes, config);