const { Router } = require('express')
const { selectArray , addArray , updateArray , deleteArray }  = require('../Array/array.controllers')

const router = Router()

router.get(
            '/selectArray',
            selectArray 
           )

router.post(
            '/addArray', 
            addArray       
            )

router.put(
            '/:itemQuery',    
            updateArray
            )

router.delete(
            '/:itemQuery',    
            deleteArray
    )



module.exports = router;