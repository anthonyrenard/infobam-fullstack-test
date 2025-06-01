import { FuelType, Vehicle, VehicleType } from "@/types/Vehicle";

export const vehicleList: Vehicle[] = [
  {
    id: "1",
    manufacturer: "BMW",
    model: "X5",
    year: 2024,
    type: VehicleType.SUV,
    price: 85000,
    fuelType: FuelType.GASOLINE,
    transmission: "Automatic",
    mileage: 10000,
    features: ["Bluetooth", "Navigation", "Leather Seats", "Panoramic Roof"],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800"
    ],
    description: "Un SUV luxueux avec un moteur puissant et des fonctionnalités avancées.",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  },
  {
    id: "2",
    manufacturer: "Tesla",
    model: "Model 3",
    year: 2023,
    type: VehicleType.ELECTRIC,
    price: 45000,
    fuelType: FuelType.ELECTRIC,
    transmission: "Automatic",
    mileage: 5000,
    features: ["Autopilot", "Glass Roof", "Premium Sound System"],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800"
    ],
    description: "Une berline électrique performante avec une autonomie impressionnante.",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02")
  },
  {
    id: "3",
    manufacturer: "Mercedes-Benz",
    model: "S-Class",
    year: 2022,
    type: VehicleType.LUXURY,
    price: 120000,
    fuelType: FuelType.HYBRID,
    transmission: "Automatic",
    mileage: 8000,
    features: ["Massage Seats", "Burmester Sound", "Ambient Lighting"],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"
    ],
    description: "La berline de luxe par excellence avec un intérieur somptueux.",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03")
  },
  {
    id: "4",
    manufacturer: "Porsche",
    model: "911",
    year: 2021,
    type: VehicleType.SPORTS,
    price: 110000,
    fuelType: FuelType.GASOLINE,
    transmission: "Automatic",
    mileage: 3000,
    features: ["Sport Chrono", "Carbon Ceramic Brakes", "Sport Exhaust"],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
    ],
    description: "Une icône sportive avec des performances exceptionnelles.",
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04")
  },
  {
    id: "5",
    manufacturer: "Toyota",
    model: "RAV4",
    year: 2024,
    type: VehicleType.SUV,
    price: 35000,
    fuelType: FuelType.HYBRID,
    transmission: "Automatic",
    mileage: 15000,
    features: ["Safety Sense 2.0", "Apple CarPlay", "Android Auto"],
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800"
    ],
    description: "Un SUV compact fiable et économique.",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05")
  },
  {
    id: "6",
    manufacturer: "Audi",
    model: "RS e-tron GT",
    year: 2020,
    type: VehicleType.ELECTRIC,
    price: 95000,
    fuelType: FuelType.ELECTRIC,
    transmission: "Automatic",
    mileage: 2000,
    features: ["Matrix LED", "Bang & Olufsen Sound", "Virtual Cockpit"],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"
    ],
    description: "Une berline électrique sportive avec un design futuriste.",
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-06")
  },
  {
    id: "7",
    manufacturer: "Ford",
    model: "F-150",
    year: 2019,
    type: VehicleType.TRUCK,
    price: 55000,
    fuelType: FuelType.GASOLINE,
    transmission: "Automatic",
    mileage: 12000,
    features: ["Pro Power Onboard", "360° Camera", "Trailer Backup Assist"],
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800"
    ],
    description: "Un pick-up robuste et polyvalent.",
    createdAt: new Date("2024-01-07"),
    updatedAt: new Date("2024-01-07")
  },
  {
    id: "8",
    manufacturer: "Lexus",
    model: "ES",
    year: 2018,
    type: VehicleType.SEDAN,
    price: 45000,
    fuelType: FuelType.HYBRID,
    transmission: "Automatic",
    mileage: 9000,
    features: ["Mark Levinson Audio", "Lexus Safety System+", "Panoramic Roof"],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"
    ],
    description: "Une berline de luxe avec un excellent rapport qualité-prix.",
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08")
  },
  {
    id: "9",
    manufacturer: "Volkswagen",
    model: "ID.4",
    year: 2022,
    type: VehicleType.ELECTRIC,
    price: 40000,
    fuelType: FuelType.ELECTRIC,
    transmission: "Automatic",
    mileage: 7000,
    features: ["ID.Light", "Travel Assist", "Panoramic Roof"],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800"
    ],
    description: "Un SUV électrique familial et pratique.",
    createdAt: new Date("2024-01-09"),
    updatedAt: new Date("2024-01-09")
  },
  {
    id: "10",
    manufacturer: "Chevrolet",
    model: "Corvette",
    year: 2024,
    type: VehicleType.SPORTS,
    price: 85000,
    fuelType: FuelType.GASOLINE,
    transmission: "Automatic",
    mileage: 1000,
    features: ["Z51 Performance Package", "Magnetic Ride Control", "Carbon Fiber Interior"],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
    ],
    description: "Une supercar américaine avec un moteur central.",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10")
  }
];