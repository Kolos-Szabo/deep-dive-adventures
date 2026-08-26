# Fix the failing GitHub Actions deployment

## What's wrong

The build job fails before it ever builds the site, so the deploy job stays stuck in "pending" (it waits for the build).

Confirmed cause: `package.json` and `package-lock.json` disagree on one dependency.

- `package.json` requires `@lovable.dev/vite-tanstack-config` version `2.13.1`
- `package-lock.json` still contains `2.12.0`

The workflow uses `npm ci`, which refuses to run when the lock file is out of sync and stops with an error. This has nothing to do with the blog posts themselves — the new articles are correct in the code.

## Fix

1. Regenerate the lock file so it matches `package.json` (lock-file-only update, no dependency upgrades beyond the required version).
2. Make the workflow's install step resilient: if `npm ci` fails due to an out-of-sync lock file, fall back to `npm install` so a future version bump in the preview can never block deployment again.
3. Verify locally with the exact CI sequence: clean install, `npm run build`, and confirm `dist/index.html`, `dist/blog/index.html`, the new article folders, and `dist/sitemap.xml` all exist.

## Note on the custom domain

`public/` currently has no `CNAME` file. If GitHub Pages is serving `buvarkodas.ro` through a repository CNAME, each deployment can drop the domain setting. Tell me if the domain is configured in the repo settings and I'll add a `CNAME` file to `public/` so it survives every deploy.

## Technical details

- Update `package-lock.json` via `npm install --package-lock-only`.
- Edit `.github/workflows/deploy.yml` install step to `npm ci || npm install`.
- No application/source code changes; blog data and sitemap generation stay as they are.
