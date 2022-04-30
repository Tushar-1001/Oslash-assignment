import shortCutModel from "../models/shortCutModel.js";


export const createShortCut = async (req, res) => {
  try {
    

    const { destinationUrl,shortCutUrl,  description } = req.body;
    const baseUrl = "http://localhost:3000";
    const shortCode = baseUrl + '/'+  shortCutUrl;

    const data = await shortCutModel.create({
      destinationUrl : destinationUrl ,
      shortCutUrl : shortCode,
      description : description,
    });

    return res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

export const getUrlDetails = async (req, res) => {
  try {
    const urlDetails = await shortCutModel.findOne({code : req.params.code})

    // console.log(urlDetails)

    return res.redirect(302,urlDetails.destinationUrl)

  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
