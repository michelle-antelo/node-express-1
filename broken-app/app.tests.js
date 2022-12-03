process.env.NODE_ENV = "test";

// const request = require("supertest");
const request = require('supertest')

const app = require("./app");

let requestBody = { "developers": ["joelburton"] }

const runTest = async () => {
    const resp = await request(app)
    .post(`/`)
    .send(requestBody);

    console.log('***** helooo', resp.body)
}

runTest()
//   expect(resp.statusCode).toBe(201);
