import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'>{
   tranparent?: boolean
}


export function IconButton({tranparent, ...props} : IconButtonProps){
    return(

<button{...props} 

className={twMerge('border border/white/10 p-1 rounded-md p-1.5',
tranparent ? 'bg-black/20':'bg-white/10', props.disabled ?'opacity-50':null,
    )}
    />
    )
}