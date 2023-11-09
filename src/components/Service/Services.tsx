import { IService} from "@/@types";
import Service from "./Service";


type Props = {
    services: Array<IService>
}

export default function Services({services}:Props) {
    return(
        <>
            {services.map((props:IService, index) => {
                return <Service key={`${index}-pi`} {...props} />
            })}
        </>
    )
}
