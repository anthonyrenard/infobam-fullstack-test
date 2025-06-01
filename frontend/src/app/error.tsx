"use client";

import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <FaExclamationTriangle className="text-6xl text-error mb-4" />
          <h2 className="card-title text-2xl font-bold mb-2">Oups ! Une erreur est survenue</h2>
          <p className="text-error mb-4">{error.message}</p>
          <div className="card-actions">
            <button 
              onClick={reset}
              className="btn btn-primary"
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}