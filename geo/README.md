# GEO Baseline Prompt Panel

Run each prompt on ChatGPT (search on) and Perplexity, 3 runs each, ideally on different days.
Fill one row per run in `prompt-panel.csv`. Judgment columns are filled by reading answers, never inferred.
Re-run monthly; only movements that persist across paraphrases and weeks are real.

| id | target intent | prompt |
|----|---------------|--------|
| p1 | category / best | What is a good benchmark for reinforcement learning based network resource allocation or virtual network embedding? |
| p2 | brand | What is Virne (NFV / network resource allocation benchmark)? |
| p3 | brand | FlagVNE reinforcement learning network resource allocation — what is it and where is the code? |
| p4 | who-is | Who is Tianfu Wang, the researcher working on RL for networking at HKUST(GZ)? |
| p5 | problem / how | How do I get started experimenting with RL for virtual network embedding? Are there Gymnasium environments? |

Paraphrases (use in rotation across runs):
- p1: "RL benchmark for VNE or NFV resource allocation" / "simulator to compare DRL methods for virtual network embedding"
- p2: "Virne benchmark ICLR 2026" / "Virne simulator NFV"
- p3: "FlagVNE IJCAI 2024 code" / "flexible RL framework VNE FlagVNE GitHub"
- p4: "Tianfu Wang HKUST Guangzhou publications" / "GeminiLight GitHub networking research"
- p5: "gym environment for VNE research" / "python package to benchmark DRL VNE algorithms"

Scoring: mentioned (yes/no), cited_url (exact URL if cited), position (rank in answer),
sentiment (pos/neu/neg), competitors_named, sources_cited (list domains).
Success criterion: Virne or tianfuwang.tech cited in >= 30% of p1/p5 runs by month 3.
