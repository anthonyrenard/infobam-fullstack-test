'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import VehicleDetail from '@/components/VehicleDetail'
import { vehicleService } from '@/services/vehicleService'
import { Vehicle } from '@/types/vehicle'
import Link from 'next/link'

export default function VehicleDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVehicle = async () => {
      if (!id) return
      
      try {
        setLoading(true)
        const data = await vehicleService.getVehicleById(id)
        setVehicle(data)
      } catch (err) {
        setError('Failed to fetch vehicle details')
      } finally {
        setLoading(false)
      }
    }

    fetchVehicle()
  }, [id])

  if (loading) {
    return <div className="animate-pulse bg-white h-96 rounded-lg" />
  }

  if (error || !vehicle) {
    return (
      <div>
        <div className="bg-red-50 p-4 rounded-lg text-red-800">
          {error || 'Vehicle not found'}
        </div>
        <Link href="/" className="mt-4 inline-block text-blue-500">
          ← Back to vehicles
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link href="/" className="mb-4 inline-block text-blue-500">
        ← Back to vehicles
      </Link>
      <VehicleDetail vehicle={vehicle} />
    </div>
  )
}