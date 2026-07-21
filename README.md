# open-mali 🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱🇲🇱

> Official administrative data for Mali — REST API and typed npm package, ready to use.

Regions, cercles, communes, coordinates: a reliable, structured data source on Mali's administrative divisions, built for developers building applications, websites, or tools related to Mali.

## Why this project?

There's currently no single, up-to-date, easily consumable source (API + package) for Mali's administrative data. `open-mali` centralizes and validates this data from official sources (official decrees, INSTAT) and complementary ones (OpenStreetMap, HDX/OCHA).

## Installation

```bash
npm install @open-mali
```

## Quick usage

```ts
import { getRegions, getCercles, getCommunes } from '@open-mali';

// All regions
const regions = getRegions();

// Cercles within a given region
const cercles = getCercles({ regionCode: 'ML-BKO' });

// Communes within a cercle
const communes = getCommunes({ cercleCode: 'ML-BKO-01' });
```

## REST API

The project also exposes a lightweight REST API (Hono) for use without installing the package.

```bash
GET /api/regions
GET /api/regions/:code/cercles
GET /api/cercles/:code/communes
GET /api/communes/:code/villages
```

**Example response (`GET /api/regions`):**

```json
[
  {
    "code": "ML-BKO",
    "name": "Bamako",
    "type": "district"
  },
  {
    "code": "ML-KYS",
    "name": "Kayes",
    "type": "region"
  }
]
```

## Data structure

| Field         | Description                                  |
|---------------|----------------------------------------------|
| `code`        | Official code of the administrative entity   |
| `name`        | Name of the region/cercle/commune            |
| `parentCode`  | Code of the parent administrative entity     |
| `coordinates` | Geographic coordinates (latitude/longitude)  |

## Data sources

- Official decrees **2023-006** and **2023-007** (administrative divisions)
- **INSTAT** (Mali's National Institute of Statistics)
- **OpenStreetMap** (complementary geographic data)
- **HDX / OCHA** (reference humanitarian data)

## Known open questions

Some areas require a team decision, tracked in [`DECISIONS.md`](./DECISIONS.md):
- Discrepancy between INSTAT and OSM on the total number of communes (815 vs 819)
- Bamako's specific administrative status (district vs region)

## Contributing

This project is part of the [Mande Open Source Network](https://github.com/mande-open-source-network). Check out issues tagged [`good-first-issue`](../../issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue) to get started, or the network's `CONTRIBUTING.md` for details.

## License

MIT