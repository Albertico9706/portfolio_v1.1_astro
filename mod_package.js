import path from "path";
import fs from "fs"

const astro_package_local='"astro": "file:D:/Abc/workspace/portfolio_v1.1_astro/node_modules/astro-4.0.8.tgz",'
const astro_package_production='"astro": "^4.2.0",'
fs.readdir("./",(err,files)=>{
files.map(f=>{
    if(path.basename(f)==="list-components.js"){
        
        console.log(path.basename(f))
    }
    
}
    )

    }
)

