import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
  subscribedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Newsletter || mongoose.model('Newsletter', NewsletterSchema);