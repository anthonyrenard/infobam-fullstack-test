# Documentation du Projet

## Routes API

Les routes API sont les points d'entrée HTTP de l'application. Ce sont les URLs que vous appelez depuis le frontend pour communiquer avec le backend.

### `/api/vehicles`
- **Méthode**: POST
- **Description**: Récupère les véhicules avec pagination, filtrage et tri
- **Corps de la requête**:
  ```typescript
  {
    page: number,        // Page actuelle (min: 1)
    sortBy: string,      // Option de tri
    filterData: {
      manufacturer: string,
      type: string,
      year: string
    }
  }
  ```
- **Réponse**:
  ```typescript
  {
    data: Vehicle[],     // Liste des véhicules
    totalPages: number   // Nombre total de pages
  }
  ```

### `/api/vehicles/filter`
- **Méthode**: GET
- **Description**: Récupère les options de filtrage disponibles
- **Réponse**:
  ```typescript
  {
    manufacturersOptions: string[],
    typesOptions: string[],
    yearsOptions: string[]
  }
  ```

### `/api/vehicles/sorter`
- **Méthode**: GET
- **Description**: Récupère les options de tri disponibles
- **Réponse**:
  ```typescript
  {
    sortByOptions: string[]
  }
  ```

## Services API (VehicleService)

Les services API sont des classes qui encapsulent la logique métier et les opérations sur les données. Ils sont utilisés en interne par les routes API pour effectuer les opérations nécessaires.

### Méthodes Principales

- `getVehicles()`: Récupère la liste complète des véhicules
- `getPaginatedVehicles(vehicles, page, pageSize)`: Récupère une page spécifique de véhicules
- `getVehicleById(id)`: Récupère un véhicule spécifique par son ID
- `getTotalVehicles()`: Retourne le nombre total de véhicules
- `getFilteredVehicles(filterData)`: Filtre les véhicules selon différents critères
- `getSortedVehicles(vehicles, sortBy)`: Trie les véhicules selon différents critères

### Méthodes de Filtrage et Tri

- `getVehicleSortByOptions()`: Retourne les options de tri disponibles
- `getVehicleManufacturers()`: Retourne la liste des fabricants
- `getVehicleTypes()`: Retourne les types de véhicules disponibles
- `getVehicleYears()`: Retourne les années disponibles

## Structure des Composants

### Dossiers Principaux

- `/components/vehicle/`: Composants liés aux véhicules
- `/components/ui/`: Composants d'interface utilisateur réutilisables
- `/components/pagination/`: Composants de pagination

## Types de Données

Les types principaux sont définis dans le dossier `/types/` :

- `Vehicle`: Interface définissant la structure d'un véhicule
- `VehicleFilterData`: Interface pour les données de filtrage

## Données Statiques

Les données statiques sont stockées dans le dossier `/data/` :

- `vehicleList`: Liste des véhicules
- `vehicleManufacturerOptions`: Options de fabricants
- `vehicleTypeOptions`: Options de types de véhicules
- `vehicleYearOptions`: Options d'années
- `vehicleSortByOptions`: Options de tri

## Hooks Personnalisés

Les hooks personnalisés sont disponibles dans le dossier `/hooks/` pour la logique réutilisable.

## Services

Les services sont situés dans le dossier `/services/` et gèrent la logique métier et les appels API.
