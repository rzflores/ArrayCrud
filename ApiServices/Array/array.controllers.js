const {  response ,request } = require('express')
const { dbArray }  = require('../../db/index')

const selectArray =  async (req = request , res = response) => {

    try {


             res.status(201).json({
                ok:true,
                data:dbArray
            })
        

       
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })
    }

}

const addArray = async (req = request , res = response) => {  

    const  {  item } =  req.body



    try {
            if( !item ){
               return  res.status(400).json({
                    ok:false,
                    data:"Registrar parametro en el body"
                })
            }
            dbArray.push( item )
        

             res.status(201).json({
                ok:true,
                data:dbArray
            })
    


    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el administrador'
            })


    }


    
}

const updateArray = async (req = request , res = response) => {

    const itemQuery = req.params.itemQuery
    const  {  item } =  req.body
    try {  
        
        
        let index = dbArray.indexOf(parseInt(itemQuery))
        if(index !== -1){
            dbArray[index] = item  
        }
        else{
            return  res.status(400).json({
                ok:false,
                data:"Numero no existe en el Array"
            })
        }
        


        if( !item ){
            return  res.status(400).json({
                 ok:false,
                 data:"Registrar parametro en el body"
             })
         }
          
                    

         res.status(201).json({
            ok:true,
            data:dbArray
        })
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el adminitrador'
            })


    }

   
}



const deleteArray = async (req = request , res) => {

    const itemQuery = req.params.itemQuery
    

    try {
        
        let index = dbArray.indexOf(parseInt(itemQuery))
        
        if(index !== -1){
            dbArray.splice(index,1)
        }
        else{
            return  res.status(400).json({
                ok:false,
                data:"Numero no existe en el Array"
            })
        }
        
        

        

        res.status(201).json({
            ok:true,
            data:dbArray
        })
        
    } catch (error) {
            console.log(error);
            res.status(500) .json({
                ok:false,
                msg:'Error contacte con el adminitrador'
            })


    }

   
}
 

module.exports = {
    selectArray , 
    addArray , 
    updateArray , 
    deleteArray
}