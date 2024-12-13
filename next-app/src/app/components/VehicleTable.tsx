import { Vehicle } from '../../models/vehicle';
import Link from 'next/link';
import Image from 'next/image';

interface VehicleTableProps {
  vehicles: Vehicle[];
}

const VehicleTable = ({ vehicles }: VehicleTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-fixed w-full">
        {/* En-tête du Tableau */}
        <thead>
          <tr>
            {/* <th className="w-24">Image</th> */}
            <th className="w-1/5">Brand</th>
            <th className="w-1/5">Model</th>
            <th className="w-1/10">Year</th>
            <th className="w-1/10">Type</th>
            <th className="w-1/10">Price</th>
            <th className="w-1/5"></th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} className="hover:bg-gray-50">
              {/* <td className="w-24">
                <div className="avatar">
                  <div className="w-24 full-rounded">
                    <Image
                      src={vehicle.images[0]}
                      alt={`${vehicle.manufacturer} ${vehicle.model}`}
                      width={96}
                      height={72}
                      className="object-cover"
                    />
                  </div>
                </div>
              </td> */}
              <td>{vehicle.manufacturer}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.type}</td>
              <td>${vehicle.price.toLocaleString()}</td>
              <td>
              <Link href={`/vehicles/${vehicle.id}`} className="btn btn-sm btn-primary">
                View Details
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
