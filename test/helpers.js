const supertest = require('supertest');
const chai = require( 'chai' );
const mongoose = require('mongoose');
const mockgoose = require('mockgoose');
const app = require( '../app.js' );


global.app = app;
global.expect = chai.expect;
global.request = supertest(app);
global.mockgoose = mockgoose;
