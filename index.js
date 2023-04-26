const fs=require('fs');
const replaceThis="vc";
const replaceWith="nitin123";
const preview=false;
const path=require('path');
const folder=__dirname;
try
{
    const data=fs.readdir(folder,(err,data)=>
    {
    for(let index=0;index<data.length;
        index++)
    {
        const item=data[index];
        let oldfile=path.join(folder , item);
        let newfile=path.join(folder , item.replaceAll(replaceThis,replaceWith))
        if(!preview)
        {
            fs.rename(oldfile,newfile,()=>{
                console.log("Rename Succesfully",item,newfile);  
              })
        }
        else
        {
            if("data/" + item!==newfile)
            {
            console.log("" + item+" Will be rename with "+ newfile)
            }
        }
            
        }
        
    });
    
}
catch(err)
{
  console.error(err)
}