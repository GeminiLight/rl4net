export type PaperLink = {
  label: string;
  href: string;
};

export type PaperFigure = { src: string; w: number; h: number; fig: string; caption: string };

export type Paper = {
  figure?: PaperFigure;
  id: string;
  short: string;
  title: string;
  venue: string;
  venueTag: string;
  year: number;
  problem: string;
  approach: string;
  contribution: string;
  authors: string;
  award?: string;
  links: PaperLink[];
  bibtex: string;
};

export const papers: Paper[] = [
  {
    id: 'drl-sfcp',
    short: 'DRL-SFCP',
    title: 'DRL-SFCP: Adaptive Service Function Chains Placement with Deep Reinforcement Learning',
    venue: 'IEEE International Conference on Communications (ICC)',
    venueTag: 'ICC 2021',
    year: 2021,
    problem: 'Service function chain placement',
    approach: 'Deep RL',
    contribution: 'An adaptive deep RL method that places service function chains under dynamic traffic and resource conditions.',
    authors: 'Tianfu Wang, Qilin Fan, Xiuhua Li, Xu Zhang, Qingyu Xiong, Shu Fu, Min Gao',
    links: [
      { label: 'Paper', href: 'https://ieeexplore.ieee.org/document/9500964' },
      { label: 'Code', href: 'https://github.com/GeminiLight/drl-sfcp' },
    ],
    bibtex: `@INPROCEEDINGS{icc-2021-drl-sfcp,
  author={Wang, Tianfu and Fan, Qilin and Li, Xiuhua and Zhang, Xu and Xiong, Qingyu and Fu, Shu and Gao, Min},
  booktitle={ICC 2021 - IEEE International Conference on Communications},
  title={DRL-SFCP: Adaptive Service Function Chains Placement with Deep Reinforcement Learning},
  year={2021},
  pages={1-6},
}`,
  },
  {
    figure: { src: 'hrl-acra.png', w: 1400, h: 906, fig: 'Fig. 3', caption: 'Overall framework of the hierarchical method for admission control-aware VNE.' },
    id: 'hrl-acra',
    short: 'HRL-ACRA',
    title: 'Joint Admission Control and Resource Allocation of Virtual Network Embedding via Hierarchical Deep Reinforcement Learning',
    venue: 'IEEE Transactions on Services Computing (TSC)',
    venueTag: 'TSC 2024',
    year: 2023,
    problem: 'Joint admission control and allocation',
    approach: 'Hierarchical DRL',
    contribution: 'A two-level hierarchical DRL agent that jointly decides which virtual network requests to admit and how to embed them.',
    authors: 'Tianfu Wang, Shen Li, Qilin Fan, Tong Xu, Tongliang Liu, Hui Xiong',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2406.17334' },
      { label: 'Code', href: 'https://github.com/GeminiLight/hrl-acra' },
    ],
    bibtex: `@ARTICLE{tsc-2023-hrl-acra,
  author={Wang, Tianfu and Shen, Li and Fan, Qilin and Xu, Tong and Liu, Tongliang and Xiong, Hui},
  journal={IEEE Transactions on Services Computing},
  title={Joint Admission Control and Resource Allocation of Virtual Network Embedding Via Hierarchical Deep Reinforcement Learning},
  volume={17},
  number={03},
  pages={1001--1015},
  year={2024},
}`,
  },
  {
    figure: { src: 'flagvne.png', w: 1400, h: 892, fig: 'Fig. 2', caption: 'Overview of the FlagVNE framework: vary-sized requests as distinct tasks under one RL framework.' },
    id: 'flagvne',
    short: 'FlagVNE',
    title: 'FlagVNE: A Flexible and Generalizable Reinforcement Learning Framework for Network Resource Allocation',
    venue: 'International Joint Conference on Artificial Intelligence (IJCAI)',
    venueTag: 'IJCAI 2024',
    year: 2024,
    problem: 'Unified VNE and SFC placement',
    approach: 'Generalizable RL framework',
    contribution: 'A flexible RL framework that generalizes across NFV resource allocation tasks without task-specific redesign.',
    authors: 'Tianfu Wang, Qilin Fan, Chao Wang, Long Yang, Leilei Ding, Nicholas Jing Yuan, Hui Xiong',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2404.12633' },
      { label: 'Code', href: 'https://github.com/GeminiLight/flag-vne' },
    ],
    bibtex: `@INPROCEEDINGS{ijcai-2024-flagvne,
  title={FlagVNE: A Flexible and Generalizable Reinforcement Learning Framework for Network Resource Allocation},
  author={Wang, Tianfu and Fan, Qilin and Wang, Chao and Ding, Leilei and Yuan, Nicholas Jing and Xiong, Hui},
  booktitle={Proceedings of the 33rd International Joint Conference on Artificial Intelligence},
  year={2024},
}`,
  },
  {
    id: 'constraint-aware',
    short: 'Constraint-aware',
    title: 'Towards Constraint-aware Learning for Resource Allocation in NFV Networks',
    venue: 'ICML Workshop on Machine Learning for Wireless Communication and Networks (ML4Wireless)',
    venueTag: 'ICMLW 2025',
    year: 2025,
    problem: 'NFV resource allocation',
    approach: 'Constraint-aware RL',
    contribution: 'Learning that keeps RL solutions feasible under strict NFV resource constraints.',
    authors: 'Tianfu Wang, Long Yang, Chao Wang, Chuan Qin, Liwei Deng, Li Shen, Hui Xiong',
    award: 'Best Paper Award (1 of 33 accepted papers)',
    figure: { src: 'conal.png', w: 1400, h: 631, fig: 'Fig. 2', caption: 'Overview of the CONAL constraint-aware learning framework.' },
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2410.22999' },
      { label: 'Code', href: 'https://github.com/GeminiLight/conal-vne' },
    ],
    bibtex: `@inproceedings{ml4wireless-2025-constraint,
  title={Towards Constraint-aware Learning for Resource Allocation in NFV Networks},
  author={Wang, Tianfu and Yang, Long and Wang, Chao and Qin, Chuan and Deng, Liwei and Shen, Li and Xiong, Hui},
  booktitle={ICML 2025 Workshop on Machine Learning for Wireless Communication and Networks (ML4Wireless)},
  year={2025},
}`,
  },
  {
    figure: { src: 'virne-arch.png', w: 1400, h: 558, fig: 'Fig. 2', caption: 'The architecture of the Virne benchmark: simulation, solver, environment, and evaluation.' },
    id: 'virne',
    short: 'Virne',
    title: 'Virne: A Comprehensive Benchmark for RL-based Network Resource Allocation in NFV',
    venue: 'International Conference on Learning Representations (ICLR)',
    venueTag: 'ICLR 2026',
    year: 2026,
    problem: 'NFV-RA benchmark (VNE, VNF placement, SFC, slicing)',
    approach: 'Benchmark and simulator',
    contribution: 'A simulator and benchmark that unifies exact, heuristic, meta-heuristic, and learning-based solvers behind one Gymnasium-compatible interface, evaluated on effectiveness, solvability, generalization, and scalability.',
    authors: 'Tianfu Wang, Liwei Deng, Xi Chen, Junyang Wang, Huiguo He, Zhengyu Hu, Wei Wu, Leilei Ding, Qilin Fan, Hui Xiong',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2507.19234' },
      { label: 'Code', href: 'https://github.com/GeminiLight/virne' },
      { label: 'Docs', href: 'https://virne.readthedocs.io' },
      { label: 'PyPI', href: 'https://pypi.org/project/virne/' },
    ],
    bibtex: `@inproceedings{tfwang-2026-virne,
  title={Virne: A Comprehensive Benchmark for RL-based Network Resource Allocation in NFV},
  author={Wang, Tianfu and Deng, Liwei and Chen, Xi and Wang, Junyang and He, Huiguo and Hu, Zhengyu and Wu, Wei and Ding, Leilei and Fan, Qilin and Xiong, Hui},
  booktitle={The Fourteenth International Conference on Learning Representations},
  year={2026},
}`,
  },
];
