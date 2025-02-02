import { useState } from "react";

function Component()
{
    const li = ['apple','bana','ori'];
    const po = <ol>
    {li.map((item,index)=>
            <li key={index}>{item}</li>

    )}
</ol>
    return(po
    );
    
}

export default Component;