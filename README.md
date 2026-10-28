# nomos-landing

Página pública do Nomos. Apresenta o produto e leva o visitante ao sistema dos escritórios (`nomos-web`).

## Desenvolvimento

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abre em [http://localhost:3005](http://localhost:3005).

`NEXT_PUBLIC_APP_URL` é o endereço do `nomos-web`. Em produção, defina essa variável antes do build.
