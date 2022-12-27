const express = require("express");

const methodGet = (req, res) => {
  res.send("contoh menggunakan method GET");
};

const methodPost = (req, res) => {
  res.send("contoh menggunakan method POST");
};

const methodPut = (req, res) => {
  res.send("contoh menggunakan method put");
};

const methodDelete = (req, res) => {
  res.send("contoh menggunakan method DELETE");
};

module.exports = {
  methodGet,
  methodPost,
  methodPut,
  methodDelete,
};
