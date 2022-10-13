import mongoose from "mongoose";

const requestsSchema = new mongoose.Schema(
  {
    _id: false,
    id_request: {
          type: String,
          unique: true,
          index: true,
          required: true
        },
        user_id: {
          type: String,
          required: true
        },
        date_request: Date,
        city_source: String,
        city_destiny: String,
        state: {
            type: String,
            default: "Guardado"
        },
        package: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Package",
            }
        ],
    },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Requests", requestsSchema);