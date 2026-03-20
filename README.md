# Test Eyes Demo

Demo repository for testing the `test-eyes-reporter` Playwright reporter.

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
# Run tests (reporter will collect data)
npm test

# Run multiple times to accumulate data
npm test && npm test && npm test
```

## Test Cases

- **auth**: Fast tests that always pass
- **payments**: Slow tests (1.5s delay) that always pass
- **profile**: Flaky tests (~50% failure rate)
- **notifications**: Fast tests that always pass

## Dashboard

After running tests, the dashboard is deployed to GitHub Pages at:
`https://YOUR_USERNAME.github.io/test-eyes-demo/`

## GitHub Pages Setup

1. Enable GitHub Pages: Settings → Pages → Source: "Deploy from a branch" → `gh-pages`
2. Push code and run tests - the reporter will deploy automatically
