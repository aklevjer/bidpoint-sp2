import router from "./router/index.mjs";
import { setupHeader } from "./handlers/ui/header/index.mjs";

setupHeader();
router();
