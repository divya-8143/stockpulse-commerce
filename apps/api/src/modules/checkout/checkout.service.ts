import { CartItem } from "@stockpulse/shared-types";
import { AppError } from "../../middleware/errorHandler.js";

export class CheckoutValidator {
  public static validateCustomerInfo(info: {
    fullName?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
  }) {
    if (!info.fullName || info.fullName.trim().length < 2) {
      throw new AppError("Please provide a valid full name (minimum 2 characters).", 400);
    }
    if (!info.email || !info.email.includes("@")) {
      throw new AppError("Please provide a valid email address.", 400);
    }
    if (!info.phone || info.phone.trim().length < 10) {
      throw new AppError("Please provide a valid 10-digit mobile number.", 400);
    }
    if (!info.address || info.address.trim().length < 5) {
      throw new AppError("Please provide a complete delivery address.", 400);
    }
    if (!info.pincode || info.pincode.trim().length < 6) {
      throw new AppError("Please provide a valid 6-digit PIN code.", 400);
    }
    return true;
  }
}
