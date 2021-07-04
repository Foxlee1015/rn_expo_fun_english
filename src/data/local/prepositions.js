export const prepositionTypes = ['time', 'place', 'number', 'advanced']
export const prepositions = [
  {
    title: 'On',
    colors: ['rose.200', 'rose.800'],
    contents: {
      number: null,
      time: {
        title: 'I go to church on Sundays',
        definition: [
          'For specific dates and days.',
          'Indicate a time frame during which something takes place'
        ],
        synonyms: [],
        examples: [
          'He was born on September 24th.',
          'I go to the gym on Mondays and Wednesdays.'
        ]
      },
      place: {
        title: 'A cup is on the table.',
        definition: ['Something is on the surface of something else.', 'indicate position in contact with and supported by the top surface of'],
        synonyms: [],
        examples: [
          'The papers are on the coffee table.',
          'I left the keys on the counter.'
        ]
      },
      advanced: [
        {
          title: 'To indicate a source of dependence.',
          examples: ['You can rely on me.', 'He lives on a pension.']
        },
        {
          title: 'To indicate the location of something.',
          examples: ['The building is on the left.', 'My house is on the south side of the house.']
        },
        {
          title: 'To indicate means.',
          examples: ['I cut myself on a knife', 'He is talking on the phone']
        },
      ]    
    }
  },
  {
    title: 'In',
    colors: ['pink.200', 'pink.800'],
    contents: {
      number: null,
      time: {
        title: 'I will travel in the summer',
        definition: [
          'For an unspecific time of the day, a month, a season or a year.'
        ],
        synonyms: [],
        examples: [
          'I always brush my teeth in the morning.',
          'My birthday is in June.',
          'It’s always cold in the winter.'
        ]
      },
      place: {
        title: 'My dad is in the toilet.',
        definition: ['To indicate a location or place', 'To indicate location, or position within limits'],
        synonyms: [],
        examples: ['I used to live in Florida.', 'I am walking in the park.', 'The ducks are swimming in the lake']
      },
      advanced: [
        {
          title: 'To indicate means.',
          examples: ['It was written in pencil.']
        },
        {
          title: 'To indicate limitation, qualification, or circumstance.',
          examples: ['The students left in a hurry']
        },
        {
          title: 'To indicate inclusion within or occurrence during a period or limit of time.',
          examples: ['I will go to bed in an hour.']
        },
        {
          title: 'To indicate transition from one state to another.',
          examples: ['Break the wood in half.']
        },
      ] 
    }
  },
  {
    title: 'Under',
    colors: ['warmGray.200', 'warmGray.800'],
    contents: {
      time: null,
      place: {
        title: 'Your phone is under the book',
        definition: ['Something is on the surface of something else', 'Talk about something that is lower than something else.'],
        synonyms: ['Below'],
        examples: [
          'She pushed her bag under the table.',
          'I left the keys on the counter.',
          'The boat is under the bridge'
        ]
      },
      number: {
        title: 'The price will be under $100',
        definition: ['less than a number, amount, or age',],
        synonyms: ['Below'],
        examples: [
          'You can buy the whole system for just under $2,000'
        ]
      },
      advanced: [
        {
          title: 'Subject to the authority, control, guidance, or instruction of.',
          examples: ['Under the terms of the contract.']
        },
        {
          title: 'Receiving or undergoing the action or effect of.',
          examples: ['Under pressure', 'Under oath', 'New laws passed under President Reagan']
        },
        {
          title: 'in the state or process of.',
          examples: ['I cut myself on a knife', 'He is talking on the phone']
        },
      ]
    }
  },
  {
    title: 'In front of',
    colors: ['purple.200', 'purple.800'],
    contents: {
      number: null,
      time: {
        title: 'For specific dates and days.',
        definition: [],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'Something is on the surface of something else',
        definition: [],
        synonyms: [],
        examples: [
          'The papers are on the coffee table',
          'I left the keys on the counter.'
        ]
      },
      advanced: [
        {
          title: 'To indicate a source of dependence.',
          examples: ['You can rely on me.', 'He lives on a pension.']
        }
    ]
    }
  },
  {
    title: 'Behind',
    colors: ['violet.200', 'violet.800'],
    contents: {
      number: null,
      time: null,
      place: {
        title: 'Something is on the surface of something else',
        definition: [],
        synonyms: [],
        examples: [
          'The papers are on the coffee table',
          'I left the keys on the counter.'
        ]
      },
      advanced: [
        {
          title: 'To indicate a source of dependence.',
          examples: ['You can rely on me.', 'He lives on a pension.']
        }
      ]
    }
  },
  {
    title: 'Inside',
    colors: ['indigo.200', 'indigo.800'],
    contents: {
      number: null,
      time: null,
      place: {
        title: 'Something is on the surface of something else',
        definition: [],
        synonyms: [],
        examples: [
          'There were some keys inside the box.',
          'I’m cold – let’s go back inside.',
          'He waited inside the church'
        ]
      },
      advanced: null
    }
  },
  {
    title: 'At',
    colors: ['blue.200', 'blue.800'],
    contents: {
      number: {
        title: 'I am at the party!',
        definition: ['To indicate the rate, degree, or position in a scale or series', 'To indicate age or position in time'],
        synonyms: [],
        examples: ['I will see you at 8:00 pm.', 'My dad will retire at 65.']
      },
      time: {
        title: 'The meeting starts at three',
        definition: ['To show the time something happens'],
        synonyms: [],
        examples: ['I will see you at 8:00 pm.', 'My interview is at 3:00 pm.']
      },
      place: {
        title: 'I am at the party!',
        definition: ['To indicate a point or place occupied in space'],
        synonyms: [],
        examples: [
          'We are meeting at the cafe.',
          'The football game is at the stadium.'
        ]
      },
      advanced: [
          {
          title: 'To show the cause of something, especially a feeling.',
          examples: ['We were surprised at the news.', 'He lives on a pension.']
        },
        {
          title: 'A direction or Objective.',
          examples: ['I threw the ball at him.', 'Look at that.']
        },
        {
          title: 'Indicate a state, condition or a cause.',
          examples: ['At peace', 'She was annoyed at his stupidity.']
        }
      ]
    }
  },
  {
    title: 'By',
    colors: ['lightBlue.200', 'lightBlue.800'],
    contents: {
      number: {
        title: 'I will be there by 2 p.m.',
        definition: ['multiplication, in division, and in measurements'],
        synonyms: [],
        examples: [
          'Divide a by b', 'Multiply 10 by 4', 
        ]
      },
      time: {
        title: 'I will be there by 2 p.m.',
        definition: ['Before a particular time or date'],
        synonyms: [],
        examples: [
          'Applications have to be in by the 31st.'
        ]
      },
      place: {
        title: 'A nice house by a lake.',
        definition: ['near to or next to'],
        synonyms: [],
        examples: [
          'I’ll meet you by the post office.',
        ]
      },
      advanced: [
        {
          title: 'Through doing or using something',
          examples: ['I sent it by email.', 'We’ll get there by car.', 'They arrived by ship.']
        }
      ]
    }
  },
  {
    title: 'Next-x',
    colors: ['cyan.200', 'cyan.800'],
    contents: {
      number: null,
      time: {
        title: 'For specific dates and days.',
        definition: [],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'Something is on the surface of something else',
        definition: [],
        synonyms: [],
        examples: [
          'The papers are on the coffee table',
          'I left the keys on the counter.'
        ]
      },
      advanced: [
        {
          title: 'Through doing or using something',
          examples: ['I sent it by email.', 'We’ll get there by car.', 'They arrived by ship.']
        }
      ]
    }
  },
  {
    title: 'Beside',
    colors: ['teal.200', 'teal.800'],
    contents: {
      number: null,
      time: null,
      place: {
        title: 'She sat down beside him.',
        definition: ['by the side of', 'next to someone or something'],
        synonyms: [],
        examples: [
          'The papers are on the coffee table',
          'I left the keys on the counter.'
        ]
      },
      advanced: null,
    }
  },
  {
    title: 'Below',
    colors: ['lime.200', 'lime.800'],
    contents: {
      number: {
        title: 'The temperature there rarely drops below 22 degrees.',
        definition: ['less than an amount or level'],
        synonyms: [],
        examples: [
          'The temperature there rarely drops below 22 degrees.',
        ]
      },
      time: null,
      place: {
        title: 'There are two chairs below the table',
        definition: ['In a lower position than someone or something else', 'South of'],
        synonyms: [],
        examples: [
          'He could hear people shouting below his window.',
          "located 20 miles below the nation's capital"
        ]
      },
      advanced: null
    }
  },
  {
    title: 'Into',
    colors: ['amber.200', 'amber.800'],
    contents: {
      number: null,
      time: null,
      place: {
        title: 'They came into the house.',
        definition: ['To indicate entry, introduction, insertion, superposition, or inclusion', 'In the direction of something or someone'],
        synonyms: [],
        examples: [
          'Get into bed!',
          'I left the keys on the counter.',
          'She looked into his eyes.',
          'I lost control of the car and crashed into a fence.'
        ]
      },
      advanced: [
        {
          title: 'Show a change from one condition to another or from one kind of thing to another',
          examples: ['Chop the apple into small pieces.', 'We turned the smallest bedroom into an office.']
        },
        {
          title: 'Involving or about something',
          examples: ['There was an investigation into the cause of the fire.']
        }
      ]
    }
  },
  {
    title: 'Toward',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Beneath',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Next to',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Across',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Through',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Along',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Between',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Among',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Out of',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'For',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'From',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Off',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'During',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'After',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Within',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  },
  {
    title: 'Untill',
    colors: ['red.200', 'red.800'],
    contents: {
      number: null,
      time: {
        title: "Towards one o'clock",
        definition: ['Near to a time'],
        synonyms: [],
        examples: [
          'He was born on September 24th',
          'I go to the gym on Mondays and Wednesdays'
        ]
      },
      place: {
        title: 'She stood up and walked towards him.',
        definition: ['In the direction of someone or something'],
        synonyms: [],
        examples: [
          'Your back was toward me.',
          'Driving toward town.'
        ]
      },
      advanced: [
        {
          title: 'As a contribution or help to',
          examples: ['Money towards a new car.', 'The essays you do during term count towards your final grade.']
        } 
      ]
    }
  }
]
