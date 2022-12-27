const foodsmodel = require("../models/foodsModel");

const methodPost = async (req, res) => {
  try {
    const { namamakan, daerah, deskripsi } = req.body;
    const store = new foodsmodel({
      namamakan,
      daerah,
      deskripsi,
    });

    await store.save();
    res.json(store);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("error controller POST");
  }
};

const methodGet = async (req, res) => {
  try {
    const getData = await foodsmodel.findAll({});
    res.json(getData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("error controller GET");
  }
};

const methodGetId = async (req, res) => {
  try {
    const id = req.params.id;
    const getData = await foodsmodel.findOne({
      where: { id: id },
    });
    res.json(getData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("error controller GET");
  }
};

const methodPut = async (req, res) => {
  try {
    const { namamakan, daerah, deskripsi } = req.body;
    const id = req.params.id;

    const updateFoods = foodsmodel.update(
      {
        namamakan,
        daerah,
        deskripsi,
      },
      {
        where: { id: id },
      }
    );
    await updateFoods;
    res.send("Berhasil di update");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("error controller PUT");
  }
};

const methodDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteFoods = await foodsmodel.destroy({
      where: { id: id },
    });
    await deleteFoods;
    res.json({
      id: deleteFoods,
      message: "berhasil di hapus",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("error controller GET");
  }
};

module.exports = {
  methodPost,
  methodGet,
  methodGetId,
  methodPut,
  methodDelete,
};
