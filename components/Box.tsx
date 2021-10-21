import { useRouter } from "next/dist/client/router";
import { ReactNode } from "react";

const Box = (props: {children?: ReactNode, css?: string, img?: string, outercss?: string, to?: string}) => {
    const router = useRouter();
    return (
        <div className={`p-3 ${props.outercss}`} onClick={() => {props.to===undefined?null:router.push(props.to)}}>
            <div className={`rounded p-2 bg-center bg-cover ${props.css}`} style={{backgroundImage: props.img!=undefined?`url(${props.img})`:''}}>
                {props.children}
            </div>
        </div>
    );
};

export default Box;