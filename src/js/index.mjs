import router from "./router/index.mjs";
import { setNavListener } from "./handlers/ui/index.mjs";

setNavListener();
router();
