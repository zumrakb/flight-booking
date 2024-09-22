const axios = require("axios");
const Flight = require("../models/flight.js");
const { flightApiUrl, appKey, appId } = require("../config/flight.js");

/**
 * getFlight ->  * bu fonksiyon, istemci tarafından talep edilen parametreye
 * göre uçuşun verilerini getirmek için uçuş API'sini çağıracaktır
 *
 */
async function getFlight(req, res) {
  try {
    const { direction, flightdate } = req.query;
    const response = await axios.get(flightApiUrl, {
      headers: {
        app_id: appId,
        app_key: appKey,
        resourceversion: "v4",
        Accept: "application/json",
      },
      params: {
        scheduleDate: flightdate,
        flightDirection: direction,
      },
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching flight data:", error);
    return res.status(500).send("Error fetching flight data");
  }
}

/**
 * getMyFlight -> Bu fonksiyon mongodb'de saklanan tüm rezervasyon uçuşlarımı alacak ve
 * istemciye geri gönderecektir.
 */
async function getMyFlight(req, res) {
  try {
    // createdat azalan sırasına göre uçuş alınıyor
    const flights = await Flight.find().sort({ createdAt: -1 });
    return res.status(200).json(flights);
  } catch (error) {
    console.error("Error fetching flight data from MongoDB:", error);
    return res.status(500).json({
      message: "Error fetching flight data from MongoDB",
      error: error.message,
    });
  }
}
/**
 * postMyFlight -> Bu fonksiyon, uçuş rezervasyon detaylarımı mongodb'de saklamaktan sorumludur
 */
async function postMyFlight(req, res) {
  try {
    // body payload için doğrulama. Boş gövdeye izin verilmez
    const data = req.body;
    if (!Object.keys(data))
      return res.status(400).json({ message: "Invalid body" });

    // Uçuş örneği başlatılıyor
    const newFlight = new Flight(req.body);
    // uçuş örneğini kaydetme
    await newFlight.save();

    return res.status(200).json({ message: "Flight added successfully!" });
  } catch (error) {
    console.error("Error saving flight:", error);
    return res
      .status(500)
      .json({ message: "Error adding flight", error: error.message });
  }
}

/**
 * deleteMyFlight -> Bu fonksiyon rezervasyon bilgilerimi id'sine göre silmekten sorumludur.
 *
 * Öncelikle id'nin mongodb'de olup olmadığı kontrol edilmeli,
 * eğer varsa o zaman o veriyi mongodb'den sileceğiz
 *
 * param ile id gönderiliyor
 *
 */
async function deleteMyFlight(req, res) {
  try {
    // param'dan id onaylatılıyor
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "invalid id" });

    // verinin database'de olup oladığı kontrol ediliyor c
    const flight = await Flight.findById(id);
    if (!flight) {
      return res.status(404).json({ message: "flight not found." });
    }

    // eğer veri blunduysa, id kullanılarak siliniyor:
    await Flight.findByIdAndDelete(flight._id);
    return res.status(200).json({ message: "flight deleted ." });
  } catch (error) {
    console.error("error deleting flight:", error.message);
    return res
      .status(500)
      .json({ message: "error deleting flight", error: error.message });
  }
}

module.exports = {
  getFlight,
  getMyFlight,
  postMyFlight,
  deleteMyFlight,
};
