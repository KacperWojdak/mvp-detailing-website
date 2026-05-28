// src/store/usePricingStore.ts
import { create } from "zustand";

type Package = "Basic" | "Premium" | "Elite" | "Wycena indywidualna" | "";

interface PricingStore {
  selectedPackage: Package;
  setSelectedPackage: (pkg: Package) => void;
}

export const usePricingStore = create<PricingStore>((set) => ({
  selectedPackage: "",
  setSelectedPackage: (pkg) => set({ selectedPackage: pkg }),
}));