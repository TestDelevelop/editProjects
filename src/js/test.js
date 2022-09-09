#!/usr/bin / env rhino
const core = require('@actions/core');
const github = require('@actions/github');

const nameToGreet = core.getInput('test-auth');
const token = process.env.TEST_AUTH;
console.log(token);
console.log(nameToGreet);