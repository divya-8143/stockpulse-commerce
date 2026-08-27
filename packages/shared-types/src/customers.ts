import { CustomerTier } from "./enums.js";

export interface CustomerAddress {
  id: string;
  customerId: string;
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  tier: CustomerTier;
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  firstOrderDate?: Date;
  lastOrderDate?: Date;
  addresses: CustomerAddress[];
  isActive: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCustomerDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  tier?: CustomerTier;
  addresses?: Omit<CustomerAddress, "id" | "customerId">[];
  tags?: string[];
}
