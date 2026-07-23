# Data Processing Scripts

This folder contains the TypeScript scripts used to transform and validate raw administrative data before generating JSON files.

## Data Flow

```text
data/raw
   ↓
scripts
   ↓
validation
   ↓
data/generated
   ↓
src/services/administration.ts
   ↓
npm package and REST API
```

## Folder Responsibilities

### `data/raw`

Contains the original source files, such as:

* Official administrative documents
* INSTAT datasets
* HDX/OCHA datasets
* OpenStreetMap exports
* CSV, Excel, JSON, or GeoJSON files

### `scripts`

Contains TypeScript scripts that:

1. Read files from `data/raw`
2. Process and normalize the data
3. Validate required fields and relationships
4. Convert the data to JSON
5. Save valid files in `data/generated`

Possible scripts:

```text
scripts/
├── import-official.ts
├── import-instat.ts
├── import-hdx.ts
├── import-osm.ts
├── validate-data.ts
└── build-data.ts
```

Run a script with:

```bash
npx tsx scripts/build-data.ts
```

Run validation separately with:

```bash
npx tsx scripts/validate-data.ts
```

### Validation

Validation scripts should check for basic problems such as:

* Missing codes
* Missing names
* Duplicate codes
* Invalid parent references
* Invalid data types

Invalid data should not be written to `data/generated`.

### `data/generated`

Contains the processed and validated JSON files created by the scripts.

```text
data/generated/
├── regions.json
├── cercles.json
├── communes.json
└── villages.json
```

The generated files should match the interfaces defined in `src/types.ts`.

## Application Usage

`src/services/administration.ts` reads the generated JSON files and exposes functions for accessing the data.

The npm package and REST API should both use these service functions.

## Summary

```text
data/raw          Original source files
scripts           Processing and validation scripts
data/generated    Processed and validated JSON files
src/services      Functions that expose the data
```
