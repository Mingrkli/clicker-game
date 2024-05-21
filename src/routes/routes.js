import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BattleSelection from "../views/BattleSelection.vue";
import BattleFight from "../views/BattleFight.vue";
import NotFound from "../views/NotFound.vue";

import testingJson from "../assets/testingJson.json";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: Home },
        {
            path: "/battle",
            name: "BattleSelection",
            component: BattleSelection,
        },
        {
            path: "/battle/:id",
            name: "BattleFight",
            component: BattleFight,
            beforeEnter: (to) => {
                const id = parseInt(to.params.id);
                const localTests = testingJson.test;
                const exists = localTests.some((test) => test.id === id);

                if (!exists)
                    return {
                        name: "NotFound",
                        // The following preserves the url path
                        params: { pathMatch: to.path.substring(1).split("/") },
                        query: to.query,
                        hash: to.hash,
                    };
            },
        },
        { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    ],
});

export default router;
