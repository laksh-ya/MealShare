import User from "../models/user";
import express from "express";

const router = express.Router();

router.post('/staff/fetchQRsByTime', async (req, res) => {
    const { mealTime, floor } = req.body;
    try {
        // Validate input
        if (!mealTime || !floor) {
            return res.status(400).json({ errors: [{ msg: 'Meal time and floor are required' }] });
        }

        // Fetch users based on meal time and floor
        const qrCode = await User.findOne({ floor: floor, [`qrStatus.${mealTime}.enabled`]: true, [`qrStatus.${mealTime}.redeemed`]: false });
        if (!qrCode) {
            return res.status(404).json({ errors: [{ msg: 'No QR code found for the given criteria' }] });
        }

        qrCode.qrStatus[mealTime] = true; // Set the meal time status to true

        res.json({ qrCode: qrCode.qrCode });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
