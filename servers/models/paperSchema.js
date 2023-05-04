import { model, models, Schema } from "mongoose";

const paperSchema = new Schema({
  title: String,
  description: String,
  comment: {
    type: Boolean,
    default: true,
  },
});

export const Papers = models.paperSchema || model("paperSchema", paperSchema);
