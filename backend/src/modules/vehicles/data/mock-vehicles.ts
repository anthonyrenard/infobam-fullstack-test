import { FuelType, Vehicle, VehicleType } from "src/common/interfaces/vehicle.interface";

export const mockVehicles: Vehicle[] = [
    {
      id: 'tesla-model3-2022',
      manufacturer: 'Tesla',
      model: 'Model 3',
      year: 2022,
      type: VehicleType.ELECTRIC,
      price: 45000,
      fuelType: FuelType.ELECTRIC,
      transmission: 'Automatic',
      mileage: 15000,
      features: ['Autopilot', 'Premium Sound System', '15" Touchscreen', 'Over-the-air Updates'],
      images: ['/images/tesla-model3-1.jpg'],
      description: 'Long Range Model 3 with full self-driving capability. One-owner vehicle with regular maintenance.',
      createdAt: new Date('2023-06-15'),
      updatedAt: new Date('2023-12-01')
    },
    {
      id: 'bmw-x5-2021',
      manufacturer: 'BMW',
      model: 'X5',
      year: 2021,
      type: VehicleType.SUV,
      price: 62000,
      fuelType: FuelType.GASOLINE,
      transmission: 'Automatic',
      mileage: 28000,
      features: ['Leather Seats', 'Panoramic Roof', 'Navigation', 'Parking Assistant'],
      images: ['/images/bmw-x5-1.jpg'],
      description: 'Luxurious BMW X5 with M Sport package. Excellent condition with comprehensive service history.',
      createdAt: new Date('2023-05-20'),
      updatedAt: new Date('2023-11-15')
    },
    {
      id: 'toyota-camry-2023',
      manufacturer: 'Toyota',
      model: 'Camry',
      year: 2023,
      type: VehicleType.SEDAN,
      price: 32000,
      fuelType: FuelType.HYBRID,
      transmission: 'Automatic',
      mileage: 5000,
      features: ['Toyota Safety Sense', 'Apple CarPlay', 'Android Auto', 'Wireless Charging'],
      images: ['/images/toyota-camry-1.jpg'],
      description: 'Nearly new Camry Hybrid with excellent fuel economy and latest safety features.',
      createdAt: new Date('2023-08-01'),
      updatedAt: new Date('2023-12-05')
    },
    {
      id: 'ford-f150-2022',
      manufacturer: 'Ford',
      model: 'F-150',
      year: 2022,
      type: VehicleType.TRUCK,
      price: 48000,
      fuelType: FuelType.GASOLINE,
      transmission: 'Automatic',
      mileage: 20000,
      features: ['Pro Power Onboard', 'Trailer Tow Package', 'Sync 4', 'Co-Pilot 360'],
      images: ['/images/ford-f150-1.jpg'],
      description: 'Powerful F-150 with towing package and advanced driver assistance features.',
      createdAt: new Date('2023-07-10'),
      updatedAt: new Date('2023-11-30')
    },
    {
      id: 'porsche-911-2021',
      manufacturer: 'Porsche',
      model: '911',
      year: 2021,
      type: VehicleType.SPORTS,
      price: 125000,
      fuelType: FuelType.GASOLINE,
      transmission: 'Automatic',
      mileage: 12000,
      features: ['Sport Chrono Package', 'Carbon Ceramic Brakes', 'Bose Sound System', 'Sport Exhaust'],
      images: ['/images/porsche-911-1.jpg'],
      description: 'Pristine 911 Carrera S with premium options and excellent maintenance history.',
      createdAt: new Date('2023-04-15'),
      updatedAt: new Date('2023-10-20')
    },
    {
      id: 'honda-crv-2022',
      manufacturer: 'Honda',
      model: 'CR-V',
      year: 2022,
      type: VehicleType.SUV,
      price: 34000,
      fuelType: FuelType.HYBRID,
      transmission: 'CVT',
      mileage: 18000,
      features: ['Honda Sensing', 'Wireless CarPlay', 'Power Tailgate', 'LED Headlights'],
      images: ['/images/honda-crv-1.jpg'],
      description: 'Efficient and practical CR-V Hybrid with advanced safety features.',
      createdAt: new Date('2023-06-01'),
      updatedAt: new Date('2023-11-25')
    },
    {
      id: 'mercedes-s500-2023',
      manufacturer: 'Mercedes',
      model: 'S500',
      year: 2023,
      type: VehicleType.LUXURY,
      price: 110000,
      fuelType: FuelType.HYBRID,
      transmission: 'Automatic',
      mileage: 8000,
      features: ['MBUX', 'Executive Rear Seats', 'Burmester 3D Sound', 'Digital Light'],
      images: ['/images/mercedes-s500-1.jpg'],
      description: 'Top-of-the-line S-Class with all available luxury features.',
      createdAt: new Date('2023-09-01'),
      updatedAt: new Date('2023-12-10')
    },
    {
      id: 'rivian-r1t-2022',
      manufacturer: 'Rivian',
      model: 'R1T',
      year: 2022,
      type: VehicleType.ELECTRIC,
      price: 75000,
      fuelType: FuelType.ELECTRIC,
      transmission: 'Automatic',
      mileage: 10000,
      features: ['Gear Tunnel', 'Air Suspension', 'Camp Kitchen', 'Driver+'],
      images: ['/images/rivian-r1t-1.jpg'],
      description: 'Adventure-ready electric truck with innovative storage solutions.',
      createdAt: new Date('2023-07-20'),
      updatedAt: new Date('2023-11-15')
    },
    {
      id: 'audi-etron-2023',
      manufacturer: 'Audi',
      model: 'e-tron GT',
      year: 2023,
      type: VehicleType.ELECTRIC,
      price: 105000,
      fuelType: FuelType.ELECTRIC,
      transmission: 'Automatic',
      mileage: 6000,
      features: ['Matrix LED', 'Virtual Cockpit', 'Bang & Olufsen Sound', 'Massage Seats'],
      images: ['/images/audi-etron-1.jpg'],
      description: 'High-performance electric GT with cutting-edge technology.',
      createdAt: new Date('2023-08-15'),
      updatedAt: new Date('2023-12-01')
    },
    {
      id: 'lexus-ls500-2022',
      manufacturer: 'Lexus',
      model: 'LS 500',
      year: 2022,
      type: VehicleType.LUXURY,
      price: 85000,
      fuelType: FuelType.GASOLINE,
      transmission: 'Automatic',
      mileage: 15000,
      features: ['Mark Levinson Audio', 'Kiriko Glass', 'Semi-aniline Leather', 'Executive Package'],
      images: ['/images/lexus-ls500-1.jpg'],
      description: 'Flagship Lexus sedan with Japanese craftsmanship and luxury features.',
      createdAt: new Date('2023-05-10'),
      updatedAt: new Date('2023-10-30')
    }
  ];

  // Helper function to generate more vehicles
function generateMoreVehicles(count: number): Vehicle[] {
    const years = [2020, 2021, 2022, 2023];
    const colors = ['Red', 'Blue', 'Black', 'White', 'Silver'];
    
    return Array.from({ length: count }, (_, index) => {
      const baseVehicle = mockVehicles[index % mockVehicles.length];
      const year = years[Math.floor(Math.random() * years.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        ...baseVehicle,
        id: `${baseVehicle.id}-${index}`,
        year,
        price: Math.round(baseVehicle.price * (0.9 + Math.random() * 0.2)),
        mileage: Math.round(Math.random() * 50000),
        description: `${condition} ${color} ${baseVehicle.manufacturer} ${baseVehicle.model}. ${baseVehicle.description}`,
        createdAt: new Date(Date.now() - Math.random() * 10000000000),
        updatedAt: new Date()
      };
    });
  }

export const extendedMockVehicles = [...mockVehicles, ...generateMoreVehicles(40)];
