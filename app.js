const express = require("express");
const http = require("http");
const path = require("path");

const server = http.createServer((request, response)=>{
    if(request.url === "/"){
        response.end("Animal server")
    }
})







server.listen(3000)