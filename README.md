# GoldSky

Phone parts & repair storefront for GoldSky (Eheliyagoda / Ratnapura, Sri Lanka). This is a two-app monorepo:

```
goldsky/
├── frontend/   Next.js storefront + admin-facing consumer (public site)
├── backend/    Laravel API + Blade admin panel (data, auth, business logic)
├── README.md
└── .gitignore
```

## frontend/ — Next.js

The public storefront. See [frontend/AGENTS.md](frontend/AGENTS.md) for framework-specific
notes (this project pins a Next.js version with breaking changes vs. stock docs — read that
file before touching frontend code).

```bash
cd frontend
npm install
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000). Reads product/service data from the
Laravel API via `NEXT_PUBLIC_API_URL` (see `frontend/.env.local`).

## backend/ — Laravel

REST API (`/api/v1/*`) and a server-rendered Blade admin panel (`/admin`) for managing
products, stock, services, categories, brands, and pricing.

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan storage:link
php artisan serve
```

Runs at [http://localhost:8000](http://localhost:8000). Admin panel at
[http://localhost:8000/admin](http://localhost:8000/admin) (seeded admin credentials are in
`backend/database/seeders/AdminUserSeeder.php` / `backend/.env`).

## Development

Run both apps side by side (two terminals): `backend` on :8000, `frontend` on :3000. The
frontend is configured to call the backend at `http://localhost:8000/api/v1`.
