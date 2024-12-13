// src/app/page.tsx

import '../styles/globals.css';
import VehiclesPage from './components/VehiclesPage';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <VehiclesPage />
    </main>
  );
}
