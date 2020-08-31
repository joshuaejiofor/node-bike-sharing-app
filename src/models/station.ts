import mongoose from 'mongoose'

const stationSchema = new mongoose.Schema({
    at: {
        type: String,
        required: true,
        unique: true
    },
    stations: {
        type: JSON,
        required: true
    },
    weather: {
        type: JSON,
        required: true
    }

}, {
    timestamps: true
})

stationSchema.methods.toJSON = function () {
    const station = this
    const stationObject = station.toObject()

    delete stationObject.__v
    delete stationObject._id
    delete stationObject.createdAt
    delete stationObject.updatedAt

    return stationObject
}

const Station = mongoose.model('Station', stationSchema)

module.exports = Station