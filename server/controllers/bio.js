const BioModel = require("../models/bio");

const get = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  try {
    const total = await BioModel.countDocuments();

    const query = await BioModel.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      total,
      data: query,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data!", error: error.message });
  }
};

const post = async (req, res) => {
  const { name, age, height, gender, profession, createdAt } = req.body;

  try {
    const create = new BioModel({
      name,
      age,
      height,
      gender,
      profession,
      createdAt,
    });

    await create.save();

    res.status(200).json({ message: "Information Added!" });
  } catch (error) {
    console.error("Error adding information:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  get,
  post,
};
