import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema(
  {
    Participents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);
const coversation = mongoose.model("Conversation", conversationSchema);
export default coversation;
