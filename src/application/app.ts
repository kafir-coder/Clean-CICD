import {Container} from "@tsclean/core";
import {controllers} from "@/infrastructure/entry-points/api";
import {adapters, services} from "@/infrastructure/driven-adapters/providers";

@Container({
    controllers: [...controllers],
    providers: [...services, ...adapters]
})

export class AppContainer {}