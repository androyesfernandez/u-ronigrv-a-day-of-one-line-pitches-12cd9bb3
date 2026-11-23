// A Day of One-Line Pitches — entry program.
// Writes the one-sentence pitch (204 characters, verified) to
// /output/entry.txt (UTF-8, no trailing newline).
// The line won a 16-draft duel bracket judged on the kit's own brief:
// concrete promise to a non-coder friend, low-risk kicker at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Say the app idea you've been telling friends about for years out loud, and an AI agent on make.fun builds a first version you can tap tonight — if you hate it, you change one sentence, not a line of code.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
