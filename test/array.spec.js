const request = require('supertest');
const app = require('../app');

const { dbArray }  = require('../db/index');


describe('GET /v1/array/selectArray', () => {
       

        test('deberia retonar codigo de estado 201',async () => { 
           const res = await request(app).get('/v1/array/selectArray').send();
            expect( res.statusCode ).toBe(201)
        })


        test('deberia retonar un arreglo con el valor inicial en el body.data debe ser el valor de dbArray',async () => { 
            const res = await request(app).get('/v1/array/selectArray').send();            
             expect(res.body.data ).toEqual(dbArray)
         })

    }
)


describe('POST /v1/array/addArray',  () => {
       
    const paramBody = {
        item : 25
    }

    

    test('deberia retonar codigo de estado 400 cuando no se envia parametro en el body',async () => { 
        const res = await request(app).post('/v1/array/addArray').send(  );

        expect( res.statusCode ).toBe(400)
    })

    test('deberia agregar el numero enviado en body al arreglo', async() => { 
        const res = await request(app).post('/v1/array/addArray').send( paramBody );
        expect(res.body.data).toEqual(dbArray)

    })

    
}
)


describe('PUT /v1/array/updateArray', () => {
    const paramBody = {
        item : 1
    }
       

    test('deberia retonar que el parametro enviado por query no existe y codigo 400',async () => { 
        const res = await request(app).put('/v1/array/100').send();
        console.log(res.statusCode)
        expect( res.statusCode ).toBe(400)
        expect( res.body.data ).toBe('Numero no existe en el Array')
    })


    test('deberia actualizar el numero enviado en el body',async () => { 
        const res = await request(app).put('/v1/array/1').send( paramBody );
        expect(res.body.data).toEqual(dbArray)
     })

}
)

describe('DELETE /v1/array/deleteArray', () => {
 
   
    test('deberia retonar que el parametro enviado por query no existe y codigo 400',async () => { 
        const res = await request(app).delete('/v1/array/100').send();
        console.log(res.statusCode)
        expect( res.statusCode ).toBe(400)
        expect( res.body.data ).toBe('Numero no existe en el Array')
    })


    test('deberia eliminar el numero enviado por el query',async () => { 
        const res = await request(app).delete('/v1/array/2').send(  );
        expect(res.body.data).toEqual(dbArray)
     })

}
)