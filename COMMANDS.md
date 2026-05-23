# Commands

## Setup (once)

```bash
cd /Users/josephal-chami/Desktop/github/agent
cp .env.example .env          # paste CURSOR_API_KEY
npm install
cd ui && npm install && cd ..
```

## Pipeline

```bash
npm run pipeline:framework    # Phase 1 — design research framework
npm run pipeline:collect      # Phase 2 — collect startup ideas
npm run pipeline:rank         # Phase 3 — evaluate & rank ideas
npm run pipeline:all          # Run all phases sequentially
```

## UI

```bash
npm run ui                    # open http://localhost:5173
```

## Services (ongoing agents, not pipeline phases)

```bash
npm run service:frontend                              # investigate & improve ui/
npm run service:frontend -- "focus on mobile layout"  # with extra instructions
npm run service:frontend -- --resume agent-XXXX       # resume interrupted run
```

## Cloud (optional — walk away, laptop can close)

Add to `.env`:

```
PIPELINE_RUNTIME=cloud
CLOUD_REPO_URL=https://github.com/ExpJo/agent.git
```

Then run any pipeline command above.

## Resume interrupted run

```bash
npm run pipeline -- framework --resume agent-XXXX
npm run pipeline -- collect --resume agent-XXXX
npm run pipeline -- rank --resume agent-XXXX
```

Agent ID is printed when a run starts. Also in `logs/pipeline.jsonl`.

## Git (after a pipeline phase)

```bash
git add data/ logs/
git commit -m "Add framework output from Phase 1"
git push
```

Never commit `.env`.
