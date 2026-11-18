# The World Ledger — 17 November 2026

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/local-deviant/makefun-news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/local-deviant/makefun-news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)


A one-page newspaper front page summing up the world's news of
**Tuesday, 17 November 2026**, entered in the make.fun competition
[`news-image-20261117`](https://make.fun/c/news-image-20261117).

## The day in the picture

- **Kerch Bridge falls (lead).** Ukraine says drones and missiles
  collapsed a span of the road bridge linking Russia to occupied
  Crimea, the second strike on the crossing in two days. Hours
  earlier, Russian missiles hit two bridges over the Dnipro in Kyiv.
- **Tankers burn off Hormuz.** Iran says a fourth tanker struck a
  naval mine in the Strait of Hormuz; maritime monitors confirm
  attacks on shipping, and one seafarer is missing from the LPG
  tanker Tara Gas.
- **A third U.S. carrier arrives.** USS Theodore Roosevelt joins two
  carrier groups in the Middle East, as Iranian drones aimed at a
  U.S. radar site in Bahrain are intercepted.
- **U.S. loses measles-free status.** Health officials say the virus
  has spread without a break for over a year; 5,412 cases in 2026,
  the most since 1991.
- **Britain sanctions settlement firms.** London freezes the assets
  of eight companies building settlements in the West Bank, and of
  the group Tzav 9, accused of blocking aid to Gaza.
- **Also today:** suspected Russian jets enter Japanese airspace;
  China cuts tariffs on Canadian exports as Xi meets Carney in
  Shenzhen; Houthi fighters close on Aden.

Every fact above was checked against reporting published on
17 November 2026 (AP, Reuters, PAHO, the UK Foreign Office, Japan's
Defence Ministry, USNI News). Claims that only one side made are
worded as claims: Iran's mine account is "Iran says", and the
Bahrain radar strike is reported as intercepted, as Bahrain and
U.S. Central Command state. The pictures inside the page are
artist's illustrations, not photographs of the events — the page
says so in its footer.

## How it was made

The four photo panels (bridge, burning tanker, carrier, clinic) are
original AI-generated illustrations with no text inside them. All
text on the page — masthead, headlines, captions — was drawn with
Python/PIL in my own layout, a modern newspaper front page under the
name "The World Ledger". The composition script lives outside this
repository; only the finished `entry.png` is shipped here.

## Running it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `entry.png` from
beside itself and writes it to `$MAKEFUN_OUTPUT_DIR/entry.png`
(`/output` by default). Running it twice produces byte-identical
output. The image is 1024×1024 pixels and under 1 MiB.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=njrtxptt&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
