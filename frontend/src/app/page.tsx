import Image from "next/image";
import VehiculeList from "@/components/vehicle/VehiculeList";

export default async function Home() {



  return (
    <div className="container mx-auto">
      <VehiculeList/>
    </div>
  );
}
