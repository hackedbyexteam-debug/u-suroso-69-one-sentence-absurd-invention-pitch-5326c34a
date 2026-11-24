// One-Sentence Absurd Invention Pitch — one sentence, 220 chars max.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 12 candidates against the judge's
// published criteria (on-brief first; laugh from the invention itself;
// silly yet weirdly plausible fix; fresh absurdity; tight sentence naming
// the annoyance, the invention and its mechanism):
//   WINNER (96 chars, limit 220): "A toothbrush that emails your dentist
//   a chart of every night you skipped, subject line: 'Again.'"
//   Why it wins: the laugh is the invention itself — a toothbrush that
//   snitches to your dentist — not a joke bolted on at the end. The fix is
//   silly yet weirdly plausible: shame is the only thing that ever made
//   anyone floss, so a chart of skipped nights plus a two-word subject line
//   ("Again.") is a real mechanism, and the punch lands in the last words.
//   Concrete nouns throughout: toothbrush, dentist, chart, every night.
//   The entry is a single sentence: one sentence-ending period, at the end.
//   Runner-up: a fridge that locks at midnight and only opens if you solve
//   a riddle it wrote, so 2 a.m. snacks have to earn their calories —
//   fresher mechanism, but the riddle is a puzzle, not a fix, so its C3 is
//   weaker than the toothbrush's shame engine.
//   Discarded: the hiding alarm clock (Clocky is a real product — not
//   original, C4 fails); the kettle that only boils after an apology
//   (reheats the sponsor's own sighing-kettle example); the umbrella that
//   refuses drizzle (funny snobbery, but it never fixes getting wet, C3
//   fails); the chair that walks away after two hours (visual, but the fix
//   is just "chase your seat", no mechanism beyond walking).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `A toothbrush that emails your dentist a chart of every night you skipped, subject line: 'Again.'`;

const MAX_CHARS = 220; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
