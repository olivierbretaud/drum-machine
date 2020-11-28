import A1 from '../assets/sounds/Clap-1.mp3';
import A2 from '../assets/sounds/Clap-2.mp3';
import A3 from '../assets/sounds/Clap-3.mp3';
import A4 from '../assets/sounds/Clap-4.mp3';

import B1 from '../assets/sounds/Bassdrum-1.mp3';
import B2 from '../assets/sounds/Bassdrum-2.mp3';
import B3 from '../assets/sounds/Bassdrum-3.mp3';
import B4 from '../assets/sounds/Bassdrum-4.mp3';

import C1 from '../assets/sounds/snare-1.mp3';
import C2 from '../assets/sounds/snare-2.mp3';
import C3 from '../assets/sounds/snare-3.mp3';
import C4 from '../assets/sounds/snare-4.mp3';
import C5 from '../assets/sounds/snare-5.mp3';

import D1 from '../assets/sounds/cymbal-1.mp3';
import D2 from '../assets/sounds/cymbal-2.mp3';
import D3 from '../assets/sounds/cymbal-3.mp3';

import E1 from '../assets/sounds/latin-1.mp3';
import E2 from '../assets/sounds/latin-2.mp3';
import E3 from '../assets/sounds/latin-3.mp3';
import E4 from '../assets/sounds/latin-4.mp3';
import E5 from '../assets/sounds/latin-5.mp3';
import E6 from '../assets/sounds/latin-6.mp3';
import E7 from '../assets/sounds/latin-7.mp3';
import E8 from '../assets/sounds/latin-8.mp3';

// export const playList = { A1 , A2 , A3 , A4 , A5 ,A6, A7,  B1 , B2, B3 };

export const playList = {
  A1 , A2 , A3 , A4,
  B1 , B2 , B3 , B4,
  C1, C2 , C3 , C4 , C5,
  D1 , D2 , D3 ,
  E1, E2 , E3 , E4 , E5, E6 , E7 , E8,
};

//COMMENT

export const allCategories = [
  {
    name: "Claps",
    color: "#33FFDA",
    list: [
      {
        note: "A1",
        isActive: true
      },
      {
        note: "A2",
        isActive: true
      },
      {
        note: "A3",
        isActive: true
      },
      {
        note: "A4",
        isActive: true
      }
    ]
  },
  {
    name: "BassDrums",
    color: "#ffac33",
    list: [
      {
        note: "B1",
        isActive: true
      },
      {
        note: "B2",
        isActive: true
      },
      {
        note: "B3",
        isActive: true
      },
      {
        note: "B4",
        isActive: true
      }
    ]
  },
  {
    name: "Snares",
    color: "#DA33FF",
    list: [
      {
        note: "C1",
        isActive: true
      },
      {
        note: "C2",
        isActive: true
      },
      {
        note: "C3",
        isActive: true
      },
      {
        note: "C4",
        isActive: true
      },
      {
        note: "C5",
        isActive: true
      }
    ]
  },
  {
    name: "Cymbals",
    color: "#6B33FF",
    list: [
      {
        note: "D1",
        isActive: true
      },
      {
        note: "D2",
        isActive: true
      },
      {
        note: "D3",
        isActive: true
      }
    ]
  },
  {
    name: "Latins",
    color: "#33beff",
    list: [
      {
        note: "E1",
        isActive: true
      },
      {
        note: "E2",
        isActive: true
      },
      {
        note: "E3",
        isActive: true
      },
      {
        note: "E4",
        isActive: true
      },
      {
        note: "E5",
        isActive: true
      },
      {
        note: "E6",
        isActive: true
      },
      {
        note: "E7",
        isActive: true
      },
      {
        note: "E8",
        isActive: true
      }
    ]
  },
]