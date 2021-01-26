const {server,db} = require('../server.js');
const request = require('supertest');

describe('test function in userRouter.js', ()=> {
    it('test findAll endpoint', async (done) => {
        await request(server).get('/findAll').expect(200)
        done()
    })

    afterAll(async (done) => {
        await db.close()
        await server.close()
    })

})